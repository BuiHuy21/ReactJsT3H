

import React from 'react';
import { Row, Col, Card } from 'antd';


const { Meta } = Card;

const ListMovie = ({ listMovies }) => {

    if (listMovies === 0) {
        return (
            <Row style={{ margin: '20px 0px' }}>
                <Col span={24}>
                    <p>không có dữ liệu</p>
                </Col>
            </Row>
        )
    }
    return (
        <Row style={{ margin: '20px 0px' }}>
            {listMovies.map((item, index) => (
                <Col
                    style={{ marginBottom: '40px' }}
                    span={4}
                    // offset={1}
                    key={index}>
                    <Card

                        hoverable
                        style={{
                            borderRadius: '10px',
                            marginBottom: '10 px',
                            marginRight: "8px",
                        }}
                        cover={<img alt={item.original_title} src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} />}
                    >
                        <Meta
                            style={{ textAlign: "center" }}
                            title={item.title}

                        />
                    </Card>
                </Col>
            ))
            }

        </Row>
    )

}

export default React.memo(ListMovie);