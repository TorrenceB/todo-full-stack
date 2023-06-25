import apiClient from "../utils/apiClient";

export default {
  createTodo: async (todo = {}) => {
    try {
      const response = await apiClient.post("/todo/post", todo);

      console.log("Response: ", response);
    } catch (err) {
      throw new Error(`An error has occurred::${err}`);
    }
  },
  updateTodo: () => {
    console.log("Update action clicked");
  },
  deleteTodo: () => {
    console.log("Delete action clicked");
  },
};
