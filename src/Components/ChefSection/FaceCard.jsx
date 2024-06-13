import PropTypes from "prop-types";
export const FaceCard = () => {
  return (
    <>
      <div className="flex justify-evenly items-center gap-48">
        <FaceCardDesign
          profile={"man.png"}
          name={"AIDEN HUNTER"}
          jobPost={"Founder"}
        />
        <FaceCardDesign
          profile={"man1.png"}
          name={"Alice Jonson"}
          jobPost={"Co-Founder"}
        />
        <FaceCardDesign
          profile={"man3.png"}
          name={"Julia Sampson"}
          jobPost={"Co-Founder"}
        />
      </div>
    </>
  );
};

function FaceCardDesign({ name, jobPost, profile }) {
  return (
    <>
      <div className="mt-11">
        <img
          src={`./images/${profile}`}
          alt="chef"
          className="rounded-[50%] h-48"
        />
        <h1 className="text-2xl text-center font-bold">{name}</h1>
        <p className="text-[1.5rem] text-center">{jobPost}</p>
      </div>
    </>
  );
}

FaceCardDesign.propTypes = {
  name: PropTypes.string.isRequired,
  jobPost: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired,
};
