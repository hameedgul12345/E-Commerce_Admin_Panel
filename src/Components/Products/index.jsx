import React, { useEffect, useState } from "react";
import Layout from "../Layout";
import "animate.css";
import uploadFile from "../../util/storage";
import firebaseAppCinfig from "../../util/firebase-config";
import {
  getFirestore,
  addDoc,
  collection,
  getDocs,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
const db = getFirestore(firebaseAppCinfig);
function Products() {
  // const products = [
  //   {
  //     id: 1,
  //     name: "Men's Shirt Slim Blue",
  //     description: "This is the best shirt available in the online market",
  //     price: 3600,
  //     originalPrice: 4500,
  //     discount: "20% Off",
  //     image: "/images/products/a.webp",
  //   },
  //   {
  //     id: 2,
  //     name: "Men's Shirt Slim Blue",
  //     description: "This is the best shirt available in the online market",
  //     price: 3600,
  //     originalPrice: 4500,
  //     discount: "20% Off",
  //     image: "/images/products/b.webp",
  //   },
  //   {
  //     id: 3,
  //     name: "Men's Shirt Slim Blue",
  //     description: "This is the best shirt available in the online market",
  //     price: 3600,
  //     originalPrice: 4500,
  //     discount: "20% Off",
  //     image: "/images/products/c.webp",
  //   },
  //   {
  //     id: 4,
  //     name: "Men's Shirt Slim Blue",
  //     description: "This is the best shirt available in the online market",
  //     price: 3600,
  //     originalPrice: 4500,
  //     discount: "20% Off",
  //     image: "/images/products/d.webp",
  //   },
  //   {
  //     id: 1,
  //     name: "Men's Shirt Slim Blue",
  //     description: "This is the best shirt available in the online market",
  //     price: 3600,
  //     originalPrice: 4500,
  //     discount: "20% Off",
  //     image: "/images/products/e.webp",
  //   },
  //   {
  //     id: 2,
  //     name: "Men's Shirt Slim Blue",
  //     description: "This is the best shirt available in the online market",
  //     price: 3600,
  //     originalPrice: 4500,
  //     discount: "20% Off",
  //     image: "/images/products/f.webp",
  //   },
  //   {
  //     id: 3,
  //     name: "Men's Shirt Slim Blue",
  //     description: "This is the best shirt available in the online market",
  //     price: 3600,
  //     originalPrice: 4500,
  //     discount: "20% Off",
  //     image: "/images/products/g.webp",
  //   },
  //   {
  //     id: 4,
  //     name: "Men's Shirt Slim Blue",
  //     description: "This is the best shirt available in the online market",
  //     price: 3600,
  //     originalPrice: 4500,
  //     discount: "20% Off",
  //     image: "/images/products/h.webp",
  //   },
  // ];
  const [products, setProducts] = useState([]);
  const [productModel, setProductModel] = useState(false);
  const [imageUpdate, setImageUpdate] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const [productForm, setProductForm] = useState({
    title: "",
    price: "",
    discount: "",
    description: "",
  });
  const model = {
    title: "",
    price: "",
    discount: "",
    description: "",
  };
  const handleChanges = (e) => {
    const input = e.target;
    const name = input.name;
    const value = input.value;
    setProductForm({
      ...productForm,
      [name]: value,
    });
  };
  const uploadProductImage = async (e, id) => {
    const input = e.target;
    const file = input.files[0];
    const path = `products/${Date.now()}.png`;
    const url = await uploadFile(file, path);
    const ref = doc(db, "products", id);
    await updateDoc(ref, { image: url });
    setImageUpdate(!imageUpdate);
  };
  const createNewProduct = async (event) => {
    event.preventDefault(); // Prevent default form submission
    try {
      await addDoc(collection(db, "products"), productForm);
      console.log("created");
      setProductModel(!productModel);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const render = async () => {
      const snapshot = await getDocs(collection(db, "products"));
      const tem = [];
      snapshot.forEach((doc) => {
        const product = doc.data();
        product.id = doc.id;
        tem.push(product);
      });
      setProducts(tem);
    };
    render();
  }, [productModel, imageUpdate, products]);

  const deleteProduct = async (id) => {
    try {
      const ref = doc(db, "products", id);
      await deleteDoc(ref);
      console.log("Deleted");

      // Update state to remove the deleted product
      setProducts(products.filter((product) => product.id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  const editProducts = (item) => {
    setEditProduct(item);
    setProductForm(item);
    setProductModel(true);
  };
  const saveData = async (e) => {
    e.preventDefault();
    console.log(editProduct.id);
    const ref = doc(db, "products", editProduct.id);
    await updateDoc(ref, productForm);
    setProductForm(model);
    setProductModel(false);
  };
  // const createNewProduct = async (e) => {
  //   e.preventDefualt()
  //   alert("alert")
  //   try {
  //     await addDoc(collection(db, "products", productForm));
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  return (
    <Layout>
      <div>
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold mb-4">Products</h1>
          <button
            onClick={() => setProductModel(true)}
            className="bg-indigo-600 text-white rounded py-2 px-4"
          >
            <i className="ri-sticky-note-add-line mr-2"></i>
            New Product
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.image ? product.image : "/images/profile.png"}
                  alt={product.name}
                  className="w-full h-56 object-cover "
                />
                <input
                  type="file"
                  className="w-full h-full absolute top-0 left-0 opacity-0"
                  onChange={(e) => uploadProductImage(e, product.id)}
                />
              </div>
              <div className="p-4">
                <div className="flex flex-row justify-between items-center">
                  <h2 className="text-lg font-semibold">{product.title}</h2>
                  <div>
                    <i
                      className="ri-file-edit-fill"
                      onClick={() => editProducts(product)}
                    ></i>
                    <i
                      className="ri-delete-bin-fill"
                      onClick={() => deleteProduct(product.id)}
                    ></i>
                  </div>
                </div>
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
              {/* <div className="flex gap-2 mt-1">
               <h2 className="text-lg font-semibold">{product.name}</h2>
               <p className="text-gray-500 text-sm">{product.description}</p>
                <label>
                  ₹{product.price - (product.price * product.discount) / 100}
                </label>
                <del className="font-semibold">₹{product.price}</del>
                <label className="text-gray-600">
                  ({product.discount}% Off)
                </label>
              </div> */}
            </div>
          ))}
        </div>

        {productModel && (
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.8)",
            }}
            className="animate__animated animate__fadeIn absolute top-0 left-0 w-full h-full flex justify-center items-center"
          >
            <div className="bg-white w-6/12 p-4 rounded-md border border-1 relative animate__animated animate__pulse">
              <button
                className="absolute top-2 right-3"
                onClick={() => setProductModel(!productModel)}
              >
                <i className="ri-close-line text-lg"></i>
              </button>
              <h1 className="text-lg font-semibold">New Product</h1>

              <form onSubmit={editProduct ? saveData : createNewProduct}>
                <input
                  type="text"
                  placeholder="Enter product title here"
                  value={productForm.title}
                  name="title"
                  onChange={handleChanges}
                  className="w-full border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:ring focus:border-blue-300"
                />
                <div className="flex space-x-4 mb-4">
                  <input
                    type="number"
                    placeholder="Price"
                    value={productForm.price}
                    name="price"
                    onChange={handleChanges}
                    className="w-1/2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                  />
                  <input
                    type="number"
                    placeholder="Discount"
                    value={productForm.discount}
                    name="discount"
                    onChange={handleChanges}
                    className="w-1/2 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                  />
                </div>
                <textarea
                  placeholder="Description"
                  rows="4"
                  onChange={handleChanges}
                  value={productForm.description}
                  name="description"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                ></textarea>

                {/* Submit Button */}
                <div className="mt-4">
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
                    {editProduct ? "Save" : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Products;
