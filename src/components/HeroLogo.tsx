"use client";

import { useEffect, useRef } from "react";
import type { Object3D } from "three";
import { BrandLogo } from "./BrandLogo";

export function HeroLogo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const hero = container?.closest<HTMLElement>(".hero-media-shell");
    if (!container || !hero) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let disposed = false;
    let visible = true;
    let frame = 0;
    let render: ((time: number) => void) | undefined;
    let releaseScene: (() => void) | undefined;
    let resizeObserver: ResizeObserver | undefined;
    const pointer = { x: 0, y: 0 };

    function updatePointer(event: PointerEvent) {
      if (!hero || !visible || reducedMotion.matches || event.pointerType === "touch") return;
      const bounds = hero.getBoundingClientRect();
      pointer.x = Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width) * 2 - 1));
      pointer.y = Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height) * 2 - 1));
    }

    function resetPointer() {
      pointer.x = 0;
      pointer.y = 0;
    }

    function animate(time: number) {
      frame = 0;
      if (disposed || !visible || document.hidden || !render) return;
      render(time);
      if (!reducedMotion.matches) frame = requestAnimationFrame(animate);
    }

    function refresh() {
      cancelAnimationFrame(frame);
      frame = 0;
      if (!disposed && visible && !document.hidden && render) {
        frame = requestAnimationFrame(animate);
      }
    }

    function updateScroll() {
      if (!container || !hero) return;
      const distance = Math.max(0, window.scrollY);
      const progress = Math.min(1, distance / Math.min(180, hero.clientHeight * 0.4));
      const nextVisible = reducedMotion.matches ? progress === 0 : progress < 1;
      container.style.opacity = String(reducedMotion.matches ? Number(progress === 0) : 1 - progress);
      container.style.transform = reducedMotion.matches
        ? "none"
        : `translateY(${-18 * progress}px) scale(${1 - progress * 0.06})`;
      container.style.visibility = nextVisible ? "visible" : "hidden";
      if (visible !== nextVisible) {
        visible = nextVisible;
        refresh();
      }
    }

    function updateMotion() {
      resetPointer();
      updateScroll();
      refresh();
    }

    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll, { passive: true });
    window.addEventListener("blur", resetPointer);
    hero.addEventListener("pointermove", updatePointer, { passive: true });
    hero.addEventListener("pointerleave", resetPointer);
    document.addEventListener("visibilitychange", refresh);
    reducedMotion.addEventListener("change", updateMotion);

    async function loadScene() {
      const [THREE, { GLTFLoader }, { RoomEnvironment }] = await Promise.all([
        import("three"),
        import("three/addons/loaders/GLTFLoader.js"),
        import("three/addons/environments/RoomEnvironment.js"),
      ]);
      if (disposed || !container) return;

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
      renderer.setClearColor(0x000000, 0);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.35;
      renderer.domElement.setAttribute("aria-hidden", "true");
      container.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 30);
      camera.position.z = 4.6;

      // Reflections preserve the GLB's metallic, iridescent material.
      const room = new RoomEnvironment();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const environment = pmrem.fromScene(room, 0.04);
      scene.environment = environment.texture;
      room.dispose();
      pmrem.dispose();

      const key = new THREE.DirectionalLight(0xffffff, 3);
      key.position.set(2, 3, 4);
      const rim = new THREE.DirectionalLight(0x91cbff, 2);
      rim.position.set(-3, 1, 2);
      scene.add(key, rim, new THREE.AmbientLight(0xffffff, 0.8));

      function disposeModel(object: Object3D) {
        const textures = new Set<InstanceType<typeof THREE.Texture>>();
        object.traverse(child => {
          if (!(child instanceof THREE.Mesh)) return;
          child.geometry.dispose();
          const materials = Array.isArray(child.material) ? child.material : [child.material];
          for (const material of materials) {
            for (const value of Object.values(material)) {
              if (value instanceof THREE.Texture) textures.add(value);
            }
            material.dispose();
          }
        });
        textures.forEach(texture => {
          texture.dispose();
          if (typeof ImageBitmap !== "undefined" && texture.image instanceof ImageBitmap) texture.image.close();
        });
      }

      let model: Object3D | undefined = undefined;
      releaseScene = () => {
        if (model) disposeModel(model);
        environment.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };

      function resize() {
        if (!container) return;
        const { width, height } = container.getBoundingClientRect();
        if (!width || !height) return;
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        refresh();
      }
      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(container);
      resize();

      const gltf = await new GLTFLoader().loadAsync("/images/logo/Agv_motorsports_logo-holo.glb");
      if (disposed) {
        disposeModel(gltf.scene);
        return;
      }

      model = gltf.scene;
      const bounds = new THREE.Box3().setFromObject(model);
      const size = bounds.getSize(new THREE.Vector3());
      const center = bounds.getCenter(new THREE.Vector3());
      const scale = 2 / Math.max(size.x, size.y, size.z);
      model.scale.multiplyScalar(scale);
      model.position.copy(center).multiplyScalar(-scale);
      const pivot = new THREE.Group();
      pivot.add(model);
      scene.add(pivot);

      let previousTime = 0;
      render = time => {
        const delta = previousTime ? Math.min((time - previousTime) / 1000, 0.064) : 1 / 60;
        previousTime = time;
        // Frame-rate-independent easing makes the logo follow without snapping.
        const ease = 1 - Math.exp(-12 * delta);
        if (reducedMotion.matches) {
          pivot.rotation.set(0, 0, 0);
          pivot.position.set(0, 0, 0);
        } else {
          pivot.rotation.x = THREE.MathUtils.lerp(pivot.rotation.x, pointer.y * 0.32, ease);
          pivot.rotation.y = THREE.MathUtils.lerp(pivot.rotation.y, pointer.x * 0.5, ease);
          pivot.position.x = THREE.MathUtils.lerp(pivot.position.x, pointer.x * 0.14, ease);
          pivot.position.y = THREE.MathUtils.lerp(pivot.position.y, -pointer.y * 0.1, ease);
        }
        renderer.render(scene, camera);
      };
      render(0);
      container.dataset.status = "ready";
      refresh();
    }

    void loadScene().catch(() => {
      // Keep the brand visible when WebGL or the model is unavailable.
      resizeObserver?.disconnect();
      releaseScene?.();
      releaseScene = undefined;
      render = undefined;
      if (!disposed) container.dataset.status = "fallback";
    });

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
      window.removeEventListener("blur", resetPointer);
      hero.removeEventListener("pointermove", updatePointer);
      hero.removeEventListener("pointerleave", resetPointer);
      document.removeEventListener("visibilitychange", refresh);
      reducedMotion.removeEventListener("change", updateMotion);
      resizeObserver?.disconnect();
      releaseScene?.();
    };
  }, []);

  return (
    <div ref={containerRef} className="hero-logo" aria-hidden="true">
      <BrandLogo />
    </div>
  );
}
