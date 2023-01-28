import { useState, useEffect } from "react";
import { getFish, deleteFish } from "../services/fish.js";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function FishDetail() {
  const [fish, setFish] = useState({});

  let { id } = useParams();
  let navigate = useNavigate();

  async function fetchFish() {
    let oneFish = await getFish(id);
    setFish(oneFish);
  }
  
  useEffect(() => {
    fetchFish();
  }, []);
  
  


  async function handleDelete() {
    await deleteFish(id);
    navigate("/fishes", { replace: true });
  }

  return (
    <div>
      <h2>{fish.Population}</h2>
      <p>{fish["Species Name"]}</p>
      <p>{fish["Scientific Name"]}</p>
      <p>{fish.Location}</p>
      <p>{fish.Taste}</p>
      <p>{fish.Texture}</p>
      <div>
        <Link to={`/fishes/${fish._id}/edit`}>
          <button>Edit Fish</button>
        </Link>
        <button onClick={handleDelete}>Destroy Dat Fish!</button>
      </div>
    </div>
  );
}
