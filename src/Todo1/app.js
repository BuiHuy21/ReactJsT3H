
import React from 'react';
import LayoutTodo from './components/layout';
import InputTodo from './components/input';
import ButtonTodo from './components/button';
import ListTodo from './components/list';
import FillterTodo from './components/fillter';


class AppTodo extends React.Component{   // class component 

    constructor(props) {
        super(props);
        this.state = {
            nameWork:'',
            idTodo: 0,
            dataTodo: [],
            show: -1
            // doneTodo: [],

            // [{id:1,name:"hoc html",done:false},{}]
        }
    }


        changeNameWork =(event) => {
            // lay duoc gia tri ng dung
            let  val=event.target.value;
            

            // cap nhap state

            this.setState({nameWork: val});
        }

        addTodoWork =() => {
            // add state nameWork vao state data
            let nameTodo=this.state.nameWork.trim();
            if(nameTodo.length >0){
                //xu ly cap nhap state 
                // xu ly id cong viec

                this.setState(state => ({
                    idTodo: state.idTodo + 1

                }))

                // tao danh sach cong viec


                this.setState(state => ({dataTodo: [...state.dataTodo,{
                        id: state.idTodo,
                        name: state.nameWork,
                        done: false
                }]}));
                // xoa bo ten cong viec trong o input
                this.setState({nameWork: ""});
                // spread operator js ,ko lam thay doi  state ban dau

            }

        }

        removeItem = (id) => {
            // can biet cong viec can xoa thong qua id
            if(this.state.dataTodo.length > 0){
                let  newData= this.state.dataTodo.filter(item => item.id !== id);
                this.setState({dataTodo: newData});
            }
        }

        finishedItem = (id) => {
            // can cap nhap thuoc tinh done trong object trong datatodo ve true theo dung id cong viec

            if(this.state.dataTodo.length > 0){
                
                let newTodo = this.state.dataTodo.map(item => {
                    return item.id ===id ? {...item, done: !item.done} : item ;

                } );
                this.setState({dataTodo: newTodo});
            }
        }

        fillterItem = (event) => {
            let type = event.target.value;
            // console.log(type);
            if(type==='1'){
                type =true;
            }else if(type === '0'){
                type = false;
            }else{
                type = -1;
            }

            // let filterData = this.state.dataTodo.filter(item => item.done===type);
            // this.setState({dataTodo: filterData});
            this.setState({show:type});
        }

        render(){
            //  console.log(this.state.dataTodo);
            return(
            <LayoutTodo>
                <InputTodo
                // component khi khai bao se la props chu khong phai thuoc tinh
                 val = {this.state.nameWork}
                 type='text' change={this.changeNameWork}
                 /> 
                <ButtonTodo type='button' add={this.addTodoWork}>Add</ButtonTodo>
                <br></br>
                {/* conditional rendering  */}
                {this.state.dataTodo.length > 0 && (<FillterTodo change={this.fillterItem}/>)}
                <ListTodo 
                todo={this.state.dataTodo} 
                remove={this.removeItem}
                done={this.finishedItem}
                show={this.state.show}
                />
                
            </LayoutTodo>
            )
        }
}

export default AppTodo;