


function FunctionProps (props){
    const {Fname , Lname , age , collage ,children } = props;
    return(
           <div>
              <h3> my Name is {Fname} {Lname} <br></br>age :  {age}  <br></br>collage : {collage}</h3>
              {children}
           </div>

    )
}

export default FunctionProps;