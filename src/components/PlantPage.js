import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantList, setPlantList] = useState([])
  const [plantDisplayList, setPlantDisplayList] = useState([])
    
  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then((response) => response.json())
    .then((data) => console.log(data))
  }, [])  

  
  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList />
    </main>
  );
}

export default PlantPage;
