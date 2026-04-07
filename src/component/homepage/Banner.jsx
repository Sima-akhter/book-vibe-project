
import { Link } from "react-router";
import bookImg from "../../assets/hero_img.jpg"

const Banner = () => {
  return (
    <div className="bg-base-200 rounded-xl px-10 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
      
      {/* Left */}
      <div className="max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-base-content leading-tight">
          Books to freshen up <br /> your bookshelf
        </h1>

        <Link to="/books">
          <button className="btn btn-success mt-6 text-white px-6">
            View The List
          </button>
        </Link>
      </div>

      {/* Right */}
      <div className="flex justify-center">
        <img
          src={bookImg}
          alt="Book"
          className="w-56 rotate-[-6deg] hover:rotate-0 transition duration-300"
        />
      </div>
    </div>
  );
};

export default Banner;