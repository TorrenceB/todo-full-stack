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
      const { data } = await apiClient.post("/todos", todo);

      return data;
    } catch (err) {
      throw new Error(`@todo-actions:createTodo:: ${err}`);
    }
  },
  updateTodo: async (id = "") => {
    try {
      const payload = {
        title: "Testing todo from updateTodo",
        description: "lorem ipsum solem",
      };
      const response = await apiClient.put(`/todos/${id}`, payload);

      console.log("Response: ", response);
    } catch (err) {
      throw new Error(`@todo-actions:updateTodo:: ${err}`);
    }
  },
  deleteTodo: async (id = "") => {
    try {
      const { data, status } = await apiClient.delete(`/todos/${id}`);

      return { deletedId: data.deletedId, status };
    } catch (err) {
      throw new Error(`@todo-actions:deleteTodo:: ${err}`);
    }
  },
};
