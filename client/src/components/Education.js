import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React from "react";

const Education = () => {
  return (
    <div>
         <h5><b>Education</b></h5>
      <hr></hr>
      <Form.List name="education">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className="col-xs">
                    <Form.Item
                      {...restField}
                      name={[name, "fieldOfStudy"]}
                      rules={[
                        { required: true, message: "Missing field of studye" },
                      ]}
                    >
                      <Input placeholder="Field of Study" />
                    </Form.Item>
                  </div>
                  <div className="col-xs">
                    <Form.Item
                      {...restField}
                      name={[name, "schoolName"]}
                      rules={[
                        { required: true, message: "Missing School Name" },
                      ]}
                    >
                      <Input placeholder="School Name" />
                    </Form.Item>
                  </div>
                  <div className="col-xs">
                    <Form.Item
                      {...restField}
                      name={[name, "graduateYear"]}
                      rules={[
                        { required: true, message: "Missing Graduate Year" },
                      ]}
                    >
                      <Input placeholder="Graduate Year" />
                    </Form.Item>
                  </div>
                  <div className="col-xs">
                    <MinusCircleOutlined
                      style={{ fontsize: 25, color: "red", marginTop: "10px" }}
                      onClick={() => remove(name)}
                    />
                  </div>
                </>
              ))}
            </div>

            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Education
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

      <h5><b>Experience</b></h5>
      <hr></hr>
      <Form.List name="experience">
        {(fields, { add, remove }) => (
          <>
            <div className="row">
              {fields.map(({ key, name, ...restField }) => (
                <>
                  <div className="col-xs">
                    <Form.Item
                      {...restField}
                      name={[name, "pastEmployer"]}
                      rules={[
                        { required: true, message: "Missing past Employer" },
                      ]}
                    >
                      <Input placeholder="Past Employer" />
                    </Form.Item>
                  </div>
                  <div className="col-xs">
                    <Form.Item
                      {...restField}
                      name={[name, "position"]}
                      rules={[{ required: true, message: "Missing Position" }]}
                    >
                      <Input placeholder="Position" />
                    </Form.Item>
                  </div>
                  <div className="col-xs">
                    <Form.Item
                      {...restField}
                      name={[name, "datesWorked"]}
                      rules={[
                        { required: true, message: "Missing dates worked" },
                      ]}
                    >
                      <Input placeholder="datesWorked" />
                    </Form.Item>
                  </div>
                  <div className="col-xs">
                    <MinusCircleOutlined
                      style={{ fontsize: 25, color: "red", marginTop: "10px" }}
                      onClick={() => remove(name)}
                    />
                  </div>
                </>
              ))}
            </div>
                      
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
              >
                Add Experience
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>
    </div>
  );
};

export default Education;
