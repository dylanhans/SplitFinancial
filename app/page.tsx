// app/page.tsx (or app/page.js)
import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect('/home');
  return null; // This component does not need to render anything
}