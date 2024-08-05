import thumbLandingPage from "../assets/img/thumblandingpage.gif";
import thumbLoginVue from "../assets/img/thumbloginvue.gif";
import thumbSlicing from "../assets/img/thumbslicing.gif";
import thumbTable from "../assets/img/thumbtableresponsive.gif";
import htmlLogo from "../assets/img/htmllogo.webp";
import cssLogo from "../assets/img/csslogo.webp";
import jsLogo from "../assets/img/jslogo.webp";
import vueLogo from "../assets/img/vuelogo.webp";
import tailwindLogo from "../assets/img/tailwindlogo.webp";
import axiosLogo from "../assets/img/axioslogo.webp";

const sizeImage: string =
  "max-w-8 transition block hover:shadow-xl hover:border-2 hover:border-green-200 rounded-full";

const ProjectSection: React.FC = () => {
  return (
    <section
      className="container flex items-center mx-auto px-4 min-h-screen"
      id="portfolio"
    >
      <div className="flex flex-col">
        <h1 className="text-xl font-bold underline">Project</h1>
        <div className="grid justify-center sm:justify-start sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          <div className="flex max-w-[350px] sm:w-full flex-col gap-2 p-8 rounded-lg hover:border-amber-400/80 border border-amber-200/80 shadow-lg">
            <img
              src={thumbLandingPage}
              alt="landingpage"
              className="overflow-hidden block mb-2"
            />
            <div className="border-t border-t-slate-200">
              <a
                href="https://task-landing-page-html.vercel.app/"
                className="block mt-2 text-green-900 font-medium"
              >
                Landing Page Responsif Menggunakan HTML dan SCSS
              </a>
              <div className="flex gap-2 mt-4">
                <img src={htmlLogo} alt="html" className={sizeImage} />
                <img src={cssLogo} alt="css" className={sizeImage} />
              </div>
            </div>
          </div>
          <div className="flex flex-col max-w-[350px] sm:w-full p-8 gap-2 rounded-lg border hover:border-amber-400/80 border-amber-200/80 shadow-lg">
            <img
              src={thumbLoginVue}
              alt="login"
              className="overflow-hidden block mb-2"
            />
            <div className="border-t border-t-slate-200">
              <a
                href="https://muhamad-taufik-task-login-vue-axios.vercel.app/"
                className="block mt-2 text-green-900 font-medium"
              >
                Pengembangan Fitur Login dengan Vue.js dan Axios
              </a>
              <div className="flex gap-2 mt-4">
                <img src={cssLogo} alt="css" className={sizeImage} />
                <img src={vueLogo} alt="vue" className={sizeImage} />
                <img src={axiosLogo} alt="axios" className={sizeImage} />
              </div>
            </div>
          </div>
          <div className="flex flex-col max-w-[350px] sm:w-full p-8 gap-2 rounded-lg border hover:border-amber-400/80 border-amber-200/80 shadow-lg">
            <img
              src={thumbSlicing}
              alt="slicing"
              className="overflow-hidden block mb-2"
            />
            <div className="border-t border-t-slate-200">
              <a
                href="https://rental-mobil-lepas-kunci.vercel.app/"
                className="block mt-2 text-green-900 font-medium"
              >
                Situs Web Promosi untuk Layanan Sewa Mobil
              </a>
              <div className="flex gap-2 mt-4">
                <img src={htmlLogo} alt="html" className={sizeImage} />
                <img
                  src={tailwindLogo}
                  alt="tailwindcss"
                  className={sizeImage}
                />
                <img src={jsLogo} alt="js" className={sizeImage} />
              </div>
            </div>
          </div>
          <div className="flex flex-col max-w-[350px] sm:w-full p-8 gap-2 rounded-lg border hover:border-amber-400/80 border-amber-200/80 shadow-lg">
            <img
              src={thumbTable}
              alt="table"
              className="overflow-hidden block mb-2"
            />
            <div className="border-t border-t-slate-200">
              <a
                href="https://vuex-table-fork.vercel.app/"
                className="block mt-2 text-green-900 font-medium"
              >
                Implementasi Tabel Dinamis dengan Vue.js
              </a>
              <div className="flex gap-2 mt-4">
                <img src={cssLogo} alt="css" className={sizeImage} />
                <img src={vueLogo} alt="vue" className={sizeImage} />
                <img
                  src={tailwindLogo}
                  alt="tailwindcss"
                  className={sizeImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
