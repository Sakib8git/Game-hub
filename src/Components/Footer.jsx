import logo from "../assets/gamepad.png";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 text-2xl font-bold text-white mb-3">
            <span>Ga</span>
            <img src={logo} alt="logo" className="w-8 h-8" />
            <span>mehub</span>
          </div>
          <p className="text-sm max-w-xs">
            Providing reliable gaming content and services since 2024.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-purple-400 transition">Home</a></li>
            <li><a href="/games" className="hover:text-purple-400 transition">All Games</a></li>
            <li><a href="/profile" className="hover:text-purple-400 transition">Profile</a></li>
            <li><a href="/login" className="hover:text-purple-400 transition">Login</a></li>
          </ul>
        </div>

        {/* Social */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              className="hover:text-purple-400 transition">Twitter</a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
              className="hover:text-purple-400 transition">YouTube</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              className="hover:text-purple-400 transition">Facebook</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Gamehub. All rights reserved.
      </div>
    </footer>
  );
}