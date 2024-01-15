import { useEffect, useState } from 'react';
import NavigationBar from '../TimingComponents/NavigationBar';
import Header from '../TimingComponents/Header';
import SecondHeader from '../TimingComponents/SecondHeader';
import TableHeader from '../TimingComponents/TableHeader';
import TimingList from '../TimingComponents/TimingList'; // Pas het pad aan indien nodig
import "../css/style.css";
import RecipeName from '../TimingComponents/RecipeName';
import { useParams } from 'react-router-dom';
const TimingsPage = () => {
  const params = useParams();
  const recipeId = params.id;

  return (
    <div>
        <NavigationBar />
        <Header />
        <RecipeName/>
        <SecondHeader recipeId={recipeId}/>
        <TableHeader />
        <TimingList recipeId={recipeId} /> {/* Geef het recipeId door*/}
    </div>
  );
};

export default TimingsPage;
