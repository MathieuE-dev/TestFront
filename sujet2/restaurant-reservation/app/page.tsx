import ReservationForm from './components/ReservationForm';
import HeroSection from './components/HeroSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <HeroSection />
      <main className="container mx-auto px-4 py-8">
        <ReservationForm />
      </main>
    </div>
  );
}