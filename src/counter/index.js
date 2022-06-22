import React from 'react';
import LayoutCouter from "./components/layout";
import ResultCouter from "./components/result";
import ButtonComponent from "./components/common/button";


class AppCouter extends React.Component {

    constructor(props) {

        super(props);

        // khai bao state 
        this.state = {
            count: 0
        }

        // this.changeCouter = this.changeCouter.bind(this);
    }

    changeCouter = (type) => {
        // this.setState({count: this.state.count + 1}); // truyen vao la mot object  
        if (type === 'increment') {

            this.setState((state) => ({ count: state.count + 1 }));  //luon luon return ve 1 objects
        } else if (type === 'decrement') {
            this.setState((state) => ({ count: state.count - 1 }));  //luon luon return ve 1 objects

        }
    }

    render() {
        // chi su dung trong class components

        return (
            <LayoutCouter>
                <ResultCouter result={this.state.count} />
                <ButtonComponent
                    type="button"
                    name="increment"
                    click={this.changeCouter}
                >
                    +
                </ButtonComponent>
                <ButtonComponent
                    type="button"
                    name="decrement"
                    click={this.changeCouter}
                >
                    -
                </ButtonComponent>
            </LayoutCouter>
        )
    }

}
export default AppCouter;

