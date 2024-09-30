import Navbar from "../components/Navbar";

function AlmondBlossoms() {
  return (
    <div className="relative flex justify-center items-center w-screen h-screen bg-cover bg-center text-white">
      <img
        src="https://m.media-amazon.com/images/I/51YhbymKUyL._AC_UF894,1000_QL80_.jpg"
        alt="Almond Blossoms"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="z-50 flex flex-col justify-center items-center text-center gap-4 p-4">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold">
          Almond Blossoms
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl max-w-[40ch]">
          This painting symbolizes new life and hope, created to celebrate the
          birth of Van Gogh's nephew.
        </p>
      </div>

      <Navbar />
    </div>
  );
}

export default AlmondBlossoms;
