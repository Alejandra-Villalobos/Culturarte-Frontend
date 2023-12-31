import axios from "axios";

const baseURL = "https://culturarte-c4240fd2b06f.herokuapp.com/auth/googleAuth";

const LoginGoogle = (email) => {
  return new Promise((resolve, reject) => {
    const data = {
        username: email,
      };
      axios
      .post(baseURL, data)
      .then((response) => {
        console.log(response.data.token)
        resolve(response.data.token);
      })
      .catch((error) => {
        console.log("Error:", error.response.data);
        reject(error);
      });
  });
};

export { LoginGoogle };