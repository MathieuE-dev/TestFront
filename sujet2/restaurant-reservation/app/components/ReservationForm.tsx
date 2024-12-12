"use client";

import { useState } from 'react';
import Head from 'next/head';

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 1,
    message: '',
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    date: false,
    time: false,
    guests: false,
  });
  const [confirmation, setConfirmation] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {
      name: !formData.name,
      email: !formData.email || !formData.email.includes('@'),
      date: !formData.date,
      time: !formData.time,
      guests: formData.guests < 1 || formData.guests > 10,
    };
    setErrors(newErrors);
    return !Object.values(newErrors).includes(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setConfirmation(
        `Merci pour votre réservation, ${formData.name}. Nous vous attendons le ${formData.date} à ${formData.time}.`
      );
      setFormData({ name: '', email: '', date: '', time: '', guests: 1, message: '' });
    }
  };

  return (
    <>
      <Head>
        <title>Réserver - Restaurant de la MAMA </title>
      </Head>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center">
        <div className="w-full max-w-4xl p-6">
          <h1 className="text-3xl font-bold text-center mb-6">Réservez une table au restaurant de la MAMA</h1>
          <div className="mb-6">
            <img
              src="/restaurant.jpg"
              alt="Restaurant"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <p className="mt-4 text-gray-700">
              Découvrez une cuisine exceptionnelle dans un cadre chaleureux et convivial. Notre restaurant vous
              propose des plats soigneusement préparés avec des ingrédients frais et locaux.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg space-y-6">
            <div>
              <label className="block font-medium text-gray-700">Nom</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.name && <p className="text-red-500 text-sm">Veuillez entrer un nom.</p>}
            </div>

            <div>
              <label className="block font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm">Veuillez entrer un email valide.</p>}
            </div>

            <div>
              <label className="block font-medium text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 ${
                  errors.date ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.date && <p className="text-red-500 text-sm">Veuillez sélectionner une date.</p>}
            </div>

            <div>
              <label className="block font-medium text-gray-700">Heure</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 ${
                  errors.time ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.time && <p className="text-red-500 text-sm">Veuillez sélectionner une heure.</p>}
            </div>

            <div>
              <label className="block font-medium text-gray-700">Nombre de personnes</label>
              <input
                type="number"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                min={1}
                max={10}
                className={`w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500 ${
                  errors.guests ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.guests && <p className="text-red-500 text-sm">Veuillez sélectionner entre 1 et 10 personnes.</p>}
            </div>

            <div>
              <label className="block font-medium text-gray-700">Message (optionnel)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600"
            >
              Réserver
            </button>
          </form>
          {confirmation && (
            <div className="mt-6 p-4 bg-green-100 text-green-800 rounded shadow">
              {confirmation}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
