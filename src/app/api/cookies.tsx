"use server"
import {cookies} from "next/headers"


export async function getCookie (){
  const cookieStore = await cookies();
  const cookie = cookieStore.get('emelospec_session'); // Lekéri a 'session' sütit
  return cookie ? cookie.value : null;
};