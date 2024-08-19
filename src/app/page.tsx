// src/app/page.tsx
import dynamic from 'next/dynamic';

// Dynamically import the ChartComponent to ensure it's only rendered on the client side
const ChartComponent = dynamic(() => import('../app/components/ChartComponent'), { ssr: false });

const HomePage = () => {
  return (
    <div>
      <h1>My Charts</h1>
      <ChartComponent />
    </div>
  );
};

export default HomePage;
