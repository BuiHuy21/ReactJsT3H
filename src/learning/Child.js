import React from 'react';
import './demo.scss';
class Child extends React.Component {

     state = {

          showJob: false
     }

     handlerFirstName = (event) => {
          this.setState({ firstName: event.target.value });
     }
     handlerLastName = (event) => {
          this.setState({ lastName: event.target.value });
     }
     handleSubmit = (event) => {
          console.log(this.state)
          event.preventDefault();

     }
     handleShowHide = () => {
          this.setState({
               showJob: !this.state.showJob
          })
     }
     handleDelete = (job) => {
          // console.log(job)
          this.props.deleteJob(job)
     }
     render() {
          let { showJob } = this.state;
          let { arrJob } = this.props;
          // let check = showJob === true ? 'showJob = true' : 'showJob = false';
          // let name = 'Huy';
          return (
               <div>
                    {showJob === false ?
                         <div>
                              <button onClick={() => this.handleShowHide()}>Show</button>
                         </div>
                         :
                         <>
                              <div className='container'>
                                   {
                                        arrJob.map((item) => {
                                             return (
                                                  <div key={item.id} >
                                                       {item.title}-{item.salary} <> </> <button onClick={() => this.handleDelete(item)}>X</button>
                                                  </div>

                                             )
                                        })
                                   }
                              </div>
                              <div>
                                   <button className="btn-show" onClick={() => this.handleShowHide()}>Hide</button>
                              </div>
                         </>
                    }

               </div>
          );
     }
}



export default Child;