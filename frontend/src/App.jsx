import { useState } from "react";
import "./App.css";
import axios from "axios";
import MyList from "./components/MyList";

function App() {
  const [users, setUsers] = useState([]);
  const pvtKey =
    "Bearer eyJhbGciOiJIUzI1NiJ9.e30.HPEtGdBfCLlAOYpKodUOLixujC6D_LKfrEy4mmfQ3Ok";

  function dataLoad() {
    axios
      .get("http://localhost:8070/users/", {
        headers: { Authorization: pvtKey },
      })
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <button onClick={dataLoad}>Load</button>
      <br />
      <br />
      {users.length === 0 && (
        <>
          <h5>
            If the data is not loaded, check the console to see the response
            from the server for the unauthorized request.
          </h5>
          <p>Try get the data by changing the token in App.jsx.</p>
          <p>Try to fetch data using Postman without using a frontend app.</p>
        </>
      )}
      {users.length !== 0 && <MyList myList={users} />}
    </>
  );
}

export default App;
