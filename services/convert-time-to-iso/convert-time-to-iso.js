import createTimeStamp from '../create-timestamp/create-timestamp';
import reformatDateToYmd from '../reformat-date-to-ymd/reformat-date-to-ymd';

const convertTimeToIso = (formData) => {
  const { date, from, to } = formData;

  const tempDate = reformatDateToYmd(date);
  const tempFrom = createTimeStamp(tempDate, from.replace('.', ':'));
  const tempTo = createTimeStamp(tempDate, to.replace('.', ':'));

  return {
    ...formData,
    from: tempFrom,
    to: tempTo
  };
};

export default convertTimeToIso;
