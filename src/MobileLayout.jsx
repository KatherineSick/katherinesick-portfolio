import ProfileMobile from './components-mobile/Profile';
// import Tabs from './components-mobile/Tabs';
import './index-mob.css';

export default function MobileLayout() {
  return (
    <div className="layout-mobile">
      <div className="mobile-box">
        <ProfileMobile />
        {/* <TabsMobile /> */}
      </div>
    </div>
  );
}

