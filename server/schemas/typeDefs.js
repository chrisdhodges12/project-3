const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String!
    savedResume: [Resume]
  }
  type Resume {
    _id: ID
    firstName: String!
    lastName: String!
    email: String
    phone: String
    objectiveStatement: String
    schoolName: String
    graduateYear: String
    fieldOfStudy: String
    pastEmployer: String
    datesWorked: String
    position: String
  }
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    resumes(username: String!): [Resume]
    resume(_id: ID): Resume
  }
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(emai: String!, password: String!): Auth
    updateResume(
      firstName: String!,
      lastName: String!,
      email: String,
      phone: String,
      objectiveStatement: String,
      schoolName: String,
      graduateYear: String,
      fieldOfStudy: String,
      pastEmployer: String,
      datesWorked: String,
      position: String
    ): Resume
  }
  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
