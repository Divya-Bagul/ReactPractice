import {useState} from "react";
import {Link, Routes, Route, useNavigate} from 'react-router-dom';


function FormData(){
const[name,setname] = useState("");
const[lang,setlang] = useState("");
const[tnc,settnc] = useState(false)
const[show,setshow] = useState(false)
const[disable,setdisable] = useState(true)
const[usercount,setuserconut] = useState(1)
const navigate = useNavigate();
function getFormData(e){
        e.preventDefault();
        setdisable(false);
        if(name != '' && lang != '' && tnc != false){
            setshow(true);
        }else{
            setshow(false);
        }
        navigate('/contacts',name);
      

   
     
        console.log(name,lang,tnc);
}


  var username=  show == true ?name :'';
  var userlang=  show == true ?lang :'';
  var usertnc=  show == true ?tnc :'';


    return (
        <div>
            <form onSubmit={getFormData} >
            <input type="text" placeholder="enter name" onChange={(e)=>setname(e.target.value)}/>
            <br></br>
            <select onChange={(e)=>setlang(e.target.value)}>
                <option>select one option</option>
                <option>php</option>
                <option>laravel</option>
            </select>
            <br></br>
            <input type="checkbox"  onChange={(e)=>settnc(e.target.checked)}/><span>terms and condition</span>
            <br></br>
            <button type="submit" disabled={!disable ? 'disabled' : ''} >Submit</button>
            </form>
            <div>
              <h1>  {username}  {userlang} {usertnc}</h1>

              <h1>{usercount == 1 ? <h1>user count is 1</h1>:usercount == 2 ?<h1>user count is 2</h1>:<h1>user count is 3</h1>}</h1>
            </div>
            {/* <h1>{name}</h1> */}
        </div>

      
    )
}





export default FormData;