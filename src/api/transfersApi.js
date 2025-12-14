import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchTransfers = async () => {
  try {
    const response = await axios.get(API_URL);

    return response.data;
  } catch (error) {
    throw error;
  }
};
