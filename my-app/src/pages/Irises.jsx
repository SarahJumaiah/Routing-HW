import Navbar from "../components/Navbar";

function Irises() {
  return (
    <div className="relative flex justify-center items-center w-screen h-screen bg-cover bg-center text-white">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Vincent_van_Gogh_-_Irises_%281889%29.jpg/777px-Vincent_van_Gogh_-_Irises_%281889%29.jpg"
        alt="Irises"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="z-50 flex flex-col justify-center items-center text-center gap-4 p-4">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold">Irises</h1>
        <p className="text-white text-base sm:text-lg md:text-xl max-w-[40ch]">
          A beautiful painting of irises, showing the artist's fascination with
          nature and its vivid colors.
        </p>
      </div>

      <Navbar />
    </div>
  );
}

export default Irises;
