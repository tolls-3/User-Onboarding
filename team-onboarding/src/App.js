import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import * as yup from "yup";
import TeamForm from "./Form";
import { Users } from "./User";

const teamApi = "https://reqres.in/api/users";

const initialTeamForm = {
  name: "",
  email: "",
  password: "",
  terms: ""
};

function App() {
  const [teamList, setTeamList] = useState([]);
  const [serverError, setServerError] = useState([]);

  const addTeamMember = (formValues, actions) => {
    const postTeamMember = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      terms: formValues.terms
    };
    axios
      .post(teamApi, postTeamMember)

      .then(response => {
        // setTeamList([...teamList, response.data])

        const newlyCreatedTeamMemberFromServer = response.data;
        setTeamList(teamList.concat(newlyCreatedTeamMemberFromServer));
        actions.resetForm();
      })
      .catch(error => {
        setServerError(error.message);
      });
  };

  return (
    <div className="App">
      {serverError}
      <TeamForm
        initialTeamForm={initialTeamForm}
        validationSchema={validationSchema}
        teamList={teamList}
        onSubmit={addTeamMember}
      />

      <Users teamList={teamList} />
    </div>
  );
}

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
  terms: yup.boolean().required("Please check the box")
});

export default App;
