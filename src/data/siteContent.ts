export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Collection", href: "#collection" },
  { label: "Helmet", href: "#helmet" },
  { label: "FAQ", href: "#faq" },
] as const;

export const copy = {
  about: "Built around the pursuit of precision. Form, focus, and motion, shaped into a singular racing silhouette.",
  features: "Purposeful lines. Focused details. A racing silhouette refined for the moments that matter.",
  spotlight: "A study in form, focus and motion. Discover the details of a racing silhouette.",
  faq: "Explore the details behind the design, fit, visor and everyday care.",
} as const;

export const galleryItems = [
  { id: "carbon", label: "Carbon detail", media: "CARBON / SHELL MACRO", tone: "charcoal", image: "/images/product_material.jpg", fit: "cover" },
  { id: "visor", label: "Visor detail", media: "VISOR / EDGE DETAIL", tone: "graphite", image: "/images/products/helmet_2/image%20(1).webp", fit: "contain" },
  { id: "profile", label: "Helmet profile", media: "HELMET / SIDE PROFILE", tone: "mid", image: "/images/products/helmet_2/image%20(2).webp", fit: "contain" },
  { id: "finish", label: "Surface finish", media: "SHELL / SURFACE FINISH", tone: "soft", image: "/images/products/helmet_2/image.webp", fit: "contain" },
] as const;

export const faqs = [
  {
    id: "size",
    question: "How do I find my helmet size?",
    answer: "Use the current size guide for your chosen model and ask a qualified retailer to assess the fit. This concept does not provide sizing advice.",
  },
  {
    id: "personalise",
    question: "What can I personalise?",
    answer: "Explore the form and finish in this concept. Available colours, accessories and personalisation options depend on the actual model and retailer.",
  },
  {
    id: "design",
    question: "What makes this design distinctive?",
    answer: "A focused silhouette, sculpted lines and carefully framed details. This portfolio concept explores the visual language of a racing helmet.",
  },
  {
    id: "care",
    question: "How do I care for the visor?",
    answer: "Follow the care instructions supplied with your specific helmet and visor. Check the official product guidance before choosing cleaning products.",
  },
  {
    id: "details",
    question: "Where can I find official product details?",
    answer: "Consult AGV or an authorised retailer for current product specifications and availability. The labels on this page are part of an unofficial design concept.",
  },
] as const;
