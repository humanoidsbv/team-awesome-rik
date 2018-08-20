const calculateTimeStampDiff = (fromTime, toTime) => (
  new Date(Date.parse(toTime) - Date.parse(fromTime) - (1000 * 60 * 60))
    .toLocaleTimeString({ hc: 'h24' },
      { hour: 'numeric', minute: 'numeric' })
);

export default calculateTimeStampDiff;
