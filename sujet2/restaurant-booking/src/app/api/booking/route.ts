import { booking } from '@/app/data/data';

export async function GET() {
  try {
    return new Response(JSON.stringify(booking), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Erreur de récupération des réservations:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch bookings' }),
      {
        headers: { 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
}

export async function POST(request: Request) {
  try {
    const newBooking = await request.json();

    if (
      !newBooking.name ||
      !newBooking.email ||
      !newBooking.phone ||
      !newBooking.date ||
      !newBooking.time ||
      !newBooking.people
    ) {
      return new Response(
        JSON.stringify({ validate: 'incomplete' }),
        {
          headers: { 'Content-Type': 'application/json' },
          status: 400,
        }
      );
    }

    const createdBooking = {
      id: booking.length + 1,
      details: newBooking,
    };

    booking.push(createdBooking);

    return new Response(JSON.stringify({ validate: 'success' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 201,
    });
  } catch (error) {
    console.error('Erreur de création de réservation:', error);
    return new Response(
      JSON.stringify({ validate: 'error', error: 'Internal Server Error' }),
      {
        headers: { 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
}