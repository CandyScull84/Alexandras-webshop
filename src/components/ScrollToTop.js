// ScrollToTop.js
import { useEffect } from 'react';  // Importerat useEffect-hooken från React
import { useLocation } from 'react-router-dom'; // Importerat useLocation-hooken för att få aktuell URL

const ScrollToTop = () => {
  const { pathname } = useLocation(); // Hämta pathname från useLocation (del av URL:en)

  useEffect(() => {
    /*Varje gång pathname ändras (när användaren navigerar till en ny sida) rullar fönstret upp till toppen (0, 0) */
    window.scrollTo(0, 0);
  }, [pathname]); // Effektkörning vid varje förändring av pathname

  return null; // Returnerar ingenting visuellt, bara funktionell komponent
};

export default ScrollToTop;
