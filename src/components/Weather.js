import React  from "react";

import {
    BsEye,
    BsWater,
    BsThermometer,
    BsWind,
} from "react-icons/bs";

import {TbTemperatureCelsius} from 'react-icons/tb';
import {
    IoMdSunny,
    IoMdRainy,
    IoMdCloudy,
    IoMdSnow,
    IoMdThunderstorm,
} from "react-icons/io";

import {
    BsCloudHaze2Fill,
    BsCloudDrizzleFill,
} from "react-icons/bs";




const Weather= (props)=> {

    const {loading, icon,data } = props;
    const date = new Date();

    var i;
    switch(icon){
        case 'Clouds':
          i = <IoMdCloudy/> ;
          break;
        
        case 'Haze':
            i = <BsCloudHaze2Fill/> ;
            break;
    
        case 'Rain':
          i = <IoMdRainy style={{color : "#31cafb"}}/> ;
          break;
        
        case 'Clear':
            i = <IoMdSunny style={{color : "#ffde33"}}/> ;
            break;
    
        case 'Drizzle':
            i = <BsCloudDrizzleFill style={{color : "#31cafb"}}/> ;
            break;
    
        case 'Snow':
            i = <IoMdSnow style={{color : "#31cafb"}}/> ;
            break;
      
        case 'Thunderstorm':
            i = <IoMdThunderstorm/> ;
            break;
        default:
            console.log("error")
      }


        return(
    <>
      {/* card */}
    <div className="w-100 card text-white">

        {loading ? (
        <div className="w-100 h-100 d-flex justify-content-center align-items-center">
        
        <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
        </div>

        </div>) : (
        
        <div>

            {/* card top */}
            <div className="card-top d-flex  align-items-center ">
                    <div className="icon">
                    {i}
                    </div>
        
                    <div>
                    <div className="country ">
                    {data.name}, {data.sys.country}
                    </div>
        
                    <div>{date.getUTCDate()}/{date.getUTCMonth()+1}
                    /{date.getUTCFullYear()}
                    </div>
        
                    </div>
            </div>
            
            {/* card body  */}
            <div className="card-body">
        
                    <div className="d-flex justify-content-center align-items-center">
                      {/* temp */}
                    <div className="temp">{parseInt(data.main.temp)}</div>
                      {/* celisius icon */}
                    <div className="celisiuse-icon">
                        <TbTemperatureCelsius/>
                    </div>
                    </div>
        
                    {/* weather description */}
                    <div className="text-center text-capitalize">{data.weather[0].description}</div>
            </div>
        
            {/* card bottom */}
            <div className="card-bottom mx-auto d-flex flex-column" >
                    <div className="d-flex justify-content-between">
        
                    <div className="d-flex align-items-center icon-bottom ">
                        {/* icon */}
                        <div className="icon-visibilty">
                        <BsEye/>
                        </div>
                        <div>
                        Visibility <span className="visibility">{data.visibility /1000 } km</span>
                        </div>
        
                    </div>
        
                    <div className="d-flex align-items-center icon-bottom ">
                        {/* icon */}
                        <div className="icon-visibilty">
                        <BsThermometer/>
                        </div>
                        <div className="d-flex">
                        Feels like  
                        <div className="d-flex visibility">{parseInt(data.main.feels_like)}
                        <TbTemperatureCelsius/>
                        </div>
                        </div>
        
                    </div>
                    
                    </div>
        
                    <div className="d-flex justify-content-between">
        
                    <div className="d-flex align-items-center icon-bottom ">
                        {/* icon */}
                        <div className="icon-visibilty">
                        <BsWater/>
                        </div>
                        <div>
                        Humidity <span className="visibility">{data.main.humidity}  %</span>
                        </div>
        
                    </div>
        
                    <div className="d-flex align-items-center icon-bottom ">
                        {/* icon */}
                        <div className="icon-visibilty">
                        <BsWind/>
                        </div>
                        <div>Wind<span className="visibility">{data.wind.speed} m/s</span></div>
        
                    </div>
                    
                    </div>
            </div>
                
        </div>
        ) }

    </div>

    </>
    )

}

export default Weather;