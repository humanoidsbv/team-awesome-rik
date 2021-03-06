import rootUrl from '../../environments';

const apiUrl = '/team-members/';

export const deleteTeamMember = (id) => (
  fetch(`${rootUrl()}${apiUrl}${id}`, {
    method: 'DELETE'
  })
);

export const getTeamMembers = () => (
  fetch(`${rootUrl()}${apiUrl}?_sort=from&_order=asc`)
    .then((response) => response.json())
);

export const postTeamMember = (timeEntry) => (
  fetch(`${rootUrl()}${apiUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(timeEntry)
  }).then((response) => response.json())
);
