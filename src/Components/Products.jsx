import React from "react";
import Layout from "./Layout";

function Products() {
  // const products = [
  //   {
  //     id: 1,
  //     name: "Men's Shirt Slim Blue",
  //     description: "This is the best shirt available in the online market",
  //     price: 3600,
  //     originalPrice: 4500,
  //     discount: "20% Off",
  //     image: "/images/products/a (2).jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Men's Shirt Slim Blue",
  //     description: "This is the best shirt available in the online market",
  //     price: 3600,
  //     originalPrice: 4500,
  //     discount: "20% Off",
  //     image: "/images/products/b (2).jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Men's Shirt Slim Blue",
  //     description: "This is the best shirt available in the online market",
  //     price: 3600,
  //     originalPrice: 4500,
  //     discount: "20% Off",
  //     image: "/images/products/c (2).jpg",
  //   },
  //   {
  //     id: 4,
  //     name: "Men's Shirt Slim Blue",
  //     description: "This is the best shirt available in the online market",
  //     price: 3600,
  //     originalPrice: 4500,
  //     discount: "20% Off",
  //     image: "/images/products/j.jpg",
  //   },
  //   {
  //     id: 1,
  //     name: "Men's Shirt Slim Blue",
  //     description: "This is the best shirt available in the online market",
  //     price: 3600,
  //     originalPrice: 4500,
  //     discount: "20% Off",
  //     image: "/images/products/h.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Men's Shirt Slim Blue",
  //     description: "This is the best shirt available in the online market",
  //     price: 3600,
  //     originalPrice: 4500,
  //     discount: "20% Off",
  //     image: "/images/products/g.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Men's Shirt Slim Blue",
  //     description: "This is the best shirt available in the online market",
  //     price: 3600,
  //     originalPrice: 4500,
  //     discount: "20% Off",
  //     image: "/images/products/f.jpg",
  //   },
  //   {
  //     id: 4,
  //     name: "Men's Shirt Slim Blue",
  //     description: "This is the best shirt available in the online market",
  //     price: 3600,
  //     originalPrice: 4500,
  //     discount: "20% Off",
  //     image: "/images/products/e.jpg",
  //   },
  // ];

  const [products, setProducts] = useState([]);
  return (
    <Layout>
      {/* <h1>Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
      {products.map((product,index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-56 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-500 text-sm">{product.description}</p>
            <div className="mt-2 flex items-center">
              <span className="text-blue-600 font-bold text-lg">
                ₹{product.price}
              </span>
              <span className="ml-2 text-gray-400 line-through">
                ₹{product.originalPrice}
              </span>
              <span className="ml-2 text-green-600 text-sm">
                {product.discount}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div> */}
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold mb-4">Products</h1>
          <button className="bg-indigo-600 text-white rounded py-2 px-4">
            <i className="ri-sticky-note-add-line mr-2"></i>
            New Product
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {/* Product grid content goes here */}
        </div>

        <div className="bg-black bg-opacity-80 absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <div className="bg-white w-6/12 p-4 rounded-md border border-1 relative">
            <button className="absolute top-2 right-3">
              <i className="ri-close-line text-lg"></i>
            </button>
            <h1 className="text-lg font-semibold">New Product</h1>
            <form>{/* Form content goes here */}</form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Products;
