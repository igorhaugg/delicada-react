import moment from 'moment';
import numeral from 'numeral';

const getClientsBirths = (clients, { startDate, endDate }) => {
  return clients.filter(client => {
    const today = moment();
    const birthDate = client.createdAt;
    const birth = moment(birthDate, 'YYYY-MM-DD');
    return today.month() === birth.month();
  });
};

export default getClientsBirths;
