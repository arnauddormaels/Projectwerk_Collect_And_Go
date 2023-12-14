import { useEffect, useState } from "react";
import TimingItem from "./TimingItem"; // Verander dit naar de juiste import voor TimingItem

const TimingList = (props) => {
  const[recipeId, setRecipeId]= useState(props.recipeId);
  //const timingId = props.timingId;
  const [recipe, setRecipe] = useState([]);

  const fetchRecipeMetTimings = async () => {
    try {
            const response = await fetch(`https://localhost:7226/api/timing/(${recipeId})`); //returned object
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();     
      setRecipe(data);

    } catch (error) {
      console.error("Er ging iets mis met het ophalen van api/Timings", error);
    }
  };

  useEffect(() => {
    console.log("Recipe met timings worden opgehaald");
    fetchRecipeMetTimings();
  }, []);


  return (
    <div>
      {recipe.map((timing) => (
        // De key prop zou nu moeten overeenkomen met een uniek veld uit je timing object
        <TimingItem key={timing.timingId} timing={timing} />
      ))}
    </div>
  );
};

export default TimingList;
