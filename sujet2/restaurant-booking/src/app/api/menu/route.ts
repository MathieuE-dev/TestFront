import { menu } from '../../data/data';

export async function GET() {
    return new Response(JSON.stringify(menu), {
        status : 200,
        headers : { 'Content-Type':'application/json'},
    });
    
}