'use client';
import React, { useState } from 'react';
import '../design/booking.css';

export default function Booking() {
  const [text, setText] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    people: '',
    message: '',
    validate: '',
  });

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };

  const handleSubmitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setText({ ...text, validate: 'loading' });

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(text),
      });

      const result = await res.json();
      setText({ ...text, validate: result.validate });
    } catch (error) {
      console.error('Erreur de soumission:', error);
      setText({ ...text, validate: 'error' });
    }
  };

  return (
    <section id = "book-a-table" className='book-a-table'>
      <div className='conatainer' data-aos="fade-up">
      <h1>Booking</h1>

      <form onSubmit={handleSubmitBooking} className="booking-form">
      <div className="row">
        <div className="col-lg-4 col-md-6 form-group mb-3">
          <input
            type="text"
            name="name"
            value={text.name}
            className="form-control"
            placeholder="Your Name"
            onChange={handleTextChange}
          />
        </div>

        <div className="col-lg-4 col-md-6 form-group mb-3">
          <input
            type="email"
            name="email"
            value={text.email}
            className="form-control"
            placeholder="Your Email"
            onChange={handleTextChange}
          />
        </div>

        <div className="col-lg-4 col-md-6 form-group mb-3">
          <input
            type="text"
            name="phone"
            value={text.phone}
            className="form-control"
            placeholder="Your Phone"
            onChange={handleTextChange}
          />
        </div>

        <div className="col-lg-4 col-md-6 form-group mb-3">
          <input
            type="date"
            name="date"
            value={text.date}
            className="form-control"
            onChange={handleTextChange}
          />
        </div>

        <div className="col-lg-4 col-md-6 form-group mb-3">
          <input
            type="time"
            name="time"
            value={text.time}
            className="form-control"
            onChange={handleTextChange}
          />
        </div>

        <div className="col-lg-4 col-md-6 form-group mb-3">
          <input
            type="number"
            name="people"
            value={text.people}
            className="form-control"
            placeholder="Number of People"
            onChange={handleTextChange}
          />
        </div>

        <div className="col-lg-12 form-group mb-4">
          <textarea
            name="message"
            value={text.message}
            className="form-control"
            placeholder="Your Message"
            rows={5}
            onChange={handleTextChange}
          ></textarea>
        </div>

        <div className="mb-3">
          {text.validate === 'loading' && <div className="loading">Send Booking...</div>}
          {text.validate === 'incomplete' && (
            <div className="error-message">Please fill in all above information</div>
          )}
          {text.validate === 'success' && (
            <div className="sent-message">
              Thank you for your booking request. We will send you an email to confirm your reservation.
            </div>
          )}
          {text.validate === 'error' && (
            <div className="error-message">Server Error. Please try again later.</div>
          )}
        </div>

        <div className="text-center mt-4">
          <button type="submit" className="btn btn-primary">
            Book a Table
          </button>
        </div>
      </div>
    </form>




      </div>
    </section>
    
  );
}