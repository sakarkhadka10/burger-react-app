import { FaceCard } from "./FaceCard";

export const Chef = () => {
  return (
    <>
      <div className="bg-white h-screen text-red-600 flex flex-col justify-center items-center px-28">
        <h1 className="text-6xl font-bold leading-tight">Our Chef</h1>
        <p className="text-2xl text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
          accusamus rem ut suscipit neque quis nam inventore vel tempora quam?
          quis nam inventore vel tempora quam? quis nam inventore vel tempora
          quam?
        </p>
        <FaceCard />
      </div>
    </>
  );
};
