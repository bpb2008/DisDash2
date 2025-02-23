import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#158fd4] text-white py-4 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} DisDash. All rights reserved.
        </p>

        <div className="flex space-x-4 mt-2 md:mt-0">
          <a href="/about" className="hover:underline">
            About Us
          </a>
          <a href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:underline">
            Terms of Service
          </a>
          <a href="/contact" className="hover:underline">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
