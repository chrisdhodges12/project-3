import { gql } from "@apollo/client";

//finds all resumes for a user
export const QUERY_RESUMES = gql`
  query resumes($username: String) {
    resumes(username: $username) {
        _id
        username
        createdAt
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
        skills
    }
  }
`;

//find one resume by ID
export const QUERY_RESUME = gql`
  query resume($id: ID!) {
    resume(_id: $id) {
        _id
        username
        createdAt
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
        skills
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
        createdAt
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
        skills
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
        createdAt
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
        skills
      }
    }
  }
`;
