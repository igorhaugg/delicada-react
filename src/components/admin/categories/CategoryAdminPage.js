import React from 'react';

import CategoryList from './CategoryList';
import CategoriesSummary from './CategoriesSummary';
import MenuAdmin from '../MenuAdmin';

class CategoryAdminPage extends React.Component {
  componentDidMount() {
    document.title = 'Delicada Mulher - Categorias';
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 2);
  }
  render() {
    return (
      <main className="dashboard">
        <MenuAdmin />
        <section className="dashboard__content">
          <CategoriesSummary />
          <CategoryList />
        </section>
      </main>
    );
  }
}

export default CategoryAdminPage;
