import {Component} from "react"


class ClassProps extends Component {
    render(){
        return(
            <div>
               <h3>  course1 : {this.props.course1} <br></br>   couser2 :  {this.props.course2} </h3>
                {this.props.children}
            </div>
        )
    }
}
export default ClassProps;