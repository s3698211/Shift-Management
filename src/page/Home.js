import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Home() {
  //const [state, setState function] = useState([])
  const [listOfShifts, setListofShifts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios.get("https://localhost:44374/shift").then((response) => {
      setListofShifts(response.data);
    });
  }, []);

  return (
    <div>
      {listOfShifts.map((value, key) => {
        return (
          <div
            className="shift"
            key={key}
            onClick={() => {
              history.push(`/shift/${value.id}`);
            }}
          >
            <p className="date">Date: {value.date}</p>
            <span className="duration">Duration: {value.startAt}</span> <br />
            <span className="staffName">Staff: {value.staffName}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
