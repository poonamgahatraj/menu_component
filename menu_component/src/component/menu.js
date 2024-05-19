import { useState } from "react"
import './menu.css'
export default function Menu (){

    const [isToogle, setIsToogle]=useState(false);
    const [navOne,setNavOne]=useState(false)
    const [navTwo,setNavTwo]=useState(false)
    const [subMenu,setSubMenu]=useState(false)
    const [navThree ,setNavThree ]=useState(false)

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
    return(
        <>
         <button onClick={handleToogleButton}>dark mode 
             {isToogle? ' on':' off'}
        </button>
        <div className={isToogle ? 'dark-mode' : 'light-mode'}>
       
        <div className="Navigation">
            <div style={{display:"flex",alignItems:'center'}}>
                <img src=".\email.jpg" style={{height:"20px",marginRight:'5px'}}></img>
            <p onClick={showNavOne} tabIndex="0">Navigaton One </p>
            </div>
           
           {navOne &&
            <div style={{}}>
                <p tabIndex="0">option 1</p>
                <p tabIndex="0">option 2</p>
                <p tabIndex="0">option 3</p>
                <p tabIndex="0">option 4</p>

            </div>
           } 
           <div style={{display:"flex",alignItems:'center'}}>
            <img src=".\setting1.jpg" style={{height:"20px",marginRight:'5px'}}></img>
           <p onClick={showNavTwo} tabIndex="0">Navigaton Two</p>
           </div>
           
           {navTwo &&
            <div style={{marginLeft:"8%"}}>
                <p tabIndex="0">option 5</p>
                <p tabIndex="0">option 6</p>
                <p onClick={showSubMenu} tabIndex="0">Sub menu</p>
                {subMenu &&
                    <div style={{marginLeft:"12%"}}>
                          <p tabIndex="0">option 7</p>
                            <p tabIndex="0">option 8</p>
                    </div>
                }
               

            </div>
           } 
           <div style={{display:"flex",alignItems:'center'}}>
            <img src=".\fourbox.jpg" style={{height:'20px',marginRight:'5px'}}></img>
           <p onClick={showNavThree} tabIndex="0">Navigaton Three</p>
           </div>
           
            {navThree &&
                <div style={{marginLeft:"8%"}}>
                     <p tabIndex="0">option 9</p>
                     <p tabIndex="0">option 10</p>
                     <p tabIndex="0">option 11</p>
                     <p tabIndex="0">option 12</p>
                </div>
            }
        </div>
        </div>
        </>
    )
}