import React from "react";
import {Row , Col, Table} from "antd";

const columns = [
    {
        title : 'Quốc gia',
        dataIndex : 'Country',
        key : 'Country'
        

    },
    {
        title : 'Mới nhiểm',
        dataIndex : 'NewConfirmed',
        key : 'NewConfirmed'
    },
    {
        title : 'Tổng ca mới nhiểm',
        dataIndex : 'TotalConfirmed',
        key : 'TotalConfirmed'
    },
    {
        title : 'Tử vong',
        dataIndex : 'NewDeaths',
        key : 'NewDeaths'
    },
    {
        title : 'Tổng ca Tử vong',
        dataIndex : 'TotalDeaths',
        key : 'ToatlDeaths'
    },
    {
        title : 'Khỏi bệnh',
        dataIndex : 'NewRecovered',
        key : 'NewRecovered'
    },
    {
        title : 'Tổng ca khỏi bệnh',
        dataIndex : 'TotalRecovered',
        key : 'TotalRecovered'
    }
];



const CountriesCovid = ({countries}) => {
// console.log(CountriesCovid);
    if(CountriesCovid.length === 0) {
        <Row>
            <Col span={24}>
                <p>không có dữ liệu</p>
            </Col>
        </Row>
    }
        return (
            <Row style={{margin: "20px 0px"}}>
                <Col span={24}>
                    <Table 
                        rowKey = 'ID'
                        columns={columns}
                        dataSource ={countries}

                    />
                </Col>
            </Row>
        )
}

export default React.memo(CountriesCovid);