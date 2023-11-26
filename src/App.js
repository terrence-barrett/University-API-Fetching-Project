import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    axios
      .get("http://universities.hipolabs.com/search?country=United+States")
      .then((response) => {
        setUniversities(response.data);
      }
      )
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>List of Universities in the United States</h1>
      <ul>

        {universities.map((university,index) => (
          <li key={index}>{university.name}</li> 

        ))}
      </ul>
    </div>
  );
}

export default App;
