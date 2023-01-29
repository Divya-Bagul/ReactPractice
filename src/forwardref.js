import React,{useEffect,useState,useMemo,forwardRef} from "react";

function Data(props,ref){
    
    
    return(

        <div>
        
            
            
            <input ref={ref} type="text" />
           
         
        </div>
    )
}

export default forwardRef(Data);