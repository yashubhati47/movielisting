import React, { useState, useEffect } from 'react';
import './Design.css';
import './App.css';

function App() {
    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const [sortBy, setSortBy] = useState('');
    const [searchText, setSearchText] = useState('');
    const [showDropdown, setShowDropdown] = useState(false);
  
   
  
    useEffect(() => {
      if (sortBy === 'episode') {
        const sortedByEpisode = [...data].sort((a, b) => a.episode - b.episode);
        setSortedData(sortedByEpisode);
      } else if (sortBy === 'year') {
        const sortedByYear = [...data].sort((a, b) => a.year - b.year);
        setSortedData(sortedByYear);
      }
    }, [sortBy, data]);
  
    const handleSortBy = (option) => {
      setSortBy(option);
      setShowDropdown(false);
    };
  
    const handleSearch = (event) => {
      setSearchText(event.target.value);
    };
  
    const filteredData = sortedData.filter((item) => {
      return (
        item.episode.toLowerCase().includes(searchText.toLowerCase()) ||
        item.year.toLowerCase().includes(searchText.toLowerCase())
      );
    });
  
    return (
      <div className="App">
        <nav className="navbar">
          <div className="left-side">
            <div className="search-bar">
              <input
                type="text"
                placeholder="Search..."
                value={searchText}
                onChange={handleSearch}
              />
              <button><i className="fa fa-search"></i></button>
            </div>
            <div className="dropdown">
              <button className="dropbtn" onClick={() => setShowDropdown(!showDropdown)}>Sort By</button>
              {showDropdown && (
                <div className="dropdown-content">
                  <button onClick={() => handleSortBy('episode')}>Episode</button>
                  <button onClick={() => handleSortBy('year')}>Year</button>
                </div>
              )}
            </div>
          </div>
        </nav>
        <div className="content">
          {/* Display filtered data */}
          {filteredData.map((item, index) => (
            <div key={index}>
              <p>{item.title}</p>
              {/* Add more details to display */}
            </div>
          ))}
        </div>
      </div>
    );
  }
// export default App;
