
import React from "react";
import { Row, Col } from "antd";


const LayoutCovid = (props) => {

    return (

        <Row>
            <Col span={20} offset={2}>
                {props.children}
            </Col>
        </Row>
    )

}

export default React.memo(LayoutCovid);