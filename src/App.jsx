import { Hero } from "./Components/HeroSection/Hero";
import { Chef } from "./Components/ChefSection/Chef";
import { BurgerCard } from "./Components/BurgerCard/BurgerCard";
import { PopularPackage } from "./Components/PopularPackage/PopularPackage";
import { Stastistics } from "./Components/Stastistics/Stastistics";

function App() {
  return (
    <>
      <Hero />
      <Chef />
      <BurgerCard background={"bg-red-500"} button={"text-red-500 bg-white "} />
      <BurgerCard
        background={"bg-white"}
        button={"bg-red-500 text-white"}
        mainText={"text-red-500"}
        reverse
      />
      <BurgerCard
        background={"bg-orange-500"}
        button={"bg-red-500 text-white"}
        mainText={"text-white"}
      />

      <Stastistics />

      <PopularPackage />
    </>
  );
}

export default App;
