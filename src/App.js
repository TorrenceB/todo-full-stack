import axios from "axios";

function App() {
  // GET localhost:8080/todos
  const getTodos = async () => {
    try {
      const { data } = await axios({
        method: "get",
        url: "http://localhost:8080/todos",
      });

      console.log("Todos response: ", data);
    } catch (err) {
      throw new Error("An error has occurred:", err);
    }
  };

  getTodos();

  return <div className="App">Test change</div>;
}

export default App;
