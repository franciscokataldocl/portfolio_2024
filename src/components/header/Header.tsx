'use client'
import { useMenuStore } from '@/store/menu/menu.store';
import Image from 'next/image';
import HamburgerMenu from '../hamburger/HamburgerMenu';
import './header.css';

const logo:string ='https://res.cloudinary.com/kataldo2024/image/upload/v1720036074/logo-kataldo_vhrfqd.svg'
const Header = () => {
    
    const { menuItems } = useMenuStore();
    return (
        <>
        <div className='header-container flex max-sm:hidden h-20'>
           <div className='basis-1/6 flex justify-center logo'>
           <Image className=" sm:py-5  md:py-2 sm:max-w-20 md:max-w-full" width={150} height={50} src={logo} alt='logo kataldo fullstack developer'/>
           </div>
           <ul className='w-full grid grid-cols-1 sm:grid-cols-4 gap-0 px-0 py-0  '>
            {menuItems.map(item =>(
                <li key={item} className='w-full flex justify-center items-center text-white'>{item}</li>
            ))}

           </ul>
        </div>

        <div className="header-container flex sm:hidden h-20">
        <HamburgerMenu />
        <div className=' w-full flex justify-center logo'>
           <Image className=" sm:py-5 basis-1/2 md:py-2 sm:max-w-20 md:max-w-full" width={150} height={50} src={logo} alt='logo kataldo fullstack developer'/>
           </div>
        </div>
        </>
        
    )
}

export default Header;


{/* <div className="grid grid-cols-5 grid-rows-1 gap-4">
<div >1</div>
<div className="col-span-4 ">
    <ul className="grid grid-cols-4 gap-4 ">
        <li>Home</li>
        <li>Sobre mi</li>
        <li>Proyectos</li>
        <li>Contacto</li>
    </ul>
</div>
</div> */}