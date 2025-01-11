export const NavBar = () => {
  return (
    <nav className="flex justify-between p-3 w-[80%] text-xl text-white select-none">
      <div className="font-Quickless text-2xl">Fit-My-Seat</div>
      <div className="flex gap-2 font-Quickless">
        <a href="#" className=" hover:text-blue-500">
          Home
        </a>
        <a href="#" className="hover:text-blue-500">
          About
        </a>
        <a href="#" className="hover:text-blue-500">
          Services
        </a>
        <a href="#" className="hover:text-blue-500">
          Contact
        </a>
      </div>
    </nav>
  );
};
