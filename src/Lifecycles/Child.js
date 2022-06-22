
import { Row, Col, Button } from 'antd';
import React from 'react';

class Child extends React.PureComponent {
    componentWillUnmount() {
        // bao hieu khi nao component bi xoa
        // truoc khi xoa miinh xu ly logic gi do
        console.log('componentWillUnmount child da bi xoa')
    }
    render() {
        return (
            <Row>
                <Col span={20} offset={2}>
                    <h3>Ant Design</h3>
                    <Button type="primary">Ciu'</Button>
                </Col>
            </Row>

        )
    }
}

export default Child;