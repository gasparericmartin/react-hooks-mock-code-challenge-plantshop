import React, {useState} from "react";

function Search({plantDisplayList, setPlantDisplayList, plantList, setPlantList}) {
  const [searchValue, setSearchValue] = useState('')

  function handleSearch(e) {
    setPlantDisplayList(() => plantList.filter((plant) => {
      if(plant.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        return true
      }
        
    }))
  }
  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
