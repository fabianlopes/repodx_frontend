import React, { useState, useEffect } from 'react';

function FilterView() {
    const [filters, setFilters] = useState([]);
  
    const handleAddFilter = () => {
      const newFilters = [...filters, { name: '', value: '' }];
      setFilters(newFilters);
    };
  
    const handleRemoveFilter = (index) => {
      const newFilters = [...filters];
      newFilters.splice(index, 1);
      setFilters(newFilters);
    };
  
    const handleFilterChange = (index, field, value) => {
      const newFilters = [...filters];
      newFilters[index][field] = value;
      setFilters(newFilters);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Do something with the filters
      console.log(filters);
    };
  
    return (
      <div>
        <h1>Filter View</h1>
        <form onSubmit={handleSubmit}>
          {filters.map((filter, index) => (
            <div key={index}>
              <input
                type="text"
                placeholder="Name"
                value={filter.name}
                onChange={(e) => handleFilterChange(index, 'name', e.target.value)}
              />
              <input
                type="text"
                placeholder="Value"
                value={filter.value}
                onChange={(e) => handleFilterChange(index, 'value', e.target.value)}
              />
              <button type="button" onClick={() => handleRemoveFilter(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddFilter}>
            Add Filter
          </button>
          <button type="submit">Apply Filters</button>
        </form>
      </div>
    );
  }
  
  export default FilterView;