import React, {useEffect, useState} from "react";
import PlantCard from "./PlantCard";

function PlantList({plantDisplayList, setPlantDisplayList}) {

  
  return (
    <ul className="cards">{plantDisplayList.map((plant) => {
      return (
        <PlantCard 
          key={plant.id} 
          plant={plant}
          plantDisplayList={plantDisplayList} 
          setPlantDisplayList={setPlantDisplayList}
        />
      )
    })}</ul>
  );
}

export default PlantList;
