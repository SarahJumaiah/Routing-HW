import Navbar from "../components/Navbar";

function Wheatfield() {
  return (
    <div className="relative flex justify-center items-center w-screen h-screen bg-cover bg-center text-white">
      <img
        src="https://w0.peakpx.com/wallpaper/504/783/HD-wallpaper-wheatfield-with-crows-van-gogh-wheatfield-brown-crows-yellow-sky-gold-green-painting-van-gogh-cornfield-blue.jpg"
        alt="Wheatfield"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="z-50 flex flex-col justify-center items-center text-center gap-4 p-4">
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold">
          Wheatfield with Crows
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl max-w-[40ch]">
          A dramatic scene with a dark sky and a wheatfield, thought to be one
          of Van Gogh's last works.
        </p>
      </div>

      <Navbar />
    </div>
  );
}

export default Wheatfield;
