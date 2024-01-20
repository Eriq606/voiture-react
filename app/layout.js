import './globals.css';
import "bootstrap/dist/css/bootstrap.min.css";
export const metadata = {
  title: 'Vente de voiture',
  description: 'Site d\'echange de voitures',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
