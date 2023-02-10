import axios from "axios";

export default class Account {
  static async postUserInfo(email, password) {
    const urlEndpoint =
      "http://private-8e8921-woloxfrontendinverview.apiary-mock.com/login";

    const response = await axios.post(urlEndpoint, { email, password });

    return response.data;
  }
}
