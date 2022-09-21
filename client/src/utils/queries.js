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

//finds all educations for a user
export const QUERY_EDUCATIONS = gql`
  query educations($username: String) {
    educations(username: $username) {
      _id
      firstSchoolName
      firstGraduateYear
      firstFieldOfStudy
      secSchoolName
      secGraduateYear
      secFieldOfStudy
    }
  }
`;

//find one education by ID
export const QUERY_EDUCATION = gql`
  query education($id: ID!) {
    education(_id: $id) {
      _id
      firstSchoolName
      firstGraduateYear
      firstFieldOfStudy
      secSchoolName
      secGraduateYear
      secFieldOfStudy
    }
  }
`;

//finds all projects for a user
export const QUERY_PROJECTS = gql`
  query projects($username: String) {
    projects(username: $username) {
      _id
      firstPastEmployer
      firstDatesWorked
      firstPosition
      secPastEmployer
      secDatesWorked
      secPosition
    }
  }
`;

//find one project by ID
export const QUERY_PROJECT = gql`
  query project($id: ID!) {
    project(_id: $id) {
      _id
      firstPastEmployer
      firstDatesWorked
      firstPosition
      secPastEmployer
      secDatesWorked
      secPosition
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
      educations {
        _id
        firstSchoolName
        firstGraduateYear
        firstFieldOfStudy
        secSchoolName
        secGraduateYear
        secFieldOfStudy
      }
      projects {
        _id
        firstPastEmployer
        firstDatesWorked
        firstPosition
        secPastEmployer
        secDatesWorked
        secPosition
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
      educations {
        _id
        firstSchoolName
        firstGraduateYear
        firstFieldOfStudy
        secSchoolName
        secGraduateYear
        secFieldOfStudy
      }
      projects {
        _id
        firstPastEmployer
        firstDatesWorked
        firstPosition
        secPastEmployer
        secDatesWorked
        secPosition
      }
    }
  }
`;
