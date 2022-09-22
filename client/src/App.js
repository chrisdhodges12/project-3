import React from "react";
import "./App.css";
// import 'antd/dist/antd.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";
import { ThemeProvider } from "@mui/material/";
import theme from "./theme.js";

import Layout from "./components/Layout.js";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Education from "./pages/Education";
import Project from "./pages/Project";
import Templates from "./pages/templates";
import TemplateDesign from "./pages/TemplateDesign";
// import Header from "./components/Header";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/education" element={<Education />} />
              <Route path="/project" element={<Project />} />
              <Route path="/design" element={<TemplateDesign />} />
              <Route path="/templates/:id" element={<Templates />} />
              {/* <Route path="/resume/:id" element={<SingleResume />} /> */}
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
