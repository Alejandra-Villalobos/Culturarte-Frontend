import axios from "axios";

const baseURL = "https://culturarte-c4240fd2b06f.herokuapp.com/service-toggle";

function toggleService(token) {
  return new Promise((resolve, reject) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios
      .patch(`${baseURL}/`, {}, config)
      .then((response) => {
        console.log(response.data);
        resolve(response.data);
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
}

export {toggleService};

