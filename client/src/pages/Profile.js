import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Form, Tabs, Button } from "antd";
import PersonalInfo from "../components/PersonalInfo";
import Education from "../components/Education";

const Profile = () => {
  return (
    <DefaultLayout>
      <div className="update-profile">
        <h2>Update Profile</h2>
        <Form layout="vertical" onFinish={(values) => console.log(values)}>
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Personal Info" key="1">
              <PersonalInfo />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Education and Experience" key="2">
              <Education />
            </Tabs.TabPane>
          </Tabs>

          <Button htmlType="submit">UPDATE</Button>
        </Form>
      </div>
    </DefaultLayout>
  );
};

export default Profile;
