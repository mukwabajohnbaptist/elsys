import Layout from './Layout'
import Hero from '../components/Hero';
import Services from '../components/Services';
import Cta from '../components/Cta';
import Testimonials from '../components/Testimonials';
import Cta2 from '../components/Cta2';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Cta />
      <Testimonials />
      <Cta2/>
    </Layout>
  )
}

export default Home