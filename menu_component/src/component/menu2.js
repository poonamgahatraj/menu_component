
import NavItem from "./NavItem";

export default function Menu2(){
    const navItems = [
        {
          id: 1,
          label: 'Navigation One',
         
          subItems: [
            { id: 1.1, label: 'Option 1' },
            { id: 1.2, label: 'Option 2'},
            { id: 1.3, label: 'Option 3' },
            { id: 1.4, label: 'Option 4'}
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
                { id: 2.4 , label: 'Option 7'},
                { id: 2.5, label: 'Option 8' }
              ]
            }
          ]
        },
        {
          id: 3,
          label: 'Navigation Three',
         
          subItems: [
            { id: 3.1, label: 'Option 9'},
            { id: 3.2, label: 'Option 10' },
            { id: 3.3, label: 'Option 11' },
            { id: 3.4, label: 'Option 12' }
          ]
        }
      ];

     
    return(
        <>
      <div>
      {navItems.map(item => (
        <NavItem key={item.id} item={item} />
      ))}
    </div>
            </>
    )

               
}