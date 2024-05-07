import HomeDesktopImage from '@/public/home/background-home-desktop.jpg';
import HomeMobileImage from '@/public/home/background-home-mobile.jpg';
import HomeTabletImage from '@/public/home/background-home-tablet.jpg';

const Home = () => {
  let bg: string = HomeDesktopImage;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-image-home">
      <h1>SPACE TOURISME MULTIPAGE WEBSITE</h1>
    </main>
  );
};

export default Home;
