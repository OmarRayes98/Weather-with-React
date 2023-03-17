import React  from "react";
import { IoMdSearch } from "react-icons/io";



const  Form = (props) => {

    const {animate ,handleInput, inputValue ,handleSubmit} = props;

        return(
            <form className={`${animate ? 'animate-shake' : 'animate-none'} form`}>


            <div className="h-100 position-relative d-flex align-items-center
            justify-content-between p-2">

                <input onChange={(e) =>handleInput(e)}
                className="form__input h-100" type="text" placeholder='Search by city or country
                ' value={inputValue}/>
                <button onClick={(e) =>handleSubmit(e)} 
                className="form__button rounded-pill d-flex justify-content-center align-items-center ">
                <IoMdSearch className="form__icon"/>
                </button>
            </div>


            </form>
        )
    }

export default Form;