import React, { useState, useEffect } from "react";
import LayoutMovies from "../../Components/Layout";
import { Row, Col, Skeleton, Image, Button } from "antd";
import { useParams } from 'react-router-dom';
import { api } from '../../Services/Movies';
import { helper } from '../../Helpers/common';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.min.css';

const DetailPage = () => {
     const { id } = useParams() || { id: 0 };
     // console.log(id);

     const [loading, setLoading] = useState(true);
     const [detail, setDetail] = useState({});
     const [isOpen, setOpen] = useState(false)





     useEffect(() => {
          const getData = async () => {
               setLoading(true);
               const data = await api.getDataMoviesById(id);
               console.log(data);
               if (!data.hasOwnProperty('status_code')) {
                    setDetail(data);
               }
               setLoading(false);
          }
          getData();
     }, [id])
     if (loading) {
          return (
               <LayoutMovies>
                    <Skeleton active />
               </LayoutMovies>
          )
     }
     if (helper.isEmptyObj(detail) && loading) {
          return (
               <LayoutMovies>
                    <h4>Khoong co du lieu bo phim</h4>
               </LayoutMovies>
          )
     }
     return (
          <LayoutMovies>
               <Row>
                    <Col span={8}>
                         <Image

                              src={`https://image.tmdb.org/t/p/w300/${detail.poster_path}`}
                         />
                         <h4>{detail.title}</h4>
                    </Col>
                    <Col span={8}>
                         <p>{detail.overview}</p>
                         {detail.videos.results.length > 0 && (   // kiem ra  xem ci video tra ve ko
                              <>
                                   <ModalVideo
                                        channel='youtube' autoplay isOpen={isOpen}
                                        videoId={detail['videos']['results'][0]['key']}
                                        onClose={() => setOpen(false)} />
                                   <Button type="primary" onClick={() => setOpen(true)}>
                                        View Trailer
                                   </Button>

                              </>
                         )}
                    </Col>
                    <Col span={8}>

                    </Col>
               </Row>

          </LayoutMovies>
     )
}

export default React.memo(DetailPage);