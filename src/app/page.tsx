
import AboutSection from '@/components/aboutSection/AboutSection';
import Hero from '@/components/hero/Hero';
import Menu from '@/components/menu/Menu';
import Header from '../components/header/Header';
const HomePage = () => {
  return (

  <>
  <div className="page-container">
<Header/>
<Menu/>
<Hero/>
<AboutSection/>
</div>
  </>
    
  )
}

export default HomePage;