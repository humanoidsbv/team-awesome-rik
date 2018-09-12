import rootUrl from '../../environments';

const apiUrl = '/clients/';

export const deleteClient = (id) => (
  fetch(`${rootUrl()}${apiUrl}${id}`, {
    method: 'DELETE'
  })
);

export const getClients = () => (
  fetch(`${rootUrl()}${apiUrl}?_sort=name&_order=asc`)
    .then((response) => response.json())
);

export const postClient = (timeEntry) => (
  fetch(`${rootUrl()}${apiUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(timeEntry)
  }).then((response) => response.json())
);
