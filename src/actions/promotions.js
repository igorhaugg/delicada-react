import database from '../firebase/firebase';
import firebase from 'firebase';

export const addPromotion = promotion => ({
  type: 'ADD_PROMOTION',
  promotion
});

export const startAddPromotion = (promotionData = {}) => {
  return (dispatch, getState) => {
    const { description = '', valid = '' } = promotionData;
    const promotion = { description, valid };

    return database
      .ref(`promotions`)
      .push(promotion)
      .then(ref => {
        dispatch(
          addPromotion({
            id: ref.key,
            ...promotion
          })
        );
      });
  };
};

export const removePromotion = ({ id } = {}) => ({
  type: 'REMOVE_PROMOTION',
  id
});

export const startRemovePromotion = ({ id } = {}) => {
  return (dispatch, getState) => {
    return database
      .ref(`promotions/${id}`)
      .remove()
      .then(() => {
        dispatch(removePromotion({ id }));
      });
  };
};

export const editPromotion = (id, updates) => ({
  type: 'EDIT_PROMOTION',
  id,
  updates
});

export const startEditPromotion = (id, updates) => {
  return (dispatch, getState) => {
    return database
      .ref(`promotions/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editPromotion(id, updates));
      });
  };
};

export const setPromotions = promotions => ({
  type: 'SET_PROMOTIONS',
  promotions
});

export const startSetPromotions = () => {
  return (dispatch, getState) => {
    return database
      .ref(`promotions`)
      .once('value')
      .then(snapshot => {
        const promotions = [];

        snapshot.forEach(childSnapshot => {
          promotions.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        dispatch(setPromotions(promotions));
      });
  };
};
