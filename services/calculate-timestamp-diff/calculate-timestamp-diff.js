const calculateTimeStampDiff = (fromTime, toTime) => {
  const oneHour = 1000 * 60 * 60;
  return new Date(Date.parse(toTime) - Date.parse(fromTime) - oneHour)
    .toLocaleTimeString({ hc: 'h24' },
      { hour: 'numeric', minute: 'numeric' });
};

export default calculateTimeStampDiff;
