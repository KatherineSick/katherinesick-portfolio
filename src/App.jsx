import { useEffect } from "react";
import { useIsMobile } from './hooks/isMobile';
import DesktopLayout from './DesktopLayout.jsx';
import MobileLayout from './MobileLayout.jsx';
import { initGA, trackPage } from "./analytics";

export default function App() {
  const isMobile = useIsMobile(900);

  useEffect(() => {
    trackPage(window.location.pathname);
  }, []);

  return (
    <>
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
    </>
  );
}
