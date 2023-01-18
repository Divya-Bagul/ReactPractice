import React,{Component} from "react";
class DataClass extends Component{
    

    constructor(){
        super();
        this.state={
            name:"divya"
        }
    }
    getName =()=>{
            this.setState({name:"Bagul"})
    }
    render()
    {


        return (
            <div className="App">
              <h1>{this.state.name}</h1>
              {/* <h1>{count}</h1> */}
    
              {/* use props */}
            <h1>{this.props.Name}</h1>
            <h1>{this.props.variableName}</h1>

            <button onClick={this.getName}>click me using Class</button>
            </div>
            
        );
    }
}
export default DataClass;