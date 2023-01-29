import React,{useEffect,useState} from "react";

function Data(props){

    const [propname, setPropname] = useState("no name");
    // React.useEffect(()=>{

    // })
    //call in every maethod when page load when state change whene prop change etc
   

    useEffect(()=>{ // it will calll in every time
        console.log('user effect');
    })

    useEffect(()=>{ //this use effect call only when you use count state or update change count state so value of props autoaticaly chanege
        console.log('user effect for name props ');
    },[props.count])


 
    // function chnagestatewithprops(){
    //     setPropname(props.count +"abc");
    // }
    
    return(

        <div>
            <h1>sdsd</h1>
            <button >{props.count} state change useeffect call</button>
        </div>
    )
}

export default Data;