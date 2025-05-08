import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from './layout_admin/wrapper.js';
import Banner from './layout_admin/banner.js';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add = (props) => {
  const [state, setState] = useState({
    id: '',
    name: '',
    email: '',
    messages: '',
    status: '',
  });

  useEffect(() => {
    const { match } = props;
    if (match) {
      const id = match.params.id;
      axios({
        method: 'GET',
        url: `http://localhost:3000/contacts/${id}`,
        data: null,
      }).then(res => {
        const data = res.data;
        setState({
          id: data.id,
          status: data.status,
        });
      }).catch(err => {
        // Handle error
      });
    }
  }, [props]);

  const onChange = (event) => {
    const { name, value } = event.target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const { status } = state;

  return (
    <React.Fragment>
      <div>
        <div id="wrapper">
          <Wrapper />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="contentt">
              <Banner />
              <form onSubmit={this.onSave} className="contact-form">
                <select className="form-control sl" name="status" value={status} onChange={onChange} required="required">
                  <option value={true}>Xác nhận</option>
                  <option value={false}>Chưa xác nhận</option>
                </select>
                <div className="form-block">
                  <button type="submit" className="btn btn-primary">Lưu</button>&nbsp;
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Add;
