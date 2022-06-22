

import React from 'react';
import LayoutCovid from './Components/Layout';
import GlobalCovid from './Components/Global';
import CountriesCovid from './Components/Countries';
import { api } from './Services/Api';
import { Skeleton } from 'antd';


class AppCovid extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            global: {},
            countries: []
        }
    };

    async componentDidMount() {
        const data = await api.getDataCovid();
        // cap nhap lai 2 state la global va countries
        if (data.hasOwnProperty('Global')) {
            this.setState({ global: data.Global });
        }
        if (data.hasOwnProperty('Countries')) {
            this.setState({ countries: data.Countries });
        }
        this.setState({ loading: false });// dưng diệc loading
    }

    render() {
        if (this.state.loading) {

            return (
                <LayoutCovid>
                    <Skeleton active />

                </LayoutCovid>
            )
        }
        return (
            <LayoutCovid>
                <GlobalCovid global={this.state.global} />
                <CountriesCovid countries={this.state.countries} />
            </LayoutCovid>
        )
    }
}


export default AppCovid;