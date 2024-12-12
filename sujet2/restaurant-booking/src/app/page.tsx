import About from './section/About';
import Booking from './section/Booking';
import Hero from './section/Hero'
import Menu from './section/Menu';
import Gallery from './section/Gallery';

export default function Home() {
  return (
    <>
    <Hero />
    <main id ="main">
      < About />
      <Menu />
      <Booking/>
      <Gallery />

    </main>
    </>
  );
}
