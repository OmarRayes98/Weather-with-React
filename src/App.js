import React , {useEffect, useState} from "react";
import "./App.css";
import axios from "axios";

import Form from './components/Form';
import Weather from './components/Weather';
// import useIconWeather from "./components/useIconWeather";
//--------------------------------------------------------------


const APIkey ="ea771b54eaa690e3a0a9d3a3f04cbac8";

const App = ()=>
{
  const [data, setData] = useState(null);
  const [location, setLocation] = useState("Syria");
  const [inputValue , setInputValue] = useState('');
  const [animate, setAnimate]= useState(false);
  const [loading, setLoading] =useState(false);
  const [errorMsg, setErrorMsg] =useState('');


  const handleInput = (e) =>{
    const result = e.target.value.replace(/[^a-z]/gi, '');
    setInputValue(result);
  }

  const handleSubmit = (e) =>{

    if(inputValue !== ''){

      setLocation(inputValue);
    }

    //select input by js
    const input = document.querySelector('input');

    if(input.value ===''){
      //set animate to true

      setAnimate(true);

      //after 500 ms setAnimate to false 
      setTimeout(()=>{
        setAnimate(false);
      },500);
    }
    input.value= '';

    e.preventDefault();

  }

  //fetch the data

  useEffect(()=>{

    async function Get_URL(){
    
    setLoading(true);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${APIkey}`;

    try{
    
  const {data} =   await axios.get(url);

  setTimeout(() =>{

      setData(data);
      setLoading(false);
      setErrorMsg('');

  },1500);
  
    }

    catch(err){
      setLoading(false);
      setErrorMsg(err);
      // console.log(err)

    }
  }

  Get_URL();


  }, [location]);


  //for Loading or Strating of page
  if(!data)
  {
    return(
      <div className="d-flex flex-column  justify-content-center align-items-center  w-100 vh-100 content">
      {errorMsg ? <div className="w-100  err bg-danger"> {errorMsg.message}</div>:

            <div className="spinner-border text-white" role="status">
            <span className="sr-only">Loading...</span>
          </div>
      }

    </div>
    )
  }
  // else{

  //   var icon =useIconWeather(data.weather[0].main);

  // }


  return (
    <div className="w-100 vh-100 content d-flex flex-column 
    align-items-center justify-content-center ">

      {errorMsg && <div className="w-100  err"> {errorMsg.response.data.message}</div> }
      
      <Form animate={animate} handleInput= {handleInput} inputValue={inputValue} handleSubmit={handleSubmit} />

      <Weather loading={loading} icon={data.weather[0].main} data={data}/>

    </div>
  )
}

export default App
