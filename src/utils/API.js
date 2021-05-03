import axios from "axios";


// Query the RandomUser API for 200 people from the United States
const API = {
  getUsers: function () {
    return axios.get("https://randomuser.me/api/?nat=US&results=200&nat=us");
  },
};

export default API;