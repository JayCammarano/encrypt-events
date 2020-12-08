export const newUser = (user, setter) => {
  fetch(`/api/v1/users/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user }),
  })
    .then((response) => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw error;
      }
    })
    .then((response) => response.json())
    .then((body) => {
      setter(body);
    })
    .catch((error) => setter(`Error: ${error.message}`));
};

export const checkUserExists = (invitee, creator_id, setter) => {
  fetch(`/api/v1/users/${creator_id}/events/user_exists?username=${invitee}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ invitee }),
  })
    .then((response) => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw error;
      }
    })

    .then((response) => response.json())
    .then((body) => {
      setter(body);
    })
    .catch((error) => console.error(`Error in fetch: ${error.message}`));
};

export const newEvent = (event, user_id, setter) => {
  fetch(`/api/v1/users/${user_id}/events/new`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ event }),
  })
    .then((response) => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw error;
      }
    })
    .then((response) => response.json())
    .then((body) => {
      setter(body);
    })
    .catch((error) => setter(`Error: ${error.message}`));
};

export const userEvents = () => {};
