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
      owner = '',
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
      owner,
      address,
      about,
      facebook,
      instagram,
      whatsapp,
      phone,
      email,
      description,
      image,
      createdAt
    };
    let removeAll = startRemoveCompanies(dispatch);
    return database
      .ref(`companies`)
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

export const removeCompanies = ({ id } = {}) => ({
  type: 'REMOVE_COMPANIES',
  id
});

const startRemoveCompanies = async dispatch => {
  return database
    .ref(`companies`)
    .remove()
    .then(() => {
      dispatch(removeCompanies());
    });
};

export const setCompanies = companies => ({
  type: 'SET_COMPANIES',
  companies
});

export const startSetCompany = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`companies`)
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
