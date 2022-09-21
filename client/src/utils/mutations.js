import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_RESUME = gql`
  mutation updateResume(
    $username: String
    $firstName: String
    $lastName: String
    $email: String
    $phone: String
    $objectiveStatement: String
    $schoolName: String
    $graduateYear: String
    $fieldOfStudy: String
    $pastEmployer: String
    $datesWorked: String
    $position: String
  ) {
    updateResume(
      username: $username
      firstName: $firstName
      lastName: $lastName
      email: $email
      phone: $phone
      objectiveStatement: $objectiveStatement
      schoolName: $schoolName
      graduateYear: $graduateYear
      fieldOfStudy: $fieldOfStudy
      pastEmployer: $pastEmployer
      datesWorked: $datesWorked
      position: $position
    ) {
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

export const UPDATE_EDUCATION = gql`
  mutation updateEducation(
    $firstSchoolName: String
    $firstGraduateYear: String
    $firstFieldOfStudy: String
    $secSchoolName: String
    $secGraduateYear: String
    $secFieldOfStudy: String
  ) {
    updateEducation(
      firstSchoolName: $firstSchoolName
      firstGraduateYear: $firstGraduateYear
      firstFieldOfStudy: $firstFieldOfStudy
      secSchoolName: $secSchoolName
      secGraduateYear: $secGraduateYear
      secFieldOfStudy: $secFieldOfStudy
    ) {
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

export const UPDATE_PROJECT = gql`
  mutation updateProject(
    $firstPastEmployer: String
    $firstDatesWorked: String
    $firstPosition: String
    $secPastEmployer: String
    $secDatesWorked: String
    $secPosition: String
  ) {
    updateProject(
      firstPastEmployer: $firstPastEmployer
      firstDatesWorked: $firstDatesWorked
      firstPosition: $firstPosition
      secPastEmployer: $secPastEmployer
      secDatesWorked: $secDatesWorked
      secPosition: $secPosition
    ) {
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
