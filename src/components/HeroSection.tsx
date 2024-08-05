import imgPhoto from "../assets/img/foto.webp";
import htmlLogo from "../assets/img/htmllogo.webp";
import cssLogo from "../assets/img/csslogo.webp";
import jsLogo from "../assets/img/jslogo.webp";
import vueLogo from "../assets/img/vuelogo.webp";
import tailwindLogo from "../assets/img/tailwindlogo.webp";
import axiosLogo from "../assets/img/axioslogo.webp";

const sizeImage: string =
  "max-w-8 transition block hover:shadow-xl hover:border-2 hover:border-green-200 rounded-full";

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col gap-y-4 items-center justify-center">
      <div className="max-w-36 rounded-full mb-4 overflow-hidden bg-amber-100 border-2 border-green-900">
        <img src={imgPhoto} alt="photo" />
      </div>
      <h1 className="text-2xl font-bold">
        Muhamad Taufik
        <span className="text-slate-500 text-sm font-normal block text-center">
          [Frontend Web Developer]
        </span>
      </h1>
      <p className="leading-relaxed max-w-screen-sm lg:max-w-screen-md mx-4 sm:mx-0 text-center text-black/90">
        Pengembang web yang berpengalaman dalam layanan web statis dan situs web
        promosi. Terampil dalam memenuhi tenggat waktu, melakukan evaluasi
        checkpoint, dan berpartisipasi dalam retrospektif. Terlatih dalam
        praktik pemrograman dunia nyata.
      </p>
      <div className="flex gap-x-3">
        <img src={htmlLogo} alt="html" className={sizeImage} />
        <img src={cssLogo} alt="css" className={sizeImage} />
        <img src={jsLogo} alt="js" className={sizeImage} />
        <img src={vueLogo} alt="vue" className={sizeImage} />
        <img src={axiosLogo} alt="axios" className={sizeImage} />
        <img src={tailwindLogo} alt="tailwindcss" className={sizeImage} />
      </div>
      <div className="my-2">
        <button className="px-4 py-2 border border-lime-50 bg-green-900 text-white rounded-lg hover:border hover:border-lime-600 hover:shadow-lg hover:bg-green-700">
          <a href="#portfolio">View Project</a>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
