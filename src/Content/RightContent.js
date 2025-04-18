import React, { useState, useEffect } from 'react';
import Card from './Card';

function RightContent() {
  const [products, setProducts] = useState([]); // State để lưu trữ dữ liệu sản phẩm
  const [loading, setLoading] = useState(true); // State để hiển thị trạng thái tải dữ liệu

  useEffect(() => {
    // Hàm gọi API để lấy dữ liệu
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://656ca88ee1e03bfd572e9c16.mockapi.io/products');
        const data = await response.json();
        setProducts(data); // Lưu dữ liệu vào state
      } catch (error) {
        console.error('Lỗi khi gọi API:', error);
      } finally {
        setLoading(false); // Kết thúc trạng thái tải
      }
    };

    fetchProducts(); // Gọi hàm khi component được mount
  }, []);

  return (
    <div>
      <div id="right-content">
        <h2>Product:</h2>
        <div id="products">
          {loading ? ( // Hiển thị trạng thái tải
            <p>Loading products...</p>
          ) : (
            products.map((item) => (
              <Card
                key={item.id} // Thêm key để React theo dõi từng phần tử
                name={item.name}
                img={item.avatar}
                category={item.category}
                price={item.price}
              />
            ))
          )}
          <div style={{ clear: 'both' }} />
        </div>
        <div style={{ clear: 'both' }} />
      </div>
    </div>
  );
}

export default RightContent;
