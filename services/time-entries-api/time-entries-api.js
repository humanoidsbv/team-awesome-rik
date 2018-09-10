import rootUrl from '../../environments';

const apiUrl = '/time-entries/';

export const deleteTimeEntry = (id) => (
  fetch(`${rootUrl()}${apiUrl}${id}`, {
    method: 'DELETE'
  })
);

export const getTimeEntries = () => (
  fetch(`${rootUrl()}${apiUrl}?_sort=from&_order=asc`)
    .then((response) => response.json())
);

export const postTimeEntry = (timeEntry) => (
  fetch(`${rootUrl()}${apiUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(timeEntry)
  }).then((response) => response.json())
);
