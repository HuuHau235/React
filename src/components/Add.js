import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from './layout_admin/wrapper.js';
import Banner from './layout_admin/banner.js';
import { NavLink, useHistory, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add = () => {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    price: '',
    image: '',
    color: '',
    name_category: '',
    material: '',
    expiry_date: '',
    origin: '',
    description: '',
    tinhtranghang: true,
  });

  const history = useHistory();
  const { id } = useParams();  // Get product id from URL parameters

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3000/products/${id}`)
        .then(res => {
          const data = res.data;
          setProduct({
            id: data.id,
            name: data.name,
            price: data.price,
            image: data.image,
            color: data.color,
            name_category: data.name_category,
            material: data.material,
            expiry_date: data.expiry_date,
            origin: data.origin,
            description: data.description,
            tinhtranghang: data.tinhtranghang,
          });
        })
        .catch(err => {
          console.error(err);
        });
    }
  }, [id]);

  const onChange = (event) => {
    const { name, value, type } = event.target;

    let newValue = value;

    if (name === 'tinhtranghang') {
      newValue = value === 'true' ? true : false;
    }

    if (type === 'file') {
      newValue = event.target.files[0] ? URL.createObjectURL(event.target.files[0]) : '';
    }

    setProduct(prevState => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const onSave = (e) => {
    e.preventDefault();
    const { id, name, price, image, name_category, color, material, expiry_date, origin, description, tinhtranghang } = product;

    if (id) {
      axios.put(`http://localhost:3000/products/${id}`, {
        name,
        price,
        image,
        color,
        name_category,
        material,
        expiry_date,
        origin,
        description,
        tinhtranghang,
      })
      .then(() => {
        toast.success('Cập nhật sản phẩm thành công');
        history.goBack();
      })
      .catch(err => console.error(err));
    } else {
      if (!name || !price || !image || !material || !expiry_date) {
        toast.warn('Vui lòng nhập đủ nội dung');
      } else {
        axios.post('http://localhost:3000/products', {
          name,
          price,
          image,
          color,
          name_category,
          material,
          expiry_date,
          origin,
          description,
          tinhtranghang,
        })
        .then(() => {
          toast.success('Thêm sản phẩm thành công');
          history.goBack();
        })
        .catch(err => console.error(err));
      }
    }
  };

  const onClear = () => {
    setProduct({
      name: '',
      price: '',
      image: '',
      color: '',
      name_category: '',
      material: '',
      expiry_date: '',
      origin: '',
      description: '',
      tinhtranghang: true,
    });
  };

  return (
    <React.Fragment>
      <div id="wrapper">
        <Wrapper />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="contentt">
            <Banner />
            <div className="panel panel-warning col-md-8 ml">
              <div className="container">
                <div className="panel-body mt-4">
                  <form onSubmit={onSave}>
                    <div className="form-group">
                      <label>Tên Sản phẩm :</label>
                      <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={onChange}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Giá Sản phẩm ($) :</label>
                      <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={onChange}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Chọn Ảnh :</label>
                      <input
                        type="file"
                        name="image"
                        onChange={onChange}
                        className="form-control"
                      />
                    </div>
                    <label>Loại sản phẩm:</label>
                    <select
                      className="form-control"
                      name="name_category"
                      value={product.name_category}
                      onChange={onChange}
                      required="required"
                    >
                      <option value="sản phẩm mới">mới</option>
                      <option value="sản phẩm hot">hot</option>
                      <option value="sản phẩm khuyến mãi">khuyến mãi</option>
                    </select>
                    <div className="form-group">
                      <label>Màu bánh :</label>
                      <input
                        type="text"
                        name="color"
                        value={product.color}
                        onChange={onChange}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Nguyên liệu :</label>
                      <input
                        type="text"
                        name="material"
                        value={product.material}
                        onChange={onChange}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Hạn sử dụng :</label>
                      <input
                        type="date"
                        name="expiry_date"
                        value={product.expiry_date}
                        onChange={onChange}
                        className="form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>Xuất xứ :</label>
                      <input
                        type="text"
                        name="origin"
                        value={product.origin}
                        onChange={onChange}
                        className="form-control"
                      />
                    </div>
                    <label>Tình trạng hàng :</label>
                    <select
                      className="form-control"
                      name="tinhtranghang"
                      value={product.tinhtranghang}
                      onChange={onChange}
                      required="required"
                    >
                      <option value={true}>Còn hàng</option>
                      <option value={false}>Hết hàng</option>
                    </select>
                    <div className="form-group">
                      <label>Mô tả :</label>
                      <input
                        type="text"
                        name="description"
                        value={product.description}
                        onChange={onChange}
                        className="form-control"
                      />
                    </div>
                    <br />
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary">
                        Lưu
                      </button>&nbsp;
                      <button
                        type="button"
                        onClick={onClear}
                        className="btn btn-primary"
                      >
                        Clear
                      </button>
                      <NavLink to="/product-list" className="btn btn-primary ml-1">
                        Trở về
                      </NavLink>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Add;
