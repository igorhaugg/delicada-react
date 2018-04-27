import database from '../firebase/firebase';

export const addSale = sale => ({
  type: 'ADD_SALE',
  sale
});

export const startAddSale = (saleData = {}) => {
  return (dispatch, getState) => {
    const {
      client_id = '',
      product_id = '',
      payment = '',
      status = '',
      createdAt = 0
    } = saleData;
    const sale = {
      client_id,
      product_id,
      payment,
      status,
      createdAt
    };

    return database
      .ref(`sales`)
      .push(sale)
      .then(ref => {
        dispatch(
          addSale({
            id: ref.key,
            ...sale
          })
        );
      });
  };
};

export const removeSale = ({ id } = {}) => ({
  type: 'REMOVE_SALE',
  id
});

export const startRemoveSale = ({ id } = {}) => {
  return (dispatch, getState) => {
    return database
      .ref(`sales/${id}`)
      .remove()
      .then(() => {
        dispatch(removeSale({ id }));
      });
  };
};

export const editSale = (id, updates) => ({
  type: 'EDIT_SALE',
  id,
  updates
});

export const startEditSale = (id, updates) => {
  return (dispatch, getState) => {
    return database
      .ref(`sales/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editSale(id, updates));
      });
  };
};

export const setSales = sales => ({
  type: 'SET_SALES',
  sales
});

export const startSetSales = () => {
  return (dispatch, getState) => {
    return database
      .ref(`sales`)
      .once('value')
      .then(snapshot => {
        const sales = [];

        snapshot.forEach(childSnapshot => {
          sales.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        dispatch(setSales(sales));
      });
  };
};
