
import React from "react";
import LayoutMovies from "./Components/Layout";
import ListMovie from "./Components/List";
import { api } from "./Services/Api";
import { Skeleton } from "antd";
import PaginationMovie from "./Components/Pagination";

class AppMovies extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,//loadding api
            listMovies: [],
            page: 1,
            totalPage: 0,
            totalResults: 0
        }
    }

    async componentDidMount() {
        const data = await api.getDataPopularMovies(this.state.page);
        if (data.hasOwnProperty("results")) {
            this.setState({ listMovies: data.results });
        }
        if (data.hasOwnProperty("total_pages")) {
            this.setState({ totalPage: data.total_pages });

        }
        if ((data.hasOwnProperty("total_results"))) {
            this.setState({ totalResults: data.total_results });
        }

        this.setState({ loading: false });
    }

    changePage = async (p) => {

        //P: trang ma ng dung gui len
        if (p >= 1 && p < this.state.totalPage) {
            // can goi lai api de lay data moi theo page
            this.setState({ loading: true });// bat dau lay data moi 
            const movies = await api.getDataPopularMovies(p);
            if (movies.hasOwnProperty("results")) {
                this.setState({ listMovies: movies.results });
            }
            this.setState({ page: p, loading: false });
        }
    }
    render() {
        if (this.state.loading) {
            return (
                <LayoutMovies>
                    <Skeleton active />
                </LayoutMovies>
            )
        }
        return (
            <LayoutMovies>
                <ListMovie listMovies={this.state.listMovies} />
                <PaginationMovie
                    current={this.state.page}
                    total={this.state.totalResults}
                    change={this.changePage}
                />
            </LayoutMovies>
        )
    }
}

export default AppMovies;

