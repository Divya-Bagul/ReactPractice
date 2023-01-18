import {useState} from "react";
// props  write when u use props 
function Data(props){
    function getName(){
       
        setName('Bagul');
        setCount(count+1);
    }
 
    const [name, setName] = useState("divya");
    const [count, setCount] = useState(0);

    return (
        <div className="App">
          <h1>{name}</h1>
          <h1>{count}</h1>

          {/* use props */}
        <h1>{props.Name}</h1>
        <h1>{props.variableName}</h1>

        <button onClick={getName}>click me</button>
        </div>
        
    );
}

export default Data;