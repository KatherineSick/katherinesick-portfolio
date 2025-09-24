import { useIsMobile } from './hooks/isMobile';
import DesktopLayout from './DesktopLayout.jsx';
import MobileLayout from './MobileLayout.jsx';

export default function App() {
  const isMobile = useIsMobile(900);

  return (
    <>
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
    </>
  );
}
