'use client'
import { useMenuStore } from '@/store/menu/menu.store';
import './style.css';

const Menu = () => {
    const { menuItems, isOpen } = useMenuStore();
  return (
    <>
    {isOpen && <ul className='grid auto-rows-fr full-menu'>
        {menuItems.map(item =>(
            <li key={item} className='
            text-white
            text-center
            flex
            justify-center
            items-center
            '>{item}</li>
        ))}
        </ul> }
    </>
    
   
  )
}

export default Menu;

