import React from "react";
import { Row, Col, Pagination } from 'antd';


const PaginationMovie = (props) => {
    return (
        <Row style={{ margin: '20px 0px' }}>

            <Col style={{ margin: '20px 0px' }} span={12} offset={6}>
                <Pagination current={props.current}
                    total={props.total}
                    pageSize={20}
                    showSizeChanger={false}
                    onChange={p => props.change(p)}
                />

            </Col>
        </Row>
    )
}

export default React.memo(PaginationMovie);