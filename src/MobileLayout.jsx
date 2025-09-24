import ProfileMobile from './components-mobile/Profile';
import Tabs from './components-mobile/Tabs';
import './index-mob.css';

export default function MobileLayout() {
  const scrollToTabs = () => {
    const tabs = document.getElementById('tabs-section');
    if (tabs) {
      tabs.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="layout-mobile">
      <div className="mobile-box">
        <ProfileMobile />
      </div>
      <button className="scroll-arrow" onClick={scrollToTabs} aria-label="Scroll to tabs">
        ↓
      </button>
      <Tabs />
    </div>
  );
}

