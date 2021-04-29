import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

function CreateShift() {
  const initialValues = {
    date: "",
    startAt: "",
    endAt: "",
    staffName: "",
  };

  const validationSchema = Yup.object().shape({
    date: Yup.date().required("Please input a date"),
    startAt: Yup.string().required("Please input a duration"),
    staffName: Yup.string().min(3).max(15).required("Please input a name"),
  });

  const history = useHistory();
  const onSubmit = (data) => {
    axios.post("https://localhost:44374/shift", data).then((response) => {
      history.push("/");
    });
  };
  return (
    <div className="createShiftPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Date:</label>
          <ErrorMessage name="date" component="span" />
          <Field
            autoComplete="off"
            id="inputCreateShift"
            name="date"
            placeholder="yyyy/mm/dd"
            type="date"
          />
          <label>Duration:</label>
          <ErrorMessage name="duration" component="span" />
          <Field
            autoComplete="off"
            id="inputCreateShift"
            name="startAt"
            placeholder="exp: 1"
          />
          <label>Staff:</label>
          <ErrorMessage name="staffName" component="span" />
          <Field
            autoComplete="off"
            id="inputCreateShift"
            name="staffName"
            placeholder="Khoi"
          />
          <button type="submit">Create shift</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreateShift;
