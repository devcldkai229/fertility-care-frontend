import { useAuth } from "../contexts/AuthContext";
import Button from "./Button";

export default function Header() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="relative px-12 h-20 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between">
        {/* Logo bên trái */}
        <div className="flex items-center cursor-pointer select-none transition-transform duration-200 hover:scale-105 focus:outline-none">
          <h1 className="text-2xl font-bold font-serif leading-none">
            <span className="bg-gradient-to-r from-[#a06ad9] to-[#6a4fcf] text-transparent bg-clip-text">
              Fertility
            </span>
            <span className="bg-gradient-to-r from-[#5cc6f5] to-[#3b82f6] text-transparent bg-clip-text">
              Care
            </span>
          </h1>
        </div>

        {/* Links ở giữa */}
        <nav>
          <ul className="flex space-x-10">
            <li>
              <a
                href="/home"
                className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-purple-600 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-purple-600 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-purple-600 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-purple-600 transition-colors"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-purple-600 transition-colors"
              >
                Contact
              </a>
            </li>
            {isAuthenticated && 
            <li>
              <a
                href="/profile"
                className="px-3 py-2 text-sm font-medium text-gray-800 hover:text-purple-600 transition-colors"
              >
                Profile
              </a>
            </li>}
          </ul>
        </nav>

        {/* Button bên phải của header */}
        <div>
          <Button
            label="Đặt lịch ngay"
            variant="solid"
            color="primary"
            size="md"
            href="/order"
          />
        </div>
      </div>
    </div>
  );
}
