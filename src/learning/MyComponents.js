import React from 'react';
import Child from './Child';
import Add from './Add';

class MyComponents extends React.Component {


     state = {

          arrJob: [
               {
                    id: "abc", title: "Developers", salary: "500 $"
               },
               {
                    id: "cds", title: "Tester", salary: "400 $"
               },
               {
                    id: "cba", title: "Projects Manage", salary: "1000 $"
               },

          ]
     }

     addnew = (job) => {

          this.setState({
               arrJob: [...this.state.arrJob, job]
          })
     }
     deleteJob = (job) => {
          let current = this.state.arrJob;
          current = current.filter(item => item.id !== job.id);
          this.setState({
               arrJob: current
          })
     }
     render() {
          return (
               <>
                    <Add
                         addnew={this.addnew}
                    />
                    <Child
                         arrJob={this.state.arrJob}
                         deleteJob={this.deleteJob}

                    />
               </>
          );
     }
}

export default MyComponents;