import React,{Component,PureComponent,createRef} from "react";
class UserClass extends PureComponent{
//  PureComponent is similar to Component but it skips re-renders for same props and state. Class components are still supported by React, but we don’t recommend using them in new code.


    constructor(){
        super();
        this.state={
            count:1
        }
    
        this.inputref=createRef();
    }
    getCount =()=>{
            this.setState({count:2})
    }
    getrefdata=()=>{
            console.log(this.inputref.current.value);
        
            this.inputref.current.style.color="red";
    }
    render()
    {

        console.log('rendere');
        return (
            <div className="App">
              <h1>{this.state.count}</h1>
             

            <button onClick={this.getCount}>click me using Class</button>
            <br></br>
            
            <input ref={this.inputref} type="text" />
            <button onClick={this.getrefdata}>click me use ref</button>
            </div>
            
        );
    }
}

export default UserClass;