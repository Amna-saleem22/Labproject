import axiosInstance from "./axiosInstance";

export const sendBookingMessage = async (formData) => {
  const response = await axiosInstance.post("/booking", formData);
  return response.data;
};
