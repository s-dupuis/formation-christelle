import moment from 'moment';

const datePickerLimitDate = {
  minBirthdate: {
    limit: moment('1900-01-01').format('YYYY-MM-DD'),
    message: 'Cette date n\'est pas conforme'
  },
  maxBirthdate: {
    limit: moment().format('YYYY-MM-DD'),
    message: 'Cette date n\'est pas conforme'
  },
  todayDate: {
    limit: moment().format('YYYY-MM-DD'),
    message: 'La date d’effet ne peut être antérieure à la date du jour'
  }
};

Object.freeze(datePickerLimitDate);

export default datePickerLimitDate;
