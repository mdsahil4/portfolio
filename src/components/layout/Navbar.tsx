import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { profile, menu, close } from "../../assets";
import { config } from "../../constants/config";

const Navbar = () => {
  const [active, setActive] = useState<string | null>();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    const navbarHighlighter = () => {
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");

        // @ts-ignore
        const sectionHeight = current.offsetHeight;

        const sectionTop =
          current.getBoundingClientRect().top - sectionHeight * 0.2;

        if (sectionTop < 0 && sectionTop + sectionHeight > 0) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", navbarHighlighter);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", navbarHighlighter);
    };
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } fixed top-0 z-20 flex w-full items-center py-5 transition-all duration-300 ${
        scrolled
  ? "bg-[#050816] shadow-[0_0_25px_rgba(145,94,255,0.4)]"
  : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img
  src={profile}
  alt="logo"
  className="h-14 w-14 rounded-full border-2 border-[#915EFF] object-cover object-[center_10%]"
/>

          <p className="flex cursor-pointer text-[20px] font-bold text-white">
            <span className="text-[#915EFF] drop-shadow-[0_0_15px_#915EFF]">
              {config.html.fullName}
            </span>
          </p>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`cursor-pointer text-[18px] font-medium transition duration-300 hover:text-white ${
                active === nav.id
                  ? "text-white"
                  : "text-secondary"
              }`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[160px] rounded-2xl border border-[#915EFF]/30 p-6 shadow-[0_0_25px_rgba(145,94,255,0.4)] backdrop-blur-md`}
          >
            <ul className="flex flex-1 list-none flex-col items-start justify-end gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`cursor-pointer text-[16px] font-medium ${
                    active === nav.id
                      ? "text-white"
                      : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;