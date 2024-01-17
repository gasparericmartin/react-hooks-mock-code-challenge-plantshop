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
    .then((data) => {
      setPlantList(data)
      setPlantDisplayList(data)
    })
  }, []) 

  
  return (
    <main>
      <NewPlantForm 
        plantDisplayList={plantDisplayList}
        setPlantDisplayList={setPlantDisplayList}/>
      <Search
        plantDisplayList={plantDisplayList}
        setPlantDisplayList={setPlantDisplayList}
        plantList={plantList}
        setPlantList={setPlantList} />
      <PlantList
        plantDisplayList={plantDisplayList}
        setPlantDisplayList={setPlantDisplayList} />
    </main>
  );
}

export default PlantPage;
