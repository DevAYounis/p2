import { Button, Form, Input, DatePicker } from "antd";
import { useState } from "react";
const { RangePicker } = DatePicker;
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const OptionsForms = () => {
  const [pullForm, setPullForm] = useState([
    { id: 1, option: "" },
    { id: 2, option: "" },
  ]);
  const addOption = () => {
    setPullForm((current) => [...current, { id: 3, option: "a" }]);
  };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{}}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Title"
          name="Title"
          rules={[
            {
              required: true,
              message: "Please input the Pull",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input the Pull",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Time"
          name="Time"
          rules={[
            {
              required: true,
              message: "Please input the Pull",
            },
          ]}
        >
          <RangePicker showTime />
        </Form.Item>

        {pullForm.map((o) => {
          return (
            <Form.Item
              label={"Add Option "}
              name="options"
              rules={[
                {
                  required: true,
                  message: "Please input the Options for the pull",
                },
              ]}
            >
              <Input />
            </Form.Item>
          );
        })}

        <Button
          onClick={() => {
            addOption();
          }}
          style={{ marginLeft: "80%" }}
        >
          Add
        </Button>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button style={{ marginTop: 30 }} type="primary" htmlType="submit">
            Submit Pull
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
export default OptionsForms;
