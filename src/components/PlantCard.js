import React, {useState} from "react";

function PlantCard({plant, plantDisplayList, setPlantDisplayList}) {
  const [stocked, setStocked] = useState(true)
  
  function handleClick() {
    setStocked((stocked) => !stocked)
  }

  function handleDelete(e) {
    fetch(`http://localhost:6001/plants/${plant.id}`, { 
    method: 'DELETE'
    })
    .then((response) => response.json())
    .then(setPlantDisplayList([...plantDisplayList.filter((listPlant) => {
      if (listPlant.id !== plant.id) {
        return
      }
    })]))
  }
  
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      {stocked ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
      <button onClick={handleDelete}>Delete</button>
      
    </li>
  );
}

export default PlantCard;
