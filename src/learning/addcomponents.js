import React from 'react';

class addcomponents extends React.Component {
     state = {
          firstName: '',
          lastName: ''
     }

     handlerFirstName = (event) => {
          this.setState({ firstName: event.target.value });
     }
     handlerLastName = (event) => {
          this.setState({ lastName: event.target.value });
     }
     render() {
          return (
               <div>
                    <form action="/action_page.php">
                         <label htmlFor="fname">First name:</label><br />
                         <input
                              type="text"
                              value={this.state.firstName}
                              onChange={(event) => this.handlerFirstName(event)}

                         /><br />
                         <label htmlFor="lname">Last name:</label><br />
                         <input
                              type="text"
                              value={this.state.lastName}
                              onChange={(event) => this.handlerLastName(event)}

                         /><br /><br />
                         <input
                              type="button"
                              value="Submit"
                              onClick={(event) => this.handleSubmit(event)} />
                    </form>
               </div>
          );
     }
}

export default addcomponents;