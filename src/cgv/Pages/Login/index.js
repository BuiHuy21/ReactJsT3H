import React from 'react';
import { Row, Col, Button, Form, Input } from 'antd';


const onFinish = (values) => {
     console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
     console.log('Failed:', errorInfo);
};

const LoginMovies = () => {
     return (
          <Row style={{ marginTop: '50px' }}>
               <Col span={12} offset={4}>
                    <Form
                         name="basic"
                         labelCol={{
                              span: 8,
                         }}
                         wrapperCol={{
                              span: 16,
                         }}
                         initialValues={{
                              remember: true,
                         }}
                         onFinish={onFinish}
                         onFinishFailed={onFinishFailed}
                         autoComplete="off"
                    >
                         <Form.Item
                              label="Username"
                              name="username"
                              rules={[
                                   {
                                        required: true,
                                        message: 'Please input your username!',
                                   },
                              ]}
                         >
                              <Input />
                         </Form.Item>

                         <Form.Item
                              label="Password"
                              name="password"
                              rules={[
                                   {
                                        required: true,
                                        message: 'Please input your password!',
                                   },
                              ]}
                         >
                              <Input.Password />
                         </Form.Item>


                         <Form.Item
                              wrapperCol={{
                                   offset: 8,
                                   span: 16,
                              }}
                         >
                              <Button type="primary" htmlType="submit">
                                   Submit
                              </Button>
                         </Form.Item>
                    </Form>
               </Col>
          </Row>
     )
}
export default React.memo(LoginMovies)