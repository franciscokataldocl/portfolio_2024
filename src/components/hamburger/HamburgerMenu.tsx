'use client'
import { useMenuStore } from '@/store/menu/menu.store';
import { Divide as Hamburger } from 'hamburger-react';
import './style.css';


const HamburgerMenu = () => {
    const { isOpen, change } = useMenuStore();
  return (
    <div className='hamburger-container basis-1/3 flex justify-center items-center'>
        <Hamburger toggled={isOpen} toggle={change} color={'white'}/>
    </div>
    
  )
}

export default HamburgerMenu