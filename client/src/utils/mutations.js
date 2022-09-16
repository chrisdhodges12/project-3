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
        $firstName: String!,
        $lastName: String!,
        $email: String,
        $phone: String,
        $objectiveStatement: String,
        $schoolName: String,
        $graduateYear: String,
        $fieldOfStudy: String,
        $pastEmployer: String,
        $datesWorked: String,
        $position: String)
        {
            updateResume(
                firstName: $firstName,
                lastName: $lastName,
                email: $email,
                phone: $phone,
                objectiveStatement: $objectiveStatement,
                schoolName: $schoolName,
                graduateYear: $graduateYear,
                fieldOfStudy: $fieldOfStudy,
                pastEmployer: $pastEmployer,
                datesWorked: $datesWorked,
                position: $position)
                {
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