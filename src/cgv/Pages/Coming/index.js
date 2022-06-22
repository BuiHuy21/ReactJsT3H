import React from "react";
import LayoutMovies from "../../Components/Layout";
import { Row, Col, Skeleton } from "antd";
import { useState, useEffect } from 'react';
import { api } from '../../Services/Movies';
import ListMovies from "../../Components/ListMovies";
import Pagination from "../../../Movies/Components/Pagination";

const UpComingPage = () => {
     const [loading, setLoading] = useState(true);
     const [movies, setMovies] = useState([]);
     const [page, setPage] = useState(1);
     const [totalPage, setTotalPage] = useState(0);
     const [totalResults, setTotalResults] = useState(0);
     const [clickPage, setClickPage] = useState(false);


     useEffect(() => {

          const getData = async () => {
               setLoading(true);
               // tao hieu ung loading trang 
               const data = await api.getDataUpcoming(page);
               // console.log(data);
               if (data.hasOwnProperty('results')) {
                    setMovies(data['results']);
               }

               if (!clickPage) {

                    if (data.hasOwnProperty("total_pages")) {

                         setTotalPage(data['total_pages']);
                    }

                    if (data.hasOwnProperty("total_results")) {
                         setTotalResults(data['total_results']);
                    }

               }
               setLoading(false);
          }
          getData();
     }, [page, clickPage]);

     const changPage = r => {

          if (r >= 1 && r <= totalPage) {
               // setLoading(true);
               setClickPage(true);
               setPage(r)
          }

     }
     if (loading) {
          return (
               <LayoutMovies>
                    <Skeleton active />
               </LayoutMovies>
          )
     }

     return (
          <LayoutMovies>
               <Row>
                    <Col span={24}>
                         <h2>Các bộ phim sắp công chiếu</h2>
                         <ListMovies
                              listMovies={movies}
                         />
                         {movies.length > 0 && (
                              <Pagination
                                   current={page}
                                   total={totalResults}
                                   change={changPage}
                              />

                         )}
                    </Col>
               </Row>

          </LayoutMovies>
     )
}

export default React.memo(UpComingPage);