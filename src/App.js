import React, { useState } from "react";
import initialProducts from "./data";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState(initialProducts);
  const [formData, setFormData] = useState({
    name: "",
    category: "Nam",
    code: "",
    price: "",
    oldPrice: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFormData({
          ...formData,
          image: reader.result, 
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      name: formData.name,
      category: formData.category,
      code: formData.code,
      price: parseFloat(formData.price),
      oldPrice: formData.oldPrice ? parseFloat(formData.oldPrice) : null,
      image: formData.image,
    };

    setProducts([...products, newProduct]);

    setFormData({
      name: "",
      category: "Nam",
      code: "",
      price: "",
      oldPrice: "",
      image: null,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-800 text-white py-4 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-semibold">THỜI TRANG NAM</h1>
        </div>
      </header>

      <div className="product-container-wrapper">
        {products.map((product) => (
          <div key={product.id} className="product-container">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.code}</p>
            <div className="price-section">
              <p className="price">{product.price.toLocaleString()} đ</p>
              {product.oldPrice && (
                <p className="old-price">{product.oldPrice.toLocaleString()} đ</p>
              )}
            </div>
            <button>Đặt mua</button>
          </div>
        ))}
      </div>

      {/* Form thêm sản phẩm */}
      <div className="flex justify-center items-center py-8">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 space-y-6"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Thêm Sản Phẩm
          </h2>

          <div>
            <label className="block text-sm font-medium">Tên sản phẩm</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Dép"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Danh mục</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            >
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
              <option value="Unisex">Unisex</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium">Mã sản phẩm</label>
            <input
              type="text"
              name="code"
              value={formData.code}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="XXXXXX"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Giá</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="10000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Giá cũ (nếu có)</label>
            <input
              type="number"
              name="oldPrice"
              value={formData.oldPrice}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="15000"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Ảnh sản phẩm</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-500"
            />
            {formData.image && (
              <img
                src={formData.image}
                alt="Preview"
                className="mt-4 w-32 h-32 object-cover"
              />
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Lưu sản phẩm
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
