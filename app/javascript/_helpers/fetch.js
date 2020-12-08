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

export const userEvents = () => {};
