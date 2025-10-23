import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { FaHome } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdContactPage } from "react-icons/md";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaRegFileAlt } from "react-icons/fa";
import { FaUsb } from "react-icons/fa";
import { VscRepo } from "react-icons/vsc";
import { motion } from "framer-motion";
import logoImage from "@/assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [pathName, setPathName] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Path = (props: any) => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="white"
      strokeLinecap="round"
      {...props}
    />
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (location) {
      const path = location.pathname.slice(
        location.pathname.lastIndexOf("/") + 1,
        location.pathname.length,
      );
      setPathName(path);
    }
  }, [location]);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex flex-row items-center justify-between border-b border-white/10 px-4 py-4 md:px-20">
      <Link to={"/"} onClick={() => setIsMenuOpen(false)}>
        <img src={logoImage} alt="Logo" className="w-12" />
      </Link>
      {/* Mobile view */}
      <button
        ref={buttonRef}
        className="flex h-12 w-12 items-center justify-center p-2 text-white md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg width="23" height="23" viewBox="0 0 23 23">
          <Path
            variants={{
              closed: { d: "M 2 2.5 L 20 2.5" },
              open: { d: "M 3 16.5 L 17 2.5" },
            }}
            animate={isMenuOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
          <Path
            d="M 2 9.423 L 20 9.423"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            animate={isMenuOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
          <Path
            variants={{
              closed: { d: "M 2 16.346 L 20 16.346" },
              open: { d: "M 3 2.5 L 17 16.346" },
            }}
            animate={isMenuOpen ? "open" : "closed"}
            transition={{ duration: 0.3 }}
          />
        </svg>
      </button>

      <div
        ref={menuRef}
        className={`${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-[72px] right-0 h-auto w-full bg-gray-900/95 backdrop-blur-sm transition-transform duration-300 ease-in-out md:hidden`}
      >
        <nav className="flex flex-col items-center gap-4 p-4">
          <Link
            to="/"
            className={`flex items-center gap-2 rounded-lg p-2 ${
              pathName === "" ? "text-blue-500" : "text-white"
            } hover:bg-blue-500/20}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <FaHome className="text-sm" />
            <span>Home</span>
          </Link>
          <Link
            to="/about"
            className={`flex items-center gap-2 rounded-lg p-2 ${
              pathName === "about" ? "text-blue-500" : "text-white"
            } hover:bg-blue-500/20}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <MdContactPage className="text-sm" />
            <span>About</span>
          </Link>
          <Link
            to="/projects"
            className={`flex items-center gap-2 rounded-lg p-2 ${
              pathName === "projects" ? "text-blue-500" : "text-white"
            } hover:bg-blue-500/20}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <AiOutlineFundProjectionScreen className="text-sm" />
            <span>Projects</span>
          </Link>
          <Link
            to="/resume"
            className={`flex items-center gap-2 rounded-lg p-2 ${
              pathName === "resume" ? "text-blue-500" : "text-white"
            } hover:bg-blue-500/20}`}
            onClick={() => setIsMenuOpen(false)}
          >
            <FaRegFileAlt className="text-sm" />
            <span>Resume</span>
          </Link>
          <a
            href="https://github.com/alelabas/Portfolio"
            className={`flex items-center gap-2 rounded-lg p-2 ${
              pathName === "github" ? "text-blue-500" : "text-white"
            } hover:bg-blue-500/20}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="rounded-2xl bg-blue-500/20 px-4 py-2 transition-all duration-50 ease-in-out hover:bg-blue-500/40">
              <span className="flex items-center gap-2">
                <FaUsb className="text-white" />
                <VscRepo className="text-white" />
              </span>
            </span>
          </a>
        </nav>
      </div>

      {/* Desktop view */}

      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="flex gap-20">
          <NavigationMenuItem>
            <NavigationMenuLink
              className={`text-2xl font-bold ${
                pathName === "" ? "text-blue-500" : "text-white"
              } border-blue-500 pb-1 transition-all duration-50 ease-in-out hover:border-b-3 hover:bg-transparent hover:text-blue-500`}
            >
              <Link to={"/"}>
                <span className="flex items-center gap-2">
                  <FaHome className="text-sm" />
                  <h2>Home</h2>
                </span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={`text-2xl font-bold ${
                pathName === "about" ? "text-blue-500" : "text-white"
              } border-blue-500 pb-1 transition-all duration-50 ease-in-out hover:border-b-3 hover:bg-transparent hover:text-blue-500`}
            >
              <Link to={"/about"}>
                <span className="flex items-center gap-2">
                  <MdContactPage className="text-sm" />
                  <h2>About</h2>
                </span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={`text-2xl font-bold ${
                pathName === "projects" ? "text-blue-500" : "text-white"
              } border-blue-500 pb-1 transition-all duration-50 ease-in-out hover:border-b-3 hover:bg-transparent hover:text-blue-500`}
            >
              <Link to={"/projects"}>
                <span className="flex items-center gap-2">
                  <AiOutlineFundProjectionScreen className="text-sm" />
                  <h2>Projects</h2>
                </span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={`text-2xl font-bold ${
                pathName === "resume" ? "text-blue-500" : "text-white"
              } border-blue-500 pb-1 transition-all duration-50 ease-in-out hover:border-b-3 hover:bg-transparent hover:text-blue-500`}
            >
              <Link to={"/resume"}>
                <span className="flex items-center gap-2">
                  <FaRegFileAlt className="text-sm" />
                  <h2>Resume</h2>
                </span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              href="https://github.com/alelabas/Portfolio"
              className="text-2xl font-bold text-white hover:bg-transparent"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="rounded-2xl bg-blue-500/20 px-4 py-2 transition-all duration-50 ease-in-out hover:bg-blue-500/40">
                <span className="flex items-center gap-2">
                  <FaUsb className="text-white" />
                  <VscRepo className="text-white" />
                </span>
              </span>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <style>{`
			header {
				background: transparent;
				animation: header-blur-scroll 0.3s linear both;
				animation-timeline: scroll();
				animation-range: 0 250px;
				border-bottom: 1px solid transparent;
				}

			@keyframes header-blur-scroll {
				0% {
					backdrop-filter: blur(0px);
					background: transparent;
				}
				100% {
					backdrop-filter: blur(10px);
					background: rgba(0, 0, 0, 0.1);
					padding-bottom: 8px;
				border-bottom-color: black;
				}
			}

			@media (max-width: 768px) {
				header {
					background-color: #101828;
					animation: none;
					border-bottom: 1px solid rgba(255, 255, 255, 0.1);
				}
			}
			}`}</style>
    </header>
  );
};

export default Navbar;
