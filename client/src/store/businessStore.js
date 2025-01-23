import { create } from "zustand";
import axios from "axios";

const API_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/server"
    : "/server";

axios.defaults.withCredentials = true;

export const useBusinessStore = create((set) => ({
  // business: null,
  // isAuthenticated: false,
  error: null,
  isLoading: false,
  // isCheckingAuth: true,
  message: null,

  //   register new new business
  registerBusiness: async (
    business_name,
    business_email,
    business_phone,
    business_address,
    banker,
    account_name,
    account_number
  ) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(
        `${API_URL}/business/add-new-business`,
        {
          business_name,
          business_email,
          business_phone,
          business_address,
          banker,
          account_name,
          account_number,
        }
      );
      set({
        // business: response.data.business,
        // isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({
        error: error.response.data.message || "Error signing up",
        isLoading: false,
      });
      throw error;
    }
  },

  //   verify business email
  verifyEmail: async (code) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/business/verify-email`, {
        code,
      });
      set({
        // business: response.data.business,
        // isAuthenticated: true,
        isLoading: false,
      });
      return response.data;
    } catch (error) {
      set({
        error: error.response.data.message || "Error verifying email",
        isLoading: false,
      });
      throw error;
    }
  },

  //   get all businesses
  getAllBusinesses: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.get(`${API_URL}/business/get-businesses`);
      set({
        businesses: response.data.businesses,
        // isAuthenticated: true,
        isLoading: false,
      });
      return response.data;
    } catch (error) {
      set({
        error: error.response.data.message || "Error getting businesses",
        isLoading: false,
      });
      throw error;
    }
  },

  // checkAuth: async () => {
  //   set({ isCheckingAuth: true, error: null });
  //   try {
  //     const response = await axios.get(`${API_URL}/check-auth`);
  //     set({
  //       business: response.data.business,
  //       isAuthenticated: true,
  //       isCheckingAuth: false,
  //     });
  //   } catch (error) {
  //     set({ error: null, isCheckingAuth: false, isAuthenticated: false });
  //   }
  // },
}));
