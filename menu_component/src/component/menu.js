import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCog } from '@fortawesome/free-solid-svg-icons';
import './menu.css'
export default function Menu (){

    const [isToogle, setIsToogle]=useState(false);
    const [navOne,setNavOne]=useState(false)
    const [navTwo,setNavTwo]=useState(false)
    const [subMenu,setSubMenu]=useState(false)
    const [navThree ,setNavThree ]=useState(false)
    const [activeNav, setActiveNav] = useState(null);

    function handleToogleButton(){
        setIsToogle(!isToogle)
    }
    function showNavOne(){
        setNavOne(!navOne)
    }

    function showNavTwo(){
        setNavTwo(!navTwo)
    }

    function showSubMenu(){
        setSubMenu(!subMenu)
    }
    function showNavThree(){
        setNavThree(!navThree)
    }

    function handleOptionClick(nav) {
        setActiveNav(nav);
    }
    return(
        <>
         <button onClick={handleToogleButton}>dark mode 
             {isToogle? ' on':' off'}
        </button>
        <div className={isToogle ? 'dark-mode' : 'light-mode'} style={{padding:"10px"}}>
       
        <div className="Navigation">
            <div  className={`nav-header ${activeNav === 'navOne' ? 'active-nav' : ''}`} tabIndex="0" style={{display:"flex",alignItems:'center',justifyContent:"space-around",width:"100%"}}>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <p onClick={showNavOne} tabIndex="0">Navigaton One </p>
            <span className="dropdown-icon">{navOne ? '▲' : '▼'}</span>
            </div>
           
           {navOne &&
            <div className="submenu" >
                <p tabIndex="0" onClick={() => handleOptionClick('navOne')}>option 1</p>
                <p tabIndex="0" onClick={() => handleOptionClick('navOne')}>option 2</p>
                <p tabIndex="0" onClick={() => handleOptionClick('navOne')}>option 3</p>
                <p tabIndex="0" onClick={() => handleOptionClick('navOne')}>option 4</p>

            </div>
           } 
           <div className={`nav-header ${activeNav === 'navTwo' ? 'active-nav' : ''}`} style={{display:"flex",alignItems:'center',justifyContent:"space-around"}}>
           <FontAwesomeIcon icon={faCog} className="icon"/>
           <p onClick={showNavTwo} tabIndex="0">Navigaton Two</p>
           <span className="dropdown-icon">{navTwo ? '▲' : '▼'}</span>
           </div>
           
           {navTwo &&
            <div  className="submenu">
                <p tabIndex="0" onClick={() => handleOptionClick('navTwo')}>option 5</p>
                <p tabIndex="0" onClick={() => handleOptionClick('navTwo')}>option 6</p>
                <p onClick={showSubMenu} tabIndex="0">Sub menu</p>
                {subMenu &&
                    <div  className="submenu1">
                          <p tabIndex="0" onClick={() => handleOptionClick('navTwo')}>option 7</p>
                            <p tabIndex="0" onClick={() => handleOptionClick('navTwo')}>option 8</p>
                    </div>
                }
               

            </div>
           } 
           <div className={`nav-header ${activeNav === 'navThree' ? 'active-nav' : ''}`} style={{display:"flex",alignItems:'center',justifyContent:"space-around"}}>
          <img src=".\fourbox.jpg" style={{height:'20px'}}className="icon"></img> 
           <p onClick={showNavThree} tabIndex="0">Navigaton Three</p>
           <span className="dropdown-icon">{navThree ? '▲' : '▼'}</span>
           </div>
           
            {navThree &&
                <div  className="submenu">
                     <p tabIndex="0" onClick={() => handleOptionClick('navThree')}>option 9</p>
                     <p tabIndex="0" onClick={() => handleOptionClick('navThree')}>option 10</p>
                     <p tabIndex="0" onClick={() => handleOptionClick('navThree')}>option 11</p>
                     <p tabIndex="0" onClick={() => handleOptionClick('navThree')}>option 12</p>
                </div>
            }
        </div>
        </div>
        </>
    )
}