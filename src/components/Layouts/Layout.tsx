import { Outlet } from 'react-router-dom';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen text-sm md:text-base flex flex-col items-center bg-gradient-to-r from-gray-700 to-gray-900">
      <div className="w-screen md:w-3/4 lg:1/2 flex flex-col md:m-5 gap-7">
        <Outlet />
      </div>
    </div>
  );
};
