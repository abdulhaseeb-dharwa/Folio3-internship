import api from "../api/pizzas";

export const fetchData = async (endpoint) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (err) {
    console.error(`Error fetching data from ${endpoint}: `, err);
    throw err;
  }
};

export const postData = async (endpoint, data) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (err) {
    console.error(`Error posting data to ${endpoint}: `, err);
    throw err;
  }
};

export const deleteData = async (endpoint) => {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (err) {
    console.error(`Error deleting data from ${endpoint}: `, err);
    throw err;
  }
};
