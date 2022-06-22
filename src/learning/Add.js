import React, { Component } from 'react';

class Add extends Component {
     state = {
          title: '',
          salary: ''
     }

     handlerJob = (event) => {
          this.setState({ title: event.target.value });// lay du lieu input Job
     }
     handlerSalary = (event) => {
          this.setState({ salary: event.target.value });//lay du lieu input salary
     }
     handleSubmit = (event) => {

          event.preventDefault();//ngan trang reload
          if (!this.state.title || !this.state.salary) {// check dau vao du lieu
               alert("Please nhập vào")
               return;
          }
          this.props.addnew({
               id: Math.random(),
               title: this.state.title,
               salary: this.state.salary
          });
          this.setState({
               title: '',
               salary: ''
          })

     }


     render() {
          return (
               <div>
                    <form action="/action_page.php">
                         <label htmlFor="fname">Job:</label><br />
                         <input
                              type="text"
                              value={this.state.title}
                              onChange={(event) => this.handlerJob(event)}

                         /><br />
                         <label htmlFor="lname">Salary:</label><br />
                         <input
                              type="text"
                              value={this.state.salary}
                              onChange={(event) => this.handlerSalary(event)}

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

export default Add;