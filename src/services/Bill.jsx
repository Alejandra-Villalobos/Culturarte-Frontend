import axios from "axios";

const baseURL = "https://culturarte-c4240fd2b06f.herokuapp.com:8080/bill";

const saveBill = (info, token) => {
  return axios
    .post(`${baseURL}/`, info, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export {
  saveBill
};
