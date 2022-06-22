

import React from "react";
import { Row, Col, Card } from "antd";
import { helper } from '../Helper/Common';

const GlobalCovid = ({ global }) => {
    if (helper.isEmptyObj(global)) {
        return (
            <Row style={{ margin: '20px 0px' }}>
                <Col span={24}>
                    <p>ko có dữ liệu</p>
                </Col>
            </Row>
        )
    }

    return (
        <Row style={{ margin: '20px 0px' }}>
            <Col span={8}>
                <Card title="Mắc bệnh " bordered={false}>
                    <p>Số ca mới mắc : {global.NewConfirmed}</p>
                    <p>Tổng số ca mắc : {global.TotalConfirmed}</p>
                    {/* <p>Card content</p> */}
                </Card>
            </Col>
            <Col span={8}>
                <Card
                    title="Tử vong "
                    bordered={false}
                >
                    <p>Số ca mới tử vong : {global.NewDeaths} </p>
                    <p>Tổng số ca tử vong : {global.TotalDeaths} </p>
                    {/* <p>Card content</p> */}
                </Card>
            </Col>
            <Col span={8}>
                <Card
                    title="Khỏi bệnh "
                    bordered={false}
                >
                    <p>Số ca mới khỏi : {global.NewRecovered}</p>
                    <p>Tổng số ca đã khỏi : {global.TotalRecovered}</p>
                    {/* <p>Card content</p> */}
                </Card>
            </Col>
        </Row>
    )

}


export default React.memo(GlobalCovid);
