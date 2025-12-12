import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchTransfers = async () => {
  try {
    const response = await axios.get(API_URL);

    return response.data;
  } catch (error) {
    return error;
  }
};

// export const fetchTransfers = async () => {
//   const response = await fetch(API_URL);
//   if (!response.ok) {
//     throw new Error("Failed to fetch transfers");
//   }
//   return response.json();
// };
