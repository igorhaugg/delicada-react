import React from 'react';
import { Link } from 'react-router-dom';

const MenuAdmin = () => (
  <aside className="dashboard__menu">
    <div className="menu">
      <div className="menu__items">
        <Link to="/dashboard">Home</Link>
        <Link to="/category">Categories</Link>
        <Link to="/product">Products</Link>
        <Link to="/category">Clients</Link>
        <Link to="/category">Company</Link>
      </div>
      <div className="menu__items">
        <Link to="create">Help</Link>
      </div>
    </div>
  </aside>
);

export default MenuAdmin;
