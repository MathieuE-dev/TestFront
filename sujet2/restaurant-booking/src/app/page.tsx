import About from './section/About';
import Hero from './section/Hero'
import Menu from './section/Menu';
export default function Home() {
  return (
    <>
    <Hero />
    <main id ="main">
      < About />
      <Menu />
    </main>
    </>
  );
}
