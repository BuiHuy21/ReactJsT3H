import React from "react";
import axios from "axios";

class ListUsers extends React.Component {
    state = {
        listUsers: []
    }

    async componentDidMount() {
        // axios.get('https://reqres.in/api/users?page=2')
        //     .then(res => {
        //         console.log(res.data.data);
        //     })

        let res = await axios.get('https://reqres.in/api/users?page=2')
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
        // console.log(res.data.data);

    }


    render() {
        let { listUsers } = this.state;
        return (
            <div className="list">
                <div className='title'> danh sách</div>
                <div className='list-user-content'>
                    {listUsers && listUsers.length &&
                        listUsers.map((item, index) => {
                            return (
                                <div className='child'>
                                    {index + 1} - {item.first_name} - {item.last_name}
                                </div>
                            )
                        })}

                </div>
            </div>
        )
    }

}
export default ListUsers;