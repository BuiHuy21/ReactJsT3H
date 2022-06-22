import React from "react";
import LayoutMovies from "../../Components/Layout";
import { Row, Col } from "antd";


const SearchPage = () => {
     return (
          <LayoutMovies>
               <Row>
                    <Col span={24}>
                         <h1>This is search</h1>
                    </Col>
               </Row>

          </LayoutMovies>
     )
}

export default React.memo(SearchPage);