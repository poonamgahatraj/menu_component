
import { useState } from "react";
export default function NavItem ({item}){
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleNavItem = () => {
      setIsExpanded(!isExpanded);
    };

    return(
     
      <>
      
          <div>
            <p onClick={toggleNavItem} style={{ cursor: 'pointer' }}>
              {item.label}
            </p>
            {isExpanded && (
              <div style={{ marginLeft: '20px' }}>
                {item.subItems.map(subItem => (
                  <p key={subItem.id}>{subItem.label}</p>
                ))}
              </div>
            )}
          </div>
          </>
    )
}