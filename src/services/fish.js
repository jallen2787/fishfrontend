import api from "./apiConfig.js";

export const getFishes = async () => {
  try {
    const response = await api.get("/");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getFish = async (id) => {
  try {
    const response = await api.get(`/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createFish = async (fishData) => {
  try {
    const response = await api.post("/", fishData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateFish = async (id, fishData) => {
  try {
    const response = await api.put(`/${id}`, fishData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteFish = async (id) => {
  try {
    const response = await api.delete(`/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
