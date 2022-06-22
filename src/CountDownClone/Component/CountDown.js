import React from 'react';
import { PropTypes } from "prop-types";
class CountDown extends React.Component {
     constructor(props) {
          super(props);

          this.state = {
               currentSecond: 0
          };

     };

     componentDidMount(props) {
          const { second } = this.props;
          this.countDown(second);

     };

     countDown(second) {
          if (second === -1) return;
          this.setState({ currentSecond: second });
          setTimeout(() => this.countDown(second - 1), 1000);
     };

     render() {
          return (
               <div>
                    <h3>{this.state.currentSecond}</h3>
               </div>
          );
     }
}
CountDown.propTypes = {
     second: PropTypes.number.isRequired,
};
export default CountDown;