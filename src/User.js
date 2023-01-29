//function componenet

import { Link } from "react-router-dom";

// import bodyParser from 'body-parser';

function USer() {
        var  a=8;
        var b = 9;
        return "function component"+a+b;
  }
  
  function Classuser() {
      var  a=8;
      var b = 9;

  
      return "function user"+a+b;
}
function nav() {
    

  
      return(
      <div>
            <ul>
                   <li><Link to="/save">save data</Link></li>
            </ul>
      </div>
      )
}
  
  export default {USer,Classuser,nav};
