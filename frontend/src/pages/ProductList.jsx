import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
const BASE_URL = import.meta.env.VITE_DJANGO_BASE_URL;
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/api/products/`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;