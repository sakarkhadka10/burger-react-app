import { Button } from "../Buttons/Button";

export const PopularPackage = () => {
  return (
    <>
      <div className="bg-[#f6eedf] h-screen px-28 pt-6">
        <h1 className="text-red-500 text-6xl font-extrabold text-center">
          Popular Package
        </h1>
        <div className="flex justify-between items-center">
          <PopularCard title={"Package I"} price={"10.00$"} />
          <PopularCard title={"Package II"} price={"20.00$"} />
          <PopularCard title={"Pacakge III"} price={"30.00$"} />
        </div>
      </div>
    </>
  );
};

function PopularCard({ title, price }) {
  return (
    <>
      <div className="h-[400px] w-[300px] border-5 text-red-500 bg-white px-4 py-4 mt-16 text-center flex justify-center items-center flex-col rounded-2xl">
        <h1 className="text-4xl font-bold leading-tight pb-6">{title}</h1>
        <img
          src="./images/element2.png"
          alt="burger"
          className="h-20 w-20 flex justify-center items-center"
        />
        <span className="text-2xl font-bold leading-tight pt-6">{price}</span>
        <p className="pt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, eum!
        </p>
        <Button text="Order Now" color="bg-red-500 text-white" />
      </div>
    </>
  );
}
