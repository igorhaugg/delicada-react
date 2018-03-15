import uuid from 'uuid';
import database from '../firebase/firebase';

export const addCompany = company => ({
  type: 'ADD_COMPANY',
  company
});

export const startAddCompany = (companyData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      name = '',
      address = '',
      about = '',
      facebook = '',
      instagram = '',
      whatsapp = '',
      phone = '',
      email = '',
      description = '',
      image = '',
      createdAt = 0
    } = companyData;
    const company = {
      name,
      address,
      about,
      facebook,
      instagram,
      whatsapp,
      phone,
      description,
      image,
      createdAt
    };
    return database
      .ref(`users/${uid}/companies`)
      .push(company)
      .then(ref => {
        dispatch(
          addCompany({
            id: ref.key,
            ...company
          })
        );
      });
  };
};

export const editCompany = (id, updates) => ({
  type: 'EDIT_COMPANY',
  id,
  updates
});

export const startEditCompany = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/companies/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editCompany(id, updates));
      });
  };
};

export const setCompanies = companies => ({
  type: 'SET_COMPANIES',
  companies
});

export const startSetCompany = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/companies`)
      .once('value')
      .then(snapshot => {
        const companies = [];

        snapshot.forEach(childSnapshot => {
          companies.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });

        dispatch(setCompanies(companies));
      });
  };
};
