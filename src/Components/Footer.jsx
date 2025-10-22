import logo from "../assets/gamepad.png";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 text-neutral-content p-10">
      {/* Logo + Info */}
      <aside className="flex flex-col items-center text-center gap-3">
        <div className="flex items-center gap-2 text-2xl font-bold text-white">
          <span>Ga</span>
          <img src={logo} alt="logo" className="w-8 h-8" />
          <span>mehub</span>
        </div>
        <p className="text-gray-300 text-sm max-w-xs">
          Providing reliable gaming content and services since 2024.
        </p>
      </aside>

      {/* Social Links */}
      <nav>
        <h6 className="footer-title text-white">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="24"
              viewBox="0 0 24 24"
              className="fill-current text-gray-300 hover:text-purple-400 transition"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828..."></path>
            </svg>
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="24"
              viewBox="0 0 24 24"
              className="fill-current text-gray-300 hover:text-purple-400 transition"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631..."></path>
            </svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="24"
              viewBox="0 0 24 24"
              className="fill-current text-gray-300 hover:text-purple-400 transition"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642..."></path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
}