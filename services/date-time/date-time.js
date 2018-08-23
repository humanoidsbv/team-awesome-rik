export const calculateTimestampDiff = (fromTime, toTime) => (
  new Date(Date.parse(toTime) - Date.parse(fromTime) - (1000 * 60 * 60))
    .toLocaleTimeString({ hc: 'h24' },
      { hour: 'numeric', minute: 'numeric' })
);

export const convertTimeStampToDate = (isoTimeStamp) => (
  new Date(isoTimeStamp)
    .toLocaleDateString('en-NL', { weekday: 'long', day: 'numeric', month: 'numeric' })
    .replace('/', '-')
    .replace(',', ' ')
);

export const calculateTotalTimePerDay = (timeEntries, date) => (
  new Date(timeEntries.filter((entry) => convertTimeStampToDate(entry.from) === date)
    .reduce((accumulator, entry) => accumulator
      + (Date.parse(entry.to) - Date.parse(entry.from)), 0)
      - (1000 * 60 * 60))
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
