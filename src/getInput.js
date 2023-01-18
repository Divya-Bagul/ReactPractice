import {useState} from "react";
function Data() {
    const [name, setName] = useState(null);

    function submit(val){
        // for on change text alert(val.target.value);
        // alert(val.target.value);
        setName(val.target.value)
       }
       
    return (
        <div className="App">
         <h1>{name}</h1>
        <input type="text" onChange={submit} />
        {/* <button onClick={submit}>click me</button> */}
       
        </div>
        
    );
}





export default Data;
