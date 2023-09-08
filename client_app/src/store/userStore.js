import { create } from "zustand";
import api from "../config/api";

const userStore = create((set) => ({
  users: [],
  isFetchingUsers: false,
  getUsers: async (email, number) => {
    set({ isFetchingUsers: true }); // Установите isFetchingUsers в true здесь
    try {
      const requestData = { email };
      if (number) {
        requestData.number = number;
      }
      const response = await api.post("/users", requestData);
      if (response.status < 300) {
        set({ users: response?.data, isFetchingUsers: false });
      } else {
        set({ users: [] });
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        console.error("Конфликт при получении пользователей:", error);
      } else {
        set({ users: [], isFetchingUsers: false });
        console.error("Ошибка при получении пользователей:", error);
      }
    }
  },
}));

export default userStore;
