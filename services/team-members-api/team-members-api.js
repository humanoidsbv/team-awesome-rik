const apiUrl = 'http://localhost:3001/api/team-members/';

export const deleteTeamMember = (id) => (
  fetch(`${apiUrl}${id}`, {
    method: 'DELETE'
  })
);

export const getTeamMembers = () => (
  fetch(`${apiUrl}?_sort=lastName&_order=asc`)
    .then((response) => response.json())
);

export const postTeamMember = (timeEntry) => (
  fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(timeEntry)
  }).then((response) => response.json())
);
