import apiClient from "../utils/apiClient";

export default {
  getTodos: async () => {
    try {
      const { data } = await apiClient.get("todos");

      return data;
    } catch (err) {
      throw new Error(`@todo-actions:getTodos:: ${err}`);
    }
  },
  createTodo: async (todo = {}) => {
    try {
      const { data } = await apiClient.post("/todo/post", todo);

      return data;
    } catch (err) {
      throw new Error(`@todo-actions:createTodo:: ${err}`);
    }
  },
  updateTodo: () => {
    console.log("Update action clicked");
  },
  deleteTodo: async (id = "") => {
    try {
      const { data, status } = await apiClient.delete(`/todo/delete/${id}`);

      return { deletedId: data.deletedId, status };
    } catch (err) {
      throw new Error(`@todo-actions:deleteTodo:: ${err}`);
    }
  },
};
