import React from "react";
import { useParams } from "react-router-dom";
import Template1 from "./Template1";
import Template2 from "./Template2";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
function Templates() {

  const params = useParams();

  const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  const gettemplate = () => {
    switch (params.id) {
      case "1": {
        return (
          <Template1
            resumes={user.resumes}
            educations={user.educations}
            projects={user.projects}
          />
        );
      }
      case "2": {
        return (
          <Template2
            resumes={user.resumes}
            educations={user.educations}
            projects={user.projects}
          />
        );
      }
      default: {
        return (
          <Template1
            resumes={user.resumes}
            educations={user.educations}
            projects={user.projects}
          />
        );
      }
    }
  };
  return <div>{gettemplate()}</div>;
}

export default Templates;
