import React,{useEffect,useState} from "react";
import UserProps from './userprops';
function Data(props){

    const [name, setName] = useState("divya");
    const [count, setCount] = useState(0);
    const [propname, setPropname] = useState("no name");
    // React.useEffect(()=>{

    // })
    //call in every maethod when page load when state change whene prop change etc
    useEffect(()=>{ //this use effect call only when you use count state or update change count state
        console.log('user effect for count state ');
    },[count])


    useEffect(()=>{ // it will calll in every time
        console.log('user effect');
    })

    // useEffect(()=>{ //this use effect call only when you use count state or update change count state
    //     console.log('user effect for name props ');
    // },[props.name])


    function changestate(){
        setName('Bagul');
    }
    function changestatecount(){
        setCount(count+1);
    }
    // function chnagestatewithprops(){
    //     // setPropname(props.name);
    // }
    
    return(

        <div>
            <h1>sdsd</h1>
            <button onClick={changestate}>{name} state change useeffect call</button>
            <button onClick={changestatecount}>{count} state change useeffect call</button>
            <UserProps count ={count}/>
        </div>
    )
}

export default Data;