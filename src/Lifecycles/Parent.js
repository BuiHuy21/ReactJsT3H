import React from 'react';
import Child from './Child';



class ParentComonent extends React.Component {

    constructor(props) {
        super(props);
        // phuong thuc chay dau tien trong giai doan mounting va chi chau day nhat 1 lan )(ung dung de khai bao state)
        this.state = {
            count:0, 
            color: 'red',
            show: true
        }
        console.log('constructor ParentComonent - mounting - runing');
        console.log('**********************');
    }

    static getDerivedStateFromProps(props, state) {
        // props : truyen vao component
        // state : la state khai bao trong constructor
        // thong thuong dung de thay doi satae theo prop
        // phuong thuc nay se chay tr render
        // chay ca 2 giai doan mouting va updating

        console.log('props getDerivedStateFromProps', props);
        console.log('state', state);
        console.log('getDerivedStateFromProps -mounting/ updating runing', state);
        return null;
    }
    componentDidMount() {
        // ham chi chay 1 lan duy nhat trong giai doan mouting va cuoi cung trong giai doan mounting
        // ung dung de thay doi state , call API , tuong tac DOM do
        console.log(' componentDid Mount - mounting runing');
        console.log(' *************************');
    }
    changeCount =() => {this.setState({count: this.state.count +1,color: 'yellow',show: false});}

    shouldComponentUpdate(nextProps, nextState){
        console.log('nextProps', nextProps);
        console.log('nextState', nextState);
        console.log('state', this.state.count);

        // kiem tra viec render lai component
        // tra ve true thif render lai-tra ve false thi ko render
        // kiem tra xem prop cu va prop moi co khac nhau ko neu khac nha thi se render
        // khi dung phuong thuc nay se ko ke thua den purecomponent nua
        // kiem tra nextProps va nextstate co su khac nhau k
        console.log('shouldComponentUpdate ParentComonent - updating runing');
        if(this.state.count !== nextState.count){
            return true;
        }
        return false;
    }
    getSnapshotBeforeUpdate(prevProps, prevStates) {
        console.log('prevProps', prevProps);
        console.log('prevStates', prevStates);
        console.log('getSnapshotBeforeUpdate ParentComonent - updating runing');
        //la ham bo tro gia tri cho componnents 
        // khi khai bao getSnapshotBeforeUpdate can khai bao componentDidUpdate
        return 'pink';
    }

    componentDidUpdate(prevProps, prevStates, snapshot) {
        console.log('prevProps', prevProps);
        console.log('prevStates', prevStates);
        console.log('componentDidUpdate - updating runing');
        // chay cuoi cung updating runing
        // tuong tac dom giao dien da hien thi het roi

        document.getElementById('title').style.color = snapshot;
        // kko the setState dc vi day la ham chay cuoi cung muon thay doi thi can tuong tac voi DOM
        // this.setState({color: snapshot})

    }
    
    render() {
        // hien thi giao dien
        // chay ca 2 giai doan mouting va updating
        console.log('render ParentComonent-mounting / updating runing')
        return (
            <>
            {/* condition  rendering kieemr tra 2 dieu kien neu show = true va co components Child */}
                {this.state.show && <Child/>}  
                {/* <h2 id="title" style={{color:this.state.color}}>{this.state.count}</h2>
                <button onClick={()=>this.changeCount()}>+</button> */}
            </>
        )



    }

}

export default ParentComonent;


// this.Settate co 2 cach truyen vao la 1 funtion hoac object
