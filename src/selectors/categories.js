import moment from 'moment';

const getVisibleCategories = (
  categories,
  { text, sortBy, startDate, endDate }
) => {
  return categories
    .filter(category => {
      const createdAtMoment = moment(category.createdAt);
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, 'day')
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, 'day')
        : true;
      const textMatch = category.name
        .toLowerCase()
        .includes(text.toLowerCase());

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === 'name') {
        return a.name > b.name ? 1 : -1;
      }
    });
};

export default getVisibleCategories;
