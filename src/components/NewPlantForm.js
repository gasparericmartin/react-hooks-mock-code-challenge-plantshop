import React, {useState} from "react";

function NewPlantForm({plantDisplayList, setPlantDisplayList}) {
  const [submitForm, setSubmitForm] = useState({name: '', image: '', price: ''})
  
  function handleChange(e) {
    if(e.target.name === 'name') {
      setSubmitForm({...submitForm, name: e.target.value})
    }
    if(e.target.name === 'image') {
      setSubmitForm({...submitForm, image: e.target.value})
    }
    if(e.target.name === 'price') {
      setSubmitForm({...submitForm, price: parseFloat(e.target.value)})
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:6001/plants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submitForm)
    })
    .then((response) => response.json())
    .then((newPlant) => setPlantDisplayList([...plantDisplayList, newPlant]))
  }
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" 
          onChange={handleChange}/>
        <input type="text" name="image" placeholder="Image URL" 
          onChange={handleChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" 
          onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
