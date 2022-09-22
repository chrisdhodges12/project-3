const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    resumes: [Resume]
    educations: [Education]
    projects: [Project]
  }
  type Resume {
    _id: ID
    username: String
    firstName: String
    lastName: String
    email: String
    phone: String
    objectiveStatement: String
  }
  type Education {
    _id: ID
    firstSchoolName: String
    firstGraduateYear: String
    firstFieldOfStudy: String
    secSchoolName: String
    secGraduateYear: String
    secFieldOfStudy: String
  }
  type Project {
    _id: ID
    firstPastEmployer: String
    firstDatesWorked: String
    firstPosition: String
    secPastEmployer: String
    secDatesWorked: String
    secPosition: String
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    resumes(username: String!): [Resume]
    resume(_id: ID): Resume
    educations(username: String!): [Education]
    education(_id: ID): Education
    projects(username: String!): [Project]
    project(_id: ID): Project
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    updateResume(
      username: String
      firstName: String
      lastName: String
      email: String
      phone: String
      objectiveStatement: String
    ): Resume
    updateEducation(
      firstSchoolName: String
      firstGraduateYear: String
      firstFieldOfStudy: String
      secSchoolName: String
      secGraduateYear: String
      secFieldOfStudy: String
    ): Education
    updateProject(
      firstPastEmployer: String
      firstDatesWorked: String
      firstPosition: String
      secPastEmployer: String
      secDatesWorked: String
      secPosition: String
    ): Project
  }
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
