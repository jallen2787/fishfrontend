import Fish from "../components/Fish.jsx";
import { useEffect, useState } from "react";
import { getFishes } from "../services/fish.js";

export default function Fishes() {
  const [fishes, setFishes] = useState([]);

  useEffect(() => {
    fetchFishes();
  }, []);

  async function fetchFishes() {
    const allFishes = await getFishes();
    setFishes(allFishes);
  }

  return (
    <div>
      <h1>All Fishes</h1>
      {fishes.map((fishData) => (
        <Fish fish={fishData} key={fishData._id} />
      ))}
    </div>
  );
}
