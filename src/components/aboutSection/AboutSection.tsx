
import Image from 'next/image';
import './style.css';

const profileImage:string = 'https://res.cloudinary.com/kataldo2024/image/upload/v1720060846/profile_zxhoqs.jpg';
const AboutSection = () => {
  return (
    <div className='about-section grid py-20 px-0 md:px-20  grid-cols-1 md:grid-cols-2 grid-rows-1 gap-1'>
        <div className='flex flex-column items-center justify-center'>
            <section className='max-w-screen-md'>
            <h2 className='text-white text-center md:text-left font-extrabold text-3xl md:text-5xl'>_Sobre mi</h2>
            <p className='text-white text-base md:text-2xl text-center md:text-left  mt-8'>Más de 10 años de experiencia en la integración de sistemas complejos y la creación de soluciones innovadoras para diversas empresas. combinando habilidades técnicas con una actitud proactiva y una pasión por el aprendizaje continuo.</p>
            </section>
            </div>
        <div className='flex items-center justify-center'>
            <Image className='image-border w-1/2 mt-10 md:w-96' src={profileImage} alt='francisco cataldo quintana' width={100} height={100}/>
        </div>
    </div>
  )
}

export default AboutSection