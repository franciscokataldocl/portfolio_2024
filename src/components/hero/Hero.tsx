import Spline from '@splinetool/react-spline/next';
import Link from 'next/link';
import './styles.css';
const Hero = () => {
  return (
   <div className='hero-container'>
   <div className="hero-intro w-full text-center md:text-left ml-0 md:ml-36 md:max-w-xl">
   <h1 className=' text-white font-extrabold mb-10 text-5xl md:text-8xl lg:text-9xl '>
   FULL STACK DEVELOPER
   </h1>
   {/* md:text-8xl sm:text-8xl font-extrabold leading-none mb-10 */}
   <Link className='yellow-button text-white' href="/">Home</Link>
   </div>
    <main className="render-animation absolute ">
      <Spline
        scene="https://prod.spline.design/4A2QC8nYuxqs3oD4/scene.splinecode" 
      />
    </main>
   </div>
)
}

export default Hero;


