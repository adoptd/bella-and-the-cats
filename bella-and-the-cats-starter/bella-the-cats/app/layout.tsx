import './globals.css'

export const metadata = {
  title: 'Bella & The Cats | Apparel for Pet People',
  description: 'Thoughtful clothing for people who know that pets are family.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
