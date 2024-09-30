import Navbar from "../components/Navbar";

function Home() {
  return (
    <div className="relative flex justify-center items-center w-screen h-screen bg-cover bg-center text-white">
      <img
        src="https://preview.redd.it/r44d0f4o4xj91.jpg?width=640&crop=smart&auto=webp&s=5364ccf5875674f6c545cd0c3494f06e7cfbbc67"
        alt="The Starry Night"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="z-50 flex flex-col justify-center items-center text-center gap-4 p-4">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold">
          The Starry Night
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl max-w-[40ch]">
          One of Vincent van Gogh's most famous works, depicting a swirling
          night sky.
        </p>
      </div>

      <Navbar />
    </div>
  );
}

export default Home;
