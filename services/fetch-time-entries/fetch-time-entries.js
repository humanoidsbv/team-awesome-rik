const fetchTimeEntries = () => (
  fetch('http://localhost:3001/api/timeEntries/')
    .then((response) => response.json())
);

export default fetchTimeEntries;
