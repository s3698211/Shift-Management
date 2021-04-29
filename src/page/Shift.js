import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Shift() {
  const { id } = useParams();
  const [shift, setShift] = useState({});
  const [listofFeedbacks, setFeedbacks] = useState([]);
  const [feedback, setNewFeedback] = useState("");

  useEffect(() => {
    axios
      .get(`https://localhost:44374/shift/${parseInt(id)}`)
      .then((response) => setShift(response.data));
    // axios
    //   .get(`http://localhost:3001/feedbacks/${id}`)
    //   .then((response) => setFeedbacks(response.data));
  }, []);

  const addFeedback = () => {
    // axios
    //   .post("http://localhost:3001/feedbacks/", {
    //     content: feedback,
    //     ShiftId: id,
    //   })
    //   .then(() => {
    //     const addedFeedback = { content: feedback };
    //     setFeedbacks([...listofFeedbacks, addedFeedback]);
    //     setNewFeedback("");
    //   });
  };

  return (
    <div className="shiftPage">
      <div className="leftSide">
        <div className="shift" id="individual">
          <div className="date">{shift.date}</div>
          <div className="duration">{shift.startAt}</div>
          <div className="footer">{shift.staffName}</div>
        </div>
      </div>
      <div className="rightSide">
        <div className="addFeedbackContainer">
          <input
            type="text"
            placeholder="Feedbacks..."
            value={feedback}
            onChange={(event) => {
              setNewFeedback(event.target.value);
            }}
          />
          <button onClick={addFeedback}>Add feedback</button>
          <div className="feedbacks">
            {listofFeedbacks.map((value, key) => {
              return (
                <div key={key} className="feedback">
                  {value.content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shift;
