import Navbar from "../components/Navbar";

function Sunflowers() {
  return (
    <div className="relative flex justify-center items-center w-screen h-screen bg-cover bg-center text-white">
      <img
        src="https://images.newscientist.com/wp-content/uploads/2015/10/dn28402-2_800.jpg?crop=16:9,smart&width=1200&height=675&upscale=true"
        alt="Sunflowers"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="z-50 flex flex-col justify-center items-center text-center gap-4 p-4">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold">Sunflowers</h1>
        <p className="text-white text-base sm:text-lg md:text-xl max-w-[40ch]">
          A vibrant depiction of sunflowers in various stages of life, symbolizing gratitude and optimism.
        </p>
      </div>

      <Navbar />
    </div>
  );
}

export default Sunflowers;
