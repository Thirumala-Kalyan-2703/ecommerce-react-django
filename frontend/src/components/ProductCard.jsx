const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4">
      <img
       src={`${import.meta.env.VITE_DJANGO_BASE_URL}${product.image}`}
        alt={product.name}
        className="w-full h-48 object-contain"
      />

      <h2 className="text-xl font-bold mt-2">
        {product.name}
      </h2>

      <p className="text-gray-600">
        {product.description}
      </p>

      <p className="text-lg font-semibold mt-2">
        ₹{product.price}
      </p>
    </div>
  );
};

export default ProductCard;