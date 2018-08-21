const apiUrl = 'http://localhost:3001/api/time-entries/';

export const getTimeEntries = () => (
  fetch(apiUrl)
    .then((response) => response.json())
);

export const postTimeEntry = (timeEntry) => (
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(timeEntry)
  })
);
