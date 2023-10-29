import React, { useState } from 'react';
import './Styles/Content.css';

function ContentDisplay({ data }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    if (currentPage < Math.ceil(data.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const closePopup = () => {
    setSelectedItem(null);
  };

  return (
    <div className="main-div">
      <h2>Our Missions</h2>
      <div className="data-grid">
        {currentItems.map((item) => (
          <div key={item.capsule_serial} className="grid-item">
            <img src="https://st2.depositphotos.com/1011081/8226/i/450/depositphotos_82268876-stock-photo-space-shuttle-taking-off-on.jpg" alt={item.missions[0]?.name} />
            <p>{item.missions[0]?.name}</p>
            <button onClick={() => handleItemClick(item)}>View Details</button>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
        >
          Next
        </button>
      </div>

      {selectedItem && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            <img src="https://st2.depositphotos.com/1000647/6154/i/450/depositphotos_61546201-stock-photo-astronaut-in-outer-space.jpg" alt={selectedItem.missions[0]?.name} />
            <h3>Capsule Details</h3>
            <p>Serial: {selectedItem.capsule_serial}</p>
            <p>Status: {selectedItem.status}</p>
            <p>Details: {selectedItem.details || 'No details available'}</p>
            <p>Type: {selectedItem.type}</p>
            <p>Launch: {selectedItem.original_launch_unix || 'No details available'}</p>

          </div>
        </div>
      )}
    </div>
  );
}

export default ContentDisplay;
