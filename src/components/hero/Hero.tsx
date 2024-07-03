import Spline from '@splinetool/react-spline/next';
import Link from 'next/link';
import './styles.css';
const Hero = () => {
  return (
   <div className='hero-container'>
   <div className="hero-intro">
   <h1 className=' text-white'>
   FULL STACK DEVELOPER
   </h1>
   <Link className='yellow-button text-white' href="/">Home</Link>
   </div>
    <main className="render-animation">
      <Spline
        scene="https://prod.spline.design/4A2QC8nYuxqs3oD4/scene.splinecode" 
      />
    </main>
   </div>
)
}

export default Hero;


