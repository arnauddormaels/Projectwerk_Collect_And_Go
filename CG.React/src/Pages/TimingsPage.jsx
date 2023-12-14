import { useEffect, useState } from 'react';
import NavigationBar from '../TimingComponents/NavigationBar';
import Header from '../TimingComponents/Header';
import SecondHeader from '../TimingComponents/SecondHeader';
import TableHeader from '../TimingComponents/TableHeader';
import TimingList from '../TimingComponents/TimingList'; // Pas het pad aan indien nodig
import "../css/style-timings.css";
import RecipeName from '../TimingComponents/RecipeName';
import { useParams } from 'react-router-dom';
const TimingsPage = () => {
  const [timings, setTimings] = useState([]);

  const params = useParams();
  const recipeId = params.id;
  useEffect(() => {
    const fetchTimings = async () => {
      try {
        const response = await fetch(`https://localhost:7226/api/Timing/(${params.id})`);
        const data = await response.json();
        setTimings(data);
      } catch (error) {
        console.error('Er ging iets mis met het ophalen van de timings', error);
      }
    };

    fetchTimings();
  }, []);

  return (
    <div>
        <NavigationBar />
        <Header />
        <RecipeName/>
        <SecondHeader />
        <TableHeader />
        <TimingList recipeId={recipeId} /> {/* Geef het recipeId door*/}
    </div>
  );
};

export default TimingsPage;
