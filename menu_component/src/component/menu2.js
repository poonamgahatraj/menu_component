import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Option1 from './option1';
import Option2 from './option2';
import Option3 from './option3';
import Option4 from './option4';
import './menu2.css'

export default function Menu2() {
  const navItems = [
    {
      id: 1,
      label: 'Navigation One',
      subItems: [
        { id: 1.1, label: 'Option 1' },
        { id: 1.2, label: 'Option 2' },
        { id: 1.3, label: 'Option 3' },
        { id: 1.4, label: 'Option 4' }
      ]
    },
    {
      id: 2,
      label: 'Navigation Two',
      subItems: [
        { id: 2.1, label: 'Option 5' },
        { id: 2.2, label: 'Option 6' },
        {
          id: 2.3,
          label: 'Sub menu',
          subItems: [
            { id: 2.4, label: 'Option 7' },
            { id: 2.5, label: 'Option 8' }
          ]
        }
      ]
    },
    {
      id: 3,
      label: 'Navigation Three',
      subItems: [
        { id: 3.1, label: 'Option 9' },
        { id: 3.2, label: 'Option 10' },
        { id: 3.3, label: 'Option 11' },
        { id: 3.4, label: 'Option 12' }
      ]
    }
  ];

  const [expandedNavItems, setExpandedNavItems] = useState({});
  const [expandedSubNavItems, setExpandedSubNavItems] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [isToogle, setIsToogle]=useState(false);

  
  function handleToogleButton(){
    setIsToogle(!isToogle)
}


  const toggleNavItem = (id) => {
    setExpandedNavItems((prevState) => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  const toggleSubNavItem = (parentId, subId) => {
    setExpandedSubNavItems((prevState) => ({
      ...prevState,
      [parentId]: {
        ...prevState[parentId],
        [subId]: !prevState[parentId]?.[subId]
      }
    }));
  };

  
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case 'Option 1':
        return <Option1 />;
      // Add cases for other options here
      case 'Option 2':
        return<Option2/>
      case 'Option 3':
        return <Option3/>
      case 'Option 4':
        return <Option4/>
      default:
        return <div>Select an option to view its content</div>;
    }
  };

  return (
<>
    <button onClick={handleToogleButton}>dark mode 
    {isToogle? ' on':' off'}
</button>

<div className={isToogle ? 'dark-mode' : 'light-mode'} style={{display:"flex"}}>
<div className='NavBar' style={{border:" 1px solid grey",/* width: 13%; */display: "flex", flexDirection:" column",/* justify-content: center; */alignItems: "center"}}>
      {navItems.map(item => (
        <div key={item.id}>
          <p onClick={() => toggleNavItem(item.id)}  style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} tabIndex="0">
            {item.label}
            <FontAwesomeIcon icon={expandedNavItems[item.id] ? faChevronUp : faChevronDown} />
          </p>
          {expandedNavItems[item.id] && (
            <div style={{ marginLeft: '20px' }}>
              {item.subItems.map(subItem => (
                <div key={subItem.id}>
                  <p 
                     onClick={() => {
                      if (subItem.subItems) {
                        toggleSubNavItem(item.id, subItem.id);
                      } else {
                        handleOptionClick(subItem.label);
                      }
                    }} 
                    style={{ cursor: 'pointer' }}
                    tabIndex="0"
                  >
                    {subItem.label}
                  </p>
                  {expandedSubNavItems[item.id]?.[subItem.id] && subItem.subItems && (
                    <div style={{ marginLeft: '20px' }}>
                      {subItem.subItems.map(nestedSubItem => (
                        <p key={nestedSubItem.id}>{nestedSubItem.label}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>

    <div className='Content' style={{border:"1px solid grey",width:'70%'}}>
    {renderContent()}
</div>
</div>

</>  
  );
}
