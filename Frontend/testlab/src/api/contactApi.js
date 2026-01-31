// src/api/contactApi.js
import axiosInstance from "./axiosInstance";

export const sendContactMessage = async (formData) => {
  try {
    // We use "/contact" because it appends to the baseURL "http://localhost:5000/api"
    const response = await axiosInstance.post("/contact", formData);
    return response.data;
  } catch (error) {
    // It is better to throw the error here so the Contact.js 'catch' block can see it
    throw error;
  }
};