import React, { useState, useEffect } from 'react';

function DynamicView() {
  const [selectedOption, setSelectedOption] = useState('all');
  const [data, setData] = useState([
    { id: 1, name: 'Alice', status: 'active' },
    { id: 2, name: 'Bob', status: 'inactive' },
    { id: 3, name: 'Charlie', status: 'active' },
    { id: 4, name: 'David', status: 'inactive' },
  ]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const filteredData = selectedOption === 'all' ? data : data.filter((item) => item.status === selectedOption);

  return (
    <div>
      <h1>Dynamic View</h1>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default DynamicView;
