import React,{useEffect,useState,useMemo,useRef} from "react";
import Userinput from './forwardref'

function Data(props){
    
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(1);
    const [val, setVal] = useState("00000");
   
    //call in every maethod when page load when state change whene prop change etc
    useEffect(()=>{ //this use effect call only when you use count state or update change count state
        console.log('user effect for count state ');
    },[count])

    const memoizedValue = useMemo(function countfun(){
        // it will call when we update count state 
        console.log('for count state  using usememo ');
       return count*5;
    },[count]);

    function countfun(){
        ///it will call when we update item state to resove this we use use memo 
        console.log('for count state ');
       return count*5;
    }
   
////use ref 
    const inputref = useRef();
    let inputrefChild = useRef();
    let inputrefChild2 = useRef();
    

    function changestatecount(){
        setCount(count+1);
    
    }
    function changestateitem(){
        setItem(item*10);
    }
    function getrefdata(){
        console.log(inputref.current.value);
        inputref.current.style.color="red";
        inputref.current.focus();
    }
    function getforwardrefdata(){
        console.log(inputrefChild.current.value);
        console.log(inputrefChild2.current.value);
        
        inputrefChild.current.style.color="green";
        inputrefChild.current.focus();
    }
 //////   
    return(

        <div>
            <h1>use meno hook</h1>
           <p>{count}</p>
           <p>
            {item}
           </p>
            <button onClick={changestatecount}>{count} state change useeffect call</button>
            <button onClick={changestateitem}>{item} state change useeffect call</button>
            {/* <h1>{countfun()}</h1> */}
            <h1>{memoizedValue}</h1>

<input type="text" value={val} defaultValue="qwqwqw" onChange={(e)=>setVal(e.target.value)} />
{/* when you use default value the you can noy use value and when you use value thne you van not use default value */}

            <br></br>
            {/* useref */}
            <input ref={inputref} type="text" />
            <button onClick={getrefdata}>click me useref hook</button>
            <br></br>
            {/* use child component usign forward ref */}
            <Userinput ref={inputrefChild} />
            <Userinput ref={inputrefChild2} />
            <button onClick={getforwardrefdata}>click me forward  hook</button>
        </div>
    )
}

export default Data;