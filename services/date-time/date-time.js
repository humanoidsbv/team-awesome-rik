const calculateTimeStampDiff = (fromTime, toTime) => (
  new Date(Date.parse(toTime) - Date.parse(fromTime) - (1000 * 60 * 60))
    .toLocaleTimeString({ hc: 'h24' },
      { hour: 'numeric', minute: 'numeric' })
);

const createTimeStamp = (date, time) => new Date(`${date} ${time}`).toISOString();

const reformatDateToYmd = (date) => {
  const dateSplitted = date.split('-');
  return `${dateSplitted[2]}-${dateSplitted[1]}-${dateSplitted[0]} `;
};


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

export {
  calculateTimeStampDiff, convertTimeToIso, createTimeStamp, reformatDateToYmd
};
