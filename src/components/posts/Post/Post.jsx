import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getPetById } from "../../../redux/actions/petActions";
import PetInfo from "../PetInfo/PetInfo";
import Reactions from "../Reactions/Reactions";

const Post = ({ title, description, image, petId }) => {
  // const dispatch = useDispatch();
  // const { pet } = useSelector((state) => state.pet);
  const [pet, setPet] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/pet/${petId}`)
      .then((res) => setPet(res.data));
    // dispatch(getPetById(petId));
  }, []);

  return (
    <div className="mx-4 my-2 w-[500px] rounded-xl border">
      {pet && (
        <PetInfo
          profilePicture={pet.image}
          petName={pet.name}
          gender={pet.gender}
        />
      )}
      <div className="border bg-white">
        <div className="p-1 font-body text-primary_700">
          <h1 className="font-bold">{title}</h1>
          <p>{description}</p>
        </div>

        <img src={image} alt="" className="h-[500px] w-[500px] object-cover" />
      </div>
      <Reactions />
    </div>
  );
};

export default Post;
