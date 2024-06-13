export const RoundCard = () => {
  return (
    <>
      <div className="flex gap-32">
        <Card title={"7K"} subTitle={"Customer"} />
        <Card title={"109"} subTitle={"Outlets"} />
        <Card title={"35"} subTitle={"Country"} />
      </div>
    </>
  );
};

function Card({ title, subTitle }) {
  return (
    <>
      <div className="border-4 mt-11 flex flex-col justify-center items-center rounded-[50%] h-48 w-48 text-center text-wrap ">
        <h2 className="text-5xl font-bold">{title}</h2>
        <h3 className="text-4xl font-bold text-center">{subTitle}</h3>
      </div>
    </>
  );
}
