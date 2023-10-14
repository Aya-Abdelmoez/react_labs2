import {Component} from "react";
import './style.css';
class StateComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            LoggedIn : "false",
            subscription : "Guest"
        }
    }

     changeConent = ()=> {
          
        this.setState({LoggedIn : 'true' ,subscription : 'You now have a subscription' })

        }
    
    render(){
        return(
            <div>
                <h3 className = "header1">{this.state.LoggedIn}  {this.state.subscription}</h3>
                <button  className = "btn"onClick = {this.changeConent}>Click</button>
            </div>
        )
    }
}

export default StateComponent;