import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 flex justify-center py-4 shadow-lg mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 justify-center items-center max-w-screen-lg w-full px-4 mx-auto">
        <Link
          to="/"
          className="text-black text-center bg-white shadow-md p-4 rounded-md"
        >
          <p className="font-bold">Starry Night</p>
        </Link>
        <Link
          to="/sunflowers"
          className="text-black text-center bg-white shadow-md p-4 rounded-md"
        >
          <p className="font-bold">Sunflowers</p>
        </Link>
        <Link
          to="/wheatfield"
          className="text-black text-center bg-white shadow-md p-4 rounded-md"
        >
          <p className="font-bold">Wheatfield</p>
        </Link>
        <Link
          to="/irises"
          className="text-black text-center bg-white shadow-md p-4 rounded-md"
        >
          <p className="font-bold">Irises</p>
        </Link>
        <Link
          to="/almond-blossoms"
          className="text-black text-center bg-white shadow-md p-4 rounded-md"
        >
          <p className="font-bold">Almond Blossoms</p>
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;
