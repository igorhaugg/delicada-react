import moment from 'moment';

const getCompany = companies => {
  return companies.sort((a, b) => {
    return a.createdAt > b.createdAt ? -1 : 1;
  });
};

export default getCompany;
