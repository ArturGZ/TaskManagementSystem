'use client'
import Home from "./home/page";
import { useSession } from 'next-auth/react';

export default function App() {
  const { status, data: session } = useSession();

	{console.log('State of session is', status)};

  try {
    console.info('User:', session?.user.name, 'Expires session:', session.expires);
  } catch (e){
    console.info('There is no active session', e.name);
  }

  return (
    <Home />
  );
}