import { NavBar } from "../NavBar/NavBar";
import { Button } from "../Buttons/Button";

export const Hero = () => {
  return (
    <div className="relative h-screen bg-[url('./images/hero.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      <NavBar />

      <div className="absolute inset-0 flex flex-col justify-center items-start z-10 text-white px-28 mt-11">
        <div className="text-left">
          <h1 className="text-6xl font-bold leading-tight">
            Get Cashback <br />
            up to 50%
          </h1>
          <p className="mt-4 max-w-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas qui
            reiciendis esse dolore laboriosam itaque aut optio omnis provident
            eaque.
          </p>
          <Button color={"bg-red-500 text-white"} text={"Order Now"} />
        </div>
      </div>
    </div>
  );
};
