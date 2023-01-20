import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import User from './User';
import ClickFun from './onClickFun';
import ClickClass from './onClickClass';
import UserClass from './UserClass';
import UserData from './getInput';
import FormData from './form';



import reportWebVitals from './reportWebVitals';
var name ="variablenameHere";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <React.StrictMode>

    <FormData /> 
  <User.Classuser /> 
  <User.USer />
  <UserClass />
  <UserData />
  <ClickClass  Name="using props sending this parameter"  variableName={name}/>

  <ClickFun Name="using props sending this parameter"  variableName={name}/>

  

 

</React.StrictMode>
);




// async function Get(){
//     let result =  await client.connect();
//     let db = result.db("Test");
//     let collection = db.collection('user');
//     let data =await collection.find({}).toArray()
//     console.log(data);
// }

// get();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
