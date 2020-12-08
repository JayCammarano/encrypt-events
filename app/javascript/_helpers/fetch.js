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

export const checkUserExists = async (invitee) => {
  const response = await fetch(
    `/api/v1/users/user_exists?username=${invitee}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.json();
};

export const newEvent = async (event, user_id, invitees) => {
  const response = await fetch(`/api/v1/users/${user_id}/events`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ encrypted_event: event, invitees: invitees }),
  });
  return response.json();
};

export const userEvents = () => {};
