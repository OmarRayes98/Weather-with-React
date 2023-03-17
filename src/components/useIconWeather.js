import React from 'react';
//import icons
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




const useIconWeather = (mainWeather)=>
{
let icon ;

    switch(mainWeather){
        case 'Clouds':
          icon = <IoMdCloudy/> ;
          break;
        
        case 'Haze':
            icon = <BsCloudHaze2Fill/> ;
            break;
    
        case 'Rain':
          icon = <IoMdRainy style={{color : "#31cafb"}}/> ;
          break;
        
        case 'Clear':
            icon = <IoMdSunny style={{color : "#ffde33"}}/> ;
            break;
    
        case 'Drizzle':
            icon = <BsCloudDrizzleFill style={{color : "#31cafb"}}/> ;
            break;
    
        case 'Snow':
            icon = <IoMdSnow style={{color : "#31cafb"}}/> ;
            break;
      
        case 'Thunderstorm':
            icon = <IoMdThunderstorm/> ;
            break;
        default:
            console.log("error")
      }

      return icon;
}

export default useIconWeather
