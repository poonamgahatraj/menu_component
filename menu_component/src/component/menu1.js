import './menusidebar.css';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCog } from '@fortawesome/free-solid-svg-icons';

export default function MenuSideBar(){


    const [isToogle, setIsToogle]=useState(false);
    const [navOne,setNavOne]=useState(false)
    
    function handleToogleButton(){
        setIsToogle(!isToogle)
    }

    function showNavOne(){
        setNavOne(!navOne)
    }
    return(
        <>
        <button onClick={handleToogleButton}>dark mode 
             {isToogle? ' on':' off'}
        </button>

        <div className={isToogle ? 'dark-mode' : 'light-mode'} >
<div style={{display:"flex",alignItems:'center'}}>
<FontAwesomeIcon icon={faEnvelope} className="icon" />
            <p onClick={showNavOne} >Navigaton One </p>
            <span className="dropdown-icon">{navOne ? '▲' : '▼'}</span>

</div>

{navOne &&
            <div className="submenu" >
                <p tabIndex="0">option 1</p>
                <p tabIndex="0">option 2</p>
                <p tabIndex="0">option 3</p>
                <p tabIndex="0">option 4</p>

            </div>
           } 

        </div>
        </>
    )
}