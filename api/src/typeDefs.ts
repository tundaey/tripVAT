import { gql } from 'apollo-server';

const typeDefs = gql`
  scalar Date

  type Listing {
    description: String!
    id: ID!
    title: String!
  }

  type User {
    email: String!
    id: ID
    hasfinishedRegistration: Boolean
  }

  type AuthData {
    message: String
    token: String
    auth: Boolean
    user: User
  }

  type UserSession {
    createdAt: Date!
    updatedAt: Date!
    id: ID!
    user: User!
  }

  type Query {
    listings: [Listing!]!
    userProfile: User
  }

  type Mutation {
    register(email: String!, password: String!): AuthData!
    login(email: String!, password: String!): AuthData!
  }
`;

export default typeDefs;