import { logo } from "../assets";

export const Navbar = () => {
  return (
    <header className="w-full h-14 flex justify-between items-center mx-auto px-4 md:px-12 lg:px-24 border-b border-gray-200">
      {/* Logo */}
      <div className="flex items-center gap-2 font-semibold">
        <img src={logo} alt="LOGO" />
        <h3>SIMS PPOB</h3>
      </div>

      {/* Menu */}
      <ul className="flex items-center gap-4 font-medium">
        <li>Top Up</li>
        <li>Transaction</li>
        <li>Akun</li>
      </ul>
    </header>
  );
};
