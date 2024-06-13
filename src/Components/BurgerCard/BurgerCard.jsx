import PropTypes from "prop-types";
import { Button } from "../Buttons/Button";

export const BurgerCard = ({ background, button, mainText, reverse }) => {
  return (
    <div
      className={`h-screen ${background} ${mainText} flex justify-between items-center px-28 gap-14`}
    >
      {!reverse && (
        <>
          <img
            src="./images/burgar.png"
            alt="Burger"
            className="rounded-[50%]"
          />
          <div className="text-center">
            <h1 className="text-6xl font-bold leading-tight">Beast Burger</h1>
            <p className="text-1xl text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem odit rerum, reiciendis magnam placeat ab eos recusandae
              deleniti autem. Ut, omnis molestias? Dolore eveniet illo alias
              libero doloremque, a nobis illum iure exercitationem consequuntur
              sunt fugit tempora. Voluptas id repudiandae illum dolores fugit.
              Fuga consectetur ullam sunt amet, eius ut!
            </p>
            <Button text={"Order Now"} color={button} />
          </div>
        </>
      )}
      {reverse && (
        <>
          <div className="text-center">
            <h1 className="text-6xl font-bold leading-tight">Beast Burger</h1>
            <p className="text-1xl text-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem odit rerum, reiciendis magnam placeat ab eos recusandae
              deleniti autem. Ut, omnis molestias? Dolore eveniet illo alias
              libero doloremque, a nobis illum iure exercitationem consequuntur
              sunt fugit tempora. Voluptas id repudiandae illum dolores fugit.
              Fuga consectetur ullam sunt amet, eius ut!
            </p>
            <Button text={"Order Now"} color={button} />
          </div>
          <img
            src="./images/burgar.png"
            alt="Burger"
            className="rounded-[50%]"
          />
        </>
      )}
    </div>
  );
};

BurgerCard.propTypes = {
  background: PropTypes.string,
  button: PropTypes.string,
  mainText: PropTypes.string,
  reverse: PropTypes.bool,
};
