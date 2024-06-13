import PropTypes from "prop-types";

export const Button = ({ color = "bg-transparent", text }) => {
  return (
    <button
      className={`mt-6 px-[40px] py-[5px] text-lg ${color} text-red-500 font-bold rounded-[30px] border-2 border-white`}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  color: PropTypes.string, // Define color prop as a string
  text: PropTypes.string.isRequired, // Define text prop as a required string
};
