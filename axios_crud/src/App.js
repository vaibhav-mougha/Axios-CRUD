import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [myData, setMyData] = useState([]);
  const [isError,setIsError] = useState("")
  
  //NOTE : using Promises
// useEffect(() => {
//     axios.get("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => setMyData(res.data))
//     .catch((error) =>setIsError(error.message))
//   }, []);

  //NOTE : using Promises
  const getApidata = async () => {
    await axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => setMyData(res.data))
    .catch((error) =>setIsError(error.message))
  }

  useEffect(() => {
   getApidata();
  }, []);

  return (
    <div >
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        AXIOS CRUD
      </h1>
      {isError !== "" && <h2>{isError}</h2>}

      <div className="grid">
        {myData.slice(0,12).map((post) => {
          const { id, title, body } = post;
          return (
            <div
              className="card"
              key={id}
              style={{
                margin: "auto",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h2>{title.slice(0,15).toUpperCase()}</h2>
              <p>{body.slice(0,100)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
