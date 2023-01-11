import PetInfo from "../PetInfo/PetInfo";
import Reactions from "../Reactions/Reactions";

const Post = ({
  title,
  description,
  image,
  profilePicture,
  petName,
  country,
  city,
}) => {
  return (
    <div className="mx-4 my-2 w-[500px] rounded-xl border">
      <PetInfo
        profilePicture={profilePicture}
        petName={petName}
        country={country}
        city={city}
      />
      <div className="border bg-white">
        <div className="p-1 font-body text-primary_700">
          <h1 className="font-bold">{title}</h1>
          <p>{description}</p>
        </div>

        <img src={image} alt="" width="500px" height="500px" />
      </div>
      <Reactions />
    </div>
  );
};

export default Post;
