import React from 'react';
import LayoutMovies from '../../Components/Layout';
import { Row, Col } from 'antd';

const NotFoundPage = () => {
     return (
          <LayoutMovies>
               <Row>
                    <Col span={24} style={{ textAlign: 'center', color: 'Red', fontSize: 48 }}>
                         404 Not Found !!!!!!!1
                    </Col>
               </Row>
          </LayoutMovies>
     );
};

export default NotFoundPage;