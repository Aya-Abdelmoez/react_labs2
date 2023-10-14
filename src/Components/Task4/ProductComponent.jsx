import {Component} from "react";

import './style.css'
class ProductComponent extends Component{
    constructor(props){
        super(props);
       this.state = {
              i : 0

    }}
    decrementCounter = () => {
       const {i} = this.state;
      
       if(i > 0){
           this.setState({i : i -1});
       }
     
    };
    incrementtCounter = () =>{
       const {i} = this.state;
      
       this.setState({i : i +1});
     
    };
    render(){
        return(
            <div>
            <button className="btn1" onClick = {this.decrementCounter}>-</button>
            <p> {this.state.i} </p>
           
            <button className="btn2"  onClick = {this.incrementtCounter}>+</button>
            </div>

        )
    }
}

export default ProductComponent;