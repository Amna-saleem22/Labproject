import axiosInstance from "./axiosInstance";

export const payOnline = async (bookingId) => {
  const response = await axiosInstance.get(`/booking/${bookingId}`);

  return response.data;
};
