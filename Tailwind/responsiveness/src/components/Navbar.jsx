export default function Navbar() {
  return (
    <header className="pt-1">
      <nav className="rounded-xl m-4 flex items-center justify-between px-4 py-3 bg-emerald-500 text-white">
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold">
          Tailwind Dashboard
        </h1>


        <div className="hidden md:flex gap-6">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#" className="hover:underline">
            Profile
          </a>
          <a href="#" className="hover:underline">
            Settings
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-2xl">☰</button>
      </nav>
    </header>
  );
}
