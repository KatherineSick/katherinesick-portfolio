import Profile from './components-desk/Profile';
import Tabs from './components-desk/Tabs';
import usePageView from './hooks/trackPage';

export default function DesktopLayout() {
  usePageView("/desktop");
  return (
    <div className="layout">
      <Profile />
      <Tabs />
    </div>
  );
}