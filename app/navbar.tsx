"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, FileText, Menu, X } from "lucide-react";
import Link from "next/link";
import CopyableText from "@/components/CopyableText";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="absolute top-0 left-0 right-0 bg-background z-50">
      <div className="text-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Hamburger Button for mobile */}
          <button className="md:hidden flex items-center" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <CopyableText textToCopy="thienantranbusiness@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              thienantranbusiness@gmail.com
            </CopyableText>
            <Link
              href="mailto:thienantranbusiness@gmail.com"
              className="flex items-center transition-colors"
            ></Link>
            <Link
              href="/Thienan_Tran_resume.pdf"
              className="flex items-center transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="w-5 h-5 mr-2" />
              Resume
            </Link>
          </div>

          <div className="hidden md:flex space-x-4">
            <Link
              href="https://www.linkedin.com/in/thienan-tran-35176620b/"
              className="flex items-center transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Link>
            <Link
              href="https://github.com/thienantran010"
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Link>
          </div>
        </div>

        {/* Mobile Menu (Hamburger content) */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 text-white flex flex-col space-y-4 mt-4 p-4 rounded-md shadow-lg">
            <div className="flex flex-col space-y-4">
              <CopyableText textToCopy="thienantranbusiness@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                thienantranbusiness@gmail.com
              </CopyableText>
              <Link
                href="/Thienan_Tran_resume.pdf"
                className="flex items-center transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="w-5 h-5 mr-2" />
                Resume
              </Link>
            </div>

            <div className="flex flex-col space-y-4">
              <Link
                href="https://www.linkedin.com/in/thienan-tran-35176620b/"
                className="flex items-center transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Link>
              <Link
                href="https://github.com/thienantran010"
                className="flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
