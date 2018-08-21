export const calculateTimestampDiff = (fromTime, toTime) => (
  new Date(Date.parse(toTime) - Date.parse(fromTime) - (1000 * 60 * 60))
    .toLocaleTimeString({ hc: 'h24' },
      { hour: 'numeric', minute: 'numeric' })
);

export const createTimeStamp = (date, time) => new Date(`${date} ${time}`).toISOString();

export const reformatDateToYmd = (date) => {
  const dateSplitted = date.split('-');
  return `${dateSplitted[2]}-${dateSplitted[1]}-${dateSplitted[0]} `;
};

export const convertTimeStampToTime = (isoTimeStamp) => (
  new Date(isoTimeStamp).toLocaleTimeString(
    { hc: 'h24' },
    { hour: 'numeric', minute: 'numeric' }
  )
);


export const convertTimeToIso = (date, from, to) => {
  const tempDate = reformatDateToYmd(date);
  const tempFrom = createTimeStamp(tempDate, from.replace('.', ':'));
  const tempTo = createTimeStamp(tempDate, to.replace('.', ':'));

  return {
    from: tempFrom,
    to: tempTo
  };
};
