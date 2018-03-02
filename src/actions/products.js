import uuid from 'uuid';
import database from '../firebase/firebase';

export const addProduct = product => ({
  type: 'ADD_PRODUCT',
  product
});

export const startAddProduct = (productData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      category_id = '',
      name = '',
      description = '',
      image = '',
      size = '',
      price_sell = 0,
      price_buy = 0,
      amount = 0,
      createdAt = 0
    } = productData;
    const product = {
      category_id,
      name,
      description,
      image,
      size,
      price_sell,
      price_buy,
      amount,
      createdAt
    };

    return database
      .ref(`users/${uid}/products`)
      .push(product)
      .then(ref => {
        dispatch(
          addProduct({
            id: ref.key,
            ...product
          })
        );
      });
  };
};

export const removeProduct = ({ id } = {}) => ({
  type: 'REMOVE_PRODUCT',
  id
});

export const startRemoveProduct = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/products/${id}`)
      .remove()
      .then(() => {
        dispatch(removeProduct({ id }));
      });
  };
};

export const editProduct = (id, updates) => ({
  type: 'EDIT_PRODUCT',
  id,
  updates
});

export const startEditProduct = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/products/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editProduct(id, updates));
      });
  };
};

export const setProducts = products => ({
  type: 'SET_PRODUCTS',
  products
});

export const startSetProducts = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/products`)
      .once('value')
      .then(snapshot => {
        const products = [];

        snapshot.forEach(childSnapshot => {
          products.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        dispatch(setProducts(products));
      });
  };
};
