import createTimeStamp from '../create-timestamp/create-timestamp';

const convertDateTimeToISO = (stateCopy) => {
  const { date, from, to } = stateCopy;
  const tempDate = this.reformatDateToYMD(date);
  const tempFrom = createTimeStamp(tempDate, from.replace('.', ':'));
  const tempTo = createTimeStamp(tempDate, to.replace('.', ':'));
  return {
    ...stateCopy,
    date: tempDate,
    from: tempFrom,
    to: tempTo
  };
};

export default convertDateTimeToISO;
