import { gql } from "@apollo/client";

//finds all resumes for a user
export const QUERY_RESUMES = gql`
  query resumes($username: String) {
    resumes(username: $username) {
        _id
        username
        firstName
        lastName
        email
        phone
        objectiveStatement
        schoolName
        graduateYear
        fieldOfStudy
        pastEmployer
        datesWorked
        position
    }
  }
`;

//find one resume by ID
export const QUERY_RESUME = gql`
  query resume($id: ID!) {
    resume(_id: $id) {
        _id
        username
        firstName
        lastName
        email
        phone
        objectiveStatement
        schoolName
        graduateYear
        fieldOfStudy
        pastEmployer
        datesWorked
        position
    }
  }
`;

//get user info by username
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      resumes {
        username
        _id
        firstName
        lastName
        email
        phone
        objectiveStatement
        schoolName
        graduateYear
        fieldOfStudy
        pastEmployer
        datesWorked
        position
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      resumes {
        _id
        username
        firstName
        lastName
        email
        phone
        objectiveStatement
        schoolName
        graduateYear
        fieldOfStudy
        pastEmployer
        datesWorked
        position
      }
    }
  }
`;
