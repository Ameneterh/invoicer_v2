import { axiosInstance } from "./axiosInstance";

// Business Registration
export const RegisterBusiness = async (payload) => {
  // try {
  //   const response = await axiosInstance.post(
  //     "/server/business/register",
  //     payload
  //   );
  //   return response.data;
  // } catch (error) {
  //   return error.message;
  // }
};

// Business Login
export const LoginBusiness = async (payload) => {
  // try {
  //   const response = await axiosInstance.post(
  //     "/server/business/login",
  //     payload
  //   );
  //   return response.data;
  // } catch (error) {
  //   return error.message;
  // }
};

// Get Loggedin Business
export const GetLoggedBusiness = async () => {
  //   try {
  //     const response = await axiosInstance.get(
  //       "/server/business/get-logged-business"
  //     );
  //     return response.data;
  //   } catch (error) {
  //     return error.message;
  //   }
};

// edit loggedin business
export const EditBusinessDetails = async (id, payload) => {
  // try {
  //   const response = await axiosInstance.put(
  //     `/server/business/edit-business-details/${id}`,
  //     payload
  //   );
  //   return response.data;
  // } catch (error) {
  //   return error.message;
  // }
};
