export type Product = {
  id: string;
  name: string;
  description: string;
  images: { src: string; view: string }[];
};

const image = (group: string, file: string, view: string) => ({
  src: `/images/products/${group}/${encodeURIComponent(file)}`,
  view,
});

export const products: Product[] = [
  {
    id: "helmet-01", name: "HELMET 01",
    description: "Electric colour. A silhouette with a different perspective from every angle.",
    images: [
      image("helmet_1", "image.webp", "Front three-quarter view"),
      image("helmet_1", "image (2).webp", "Right side profile"),
      image("helmet_1", "image (5).webp", "Rear three-quarter view"),
      image("helmet_1", "image (1).webp", "Front view"),
    ],
  },
  {
    id: "helmet-02", name: "HELMET 02",
    description: "Orange in focus. Bold graphics follow the lines of a sculpted shell.",
    images: [
      image("helmet_2", "image.webp", "Front three-quarter view"),
      image("helmet_2", "image (2).webp", "Right side profile"),
      image("helmet_2", "image (1).webp", "Front view"),
    ],
  },
];
