import Image from 'next/image';

export default function RestaurantPresentation() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Découvrez notre restaurant</h2>
        <p className="text-lg mb-12 text-gray-700">
          Venez vivre une expérience culinaire unique dans un cadre chaleureux et
          convivial. Notre chef vous propose des plats savoureux préparés avec des
          ingrédients frais et de saison.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image src="/images/restaurant-interior.jpg" alt="Intérieur du restaurant" width={600} height={400} className="hover:scale-105 transition-transform duration-300" />
            <p className="mt-4 font-semibold">Ambiance chaleureuse</p>
          </div>

          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image src="/images/delicious-meal.jpg" alt="Plat délicieux" width={600} height={400} className="hover:scale-105 transition-transform duration-300" />
            <p className="mt-4 font-semibold">Cuisine raffinée</p>
          </div>

          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image src="/images/chef-preparing.jpg" alt="Chef cuisinier" width={600} height={400} className="hover:scale-105 transition-transform duration-300" />
            <p className="mt-4 font-semibold">Chef expérimenté</p>
          </div>
        </div>
      </div>
    </section>
  );
}