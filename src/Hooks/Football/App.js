
import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { league_id } from './const/index';
import { api } from './Services/Api';




const AppFootball = () => {
     const [loading, setLoading] = useState(true);
     const [leagueDetail, setleagueDetail] = useState({});
     const [dataLeague, setDataLeague] = useState([]);

     useEffect(() => {
          //componentDidMount

          const getData = async () => {
               const fooball = await api.getDataFootball(league_id);
               if (fooball.hasOwnProperty('data')) {
                    // cap nhap state
                    if (fooball['data'][league_id].hasOwnProperty('league_detail')) {
                         setleagueDetail(fooball['data'][league_id]['league_detail'])
                    }
                    if (fooball['data'][league_id].hasOwnProperty('data')) {
                         setDataLeague(fooball['data'][league_id]['data'])
                    }

               }
               setLoading(false);//call done
          }

          getData();
     }, []);  // truyen tham so thi useEffect tu dong bi thay doi lai

     console.log("leaguedetail", leagueDetail);
     return (
          <Row>
               <Col span={20} offset={2}>

               </Col>
          </Row>
     )
}
export default AppFootball;

