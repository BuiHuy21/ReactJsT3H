import React from 'react';
import { Row, Col, Card } from 'antd';
import { Link } from 'react-router-dom';
import slugify from 'react-slugify';


const { Meta } = Card;

const ListMovie = ({ listMovies }) => {

     if (listMovies.length === 0) {
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
                         <Link to={`/${slugify(item.title)}-${item.id}`}>
                              <Card
                                   hoverable
                                   // bordered
                                   style={{
                                        marginRight: '15px',
                                        marginBottom: '10px',
                                        borderRadius: '10px',
                                        textAlign: 'center',
                                   }}
                                   cover={<img alt={item.original_title} style={{ borderRadius: 10 }} src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} />}
                              >
                                   <Meta

                                        title={item.title} />
                              </Card>
                         </Link>
                    </Col>
               ))}

          </Row>
     )

}

export default React.memo(ListMovie);