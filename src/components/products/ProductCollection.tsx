import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function ProductCollection() {
  return (
    <section id="collection" className="product-collection page-frame section-space" aria-labelledby="collection-title" data-page-region="collection">
      <div className="collection-heading">
        <div><p className="eyebrow">The collection</p><h2 id="collection-title" className="section-title">ENGINEERED<br />FOR THE EDGE.</h2></div>
        <p className="body-copy">Two expressions of performance. Discover the details behind every ride.</p>
      </div>
      <div className="collection-grid">{products.map((product, index) => <ProductCard key={product.id} product={product} number={index + 1} />)}</div>
    </section>
  );
}
