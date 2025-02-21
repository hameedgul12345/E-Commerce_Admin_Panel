import React from "react";
import Layout from "./Layout";


function Category() {
    const categories = [
        { id: 1, name: "Electronics", icon: "🔌" },
        { id: 2, name: "Fashion", icon: "👗" },
        { id: 3, name: "Smartphones", icon: "📱" },
        { id: 4, name: "Furnitures", icon: "🛋️" },
        { id: 5, name: "Men's", icon: "👔" },
        { id: 6, name: "Women's", icon: "👠" },
        { id: 7, name: "Electronics", icon: "💻" },
        { id: 8, name: "Electronics", icon: "🎧" },
      ];
      
  return (
    <Layout>
     <h1 className="font-semibold p-6 text-4xl text-center">All Categories</h1>
     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
      {categories.map((category, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center"
        >
          <span className="text-3xl">{category.icon}</span> {/* Placeholder for Icon */}
          <p className="mt-2 font-semibold">{category.name}</p>
        </div>
      ))}
    </div>
    </Layout>
  );
}

export default Category;
