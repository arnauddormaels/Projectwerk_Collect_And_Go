import { useEffect, useState } from "react";
import TimingItem from "./TimingItem"; // Verander dit naar de juiste import voor TimingItem

const TimingList = (props) => {
  const[recipeId, setRecipeId]= useState(props.recipeId);     //dit kan volgens mij ook zonder useState, arnaud? 
  //const timingId = props.timingId;
  const [timingsList, setTimingsList] = useState([]);
  const[timingsListRefresher, setTimingsListRefresher] = useState(true);
  const fetchTimings = async () => {
    try {
            console.log("Recipe met timings worden opgehaald");
            const response = await fetch(`https://localhost:7226/api/timing/(${recipeId})`); //returned object

            if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();     
      setTimingsList(data);
      console.log("Recipes opgehaald");

      
    } catch (error) {
      console.error("Er ging iets mis met het ophalen van api/Timings", error);
    }
  };

  useEffect(() => {

    fetchTimings(); 

  },[timingsListRefresher]);


  return (
    <div>
      {timingsList.map((timing) => (
        // De key prop zou nu moeten overeenkomen met een uniek veld uit je timing object
        <TimingItem key={timing.timingId} recipeId={recipeId} timing={timing} setTimingsListRefresher= {setTimingsListRefresher}/>
      ))}
    </div>
  );
};

export default TimingList;
