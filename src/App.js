import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from './User';
import ClickFun from './onClickFun';
import ClickClass from './onClickClass';
import UserClass from './UserClass';
import UserData from './getInput';
import FormData from './form';
import LifecycleData from './lifecycle';
import Connnode from './connectnode';
import LifecycleFunction from './useeffect';
import Stylecss from './styleapply';
import Purecomponentclss from "./purecomponentclss"
import Memohook from "./usermemohook"


import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from "./nav";
import Home from './components/home';
import About from './components/about';
import Getdata from './components/getdata';
import Searchparam from './components/search_param'
import Contact from './components/contact'
import Nestedroute from './components/nestedroute'






var name ="variablenameHere";
// import ReactDOM from "react-dom/client";

function App() {

//   function callusername(name){
//     alert(name);
//  }
//   function datafun(){
//     alert('props function');
//   }
  return (
    <div className="App">


{/* <Stylecss callname={callusername}/>
<Purecomponentclss />
<Memohook/> */}

    <BrowserRouter> 
    <Nav/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About />} />
            <Route path="/getdata/:name/:number" element={<Getdata />} />
            <Route path="/searchparm" element={<Searchparam />} />
            <Route path="/contact/" element={<Contact />} >
                <Route path="nestedroute" element={<Nestedroute />} />
            </Route>
            <Route path="/*" element={<h1>page not found</h1>} /> 
            
        </Routes>
      </BrowserRouter>
  {/* <LifecycleData/> */}
  {/* <LifecycleFunction  name="abc"/> */}
  {/* {<Connnode />} */}

      {/* <FormData /> 
  <User.Classuser /> 
  <User.Classuser />
  <UserClass />
  <UserData />
  <ClickClass  Name="using props sending this parameter"  variableName={name} />

  <ClickFun Name="using props sending this parameter"  variableName={name} datafun={datafun}/> */}

  
    </div>
  );
}

export default App;
