export const NavBar = () => {
  const navList = [
    { id: 1, list: "Home", link: "#Home" },
    { id: 2, list: "Product", link: "#Product" },
    { id: 3, list: "Promo", link: "#Promo" },
    { id: 4, list: "About", link: "#About" },
    { id: 5, list: "Contact", link: "#Contact" },
  ];

  return (
    <div className="flex justify-between items-center px-28 py-4 relative z-10 text-white">
      <img src="./images/logo.png" alt="logo" className="h-[50px] w-[50px]" />
      <div>
        <ul className="flex gap-6 uppercase">
          {navList.map(({ id, list, link }) => (
            <li key={id} className="cursor-pointer">
              <a href={link}>{list}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
