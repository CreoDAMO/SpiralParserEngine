import { redirect } from 'next/navigation'

export default function HomePage() {
  // Redirect to the SpiralScript IDE as the main entry point
  redirect('/spiral-ide')
}