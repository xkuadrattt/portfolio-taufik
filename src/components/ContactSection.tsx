import linkedinLogo from "../assets/img/logolinkedin.webp";
import mailLogo from "../assets/img/maillogo.webp";
import githubLogo from "../assets/img/github-mark.svg";

const ContactSection: React.FC = () => {
  return (
    <section
      id="contact"
      className="container flex items-center mx-auto px-4 mt-16"
    >
      <div className="flex flex-col mb-16">
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-bold underline">Salam Hormat</h1>
          <span className="text-slate-500 text-sm font-normal block">
            Saya bersemangat untuk dihubungi. terima kasih
          </span>
        </div>
        <div className="flex gap-4 mt-8">
          <a href="https://www.linkedin.com/in/muhamad-taufik-68b454201">
            <img
              src={linkedinLogo}
              alt="linkedin"
              className="block max-w-12 max-h-12 border-2 border-white hover:border-amber-400 rounded-full"
            />
          </a>
          <a href="mailto:otaufik35@gmail.com">
            <img
              src={mailLogo}
              alt="mail"
              className="block max-w-12 max-h-12 border-2 border-white hover:border-amber-400 rounded-full"
            />
          </a>
          <a href="https://github.com/xkuadrattt">
            <img
              src={githubLogo}
              alt="github"
              className="block max-w-12 max-h-12 border-2 border-white hover:border-amber-400 rounded-full"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
