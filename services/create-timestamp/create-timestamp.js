
const createTimeStamp = (date, time) => new Date(`${date} ${time}`).toISOString();

export default createTimeStamp;
