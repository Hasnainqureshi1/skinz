import React, { useState, useRef, useEffect } from 'react';
import SubHeaderItems from './SubHeaderItems';

const GameHeader = ({ gameData }) => {
  const [selectedGame, setSelectedGame] = useState(gameData.games.length > 0 ? gameData.games[0].name : '');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [overflowTabs, setOverflowTabs] = useState([]);
  const [showMoreTabs, setShowMoreTabs] = useState(false);

  const tabsRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const containerWidth = tabsRef.current.offsetWidth;
      const tabsWidth = tabsRef.current.scrollWidth;

      const numTabs = gameData.games.length;

      // Calculate the number of tabs that can fit into the container
      const numTabsFit = Math.floor(containerWidth / (tabsWidth / numTabs));

      // Determine if there are overflow tabs
      const hasOverflowTabs = numTabs > numTabsFit;

      if (hasOverflowTabs) {
        // Set overflow tabs
        setOverflowTabs(gameData.games.slice(numTabsFit));
        // Hide overflow tabs if they are currently shown
        setShowMoreTabs(false);
      } else {
        // Clear overflow tabs if there are no overflow tabs
        setOverflowTabs([]);
      }
    };

    window.addEventListener('resize', handleResize);
    // Call handleResize initially
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [gameData.games]);

  const handleGameChange = (gameName) => {
    setSelectedGame(gameName);
    // Reset selected category and items when game changes
    setSelectedCategory('');
    setSelectedItems([]);
  };

  const handleCategoryChange = (categoryName) => {
    setSelectedCategory(categoryName);
    // Reset selected items when category changes
    setSelectedItems([]);
  };

  const handleItemClick = (itemName) => {
    if (selectedItems.includes(itemName)) {
      setSelectedItems(selectedItems.filter(item => item !== itemName));
    } else {
      setSelectedItems([...selectedItems, itemName]);
    }
  };

  const toggleMoreTabs = () => {
    setShowMoreTabs(!showMoreTabs);
  };

  return (
    <div className="game-header">
      <div className="game-selection">
        {gameData.games.map((game, index) => (
          <button key={index} onClick={() => handleGameChange(game.name)} className={selectedGame === game.name ? 'selected' : ''}>{game.name}</button>
        ))}
      </div>
      <div className="category-selection">
        {/* Render overflow tabs in "More" dropdown */}
        {overflowTabs.map((game, index) => (
          <button key={index} onClick={() => handleGameChange(game.name)} className={selectedGame === game.name ? 'selected' : ''}>{game.name}</button>
        ))}
      </div>
      {/* Render items based on selected game and category */}
      <div className="item-slider">
        {/* Horizontal slider component */}
        {selectedCategory && (
          <div>
            <h3>{selectedCategory}</h3>
            <div className="item-container">
              {selectedCategoryItems.map((item, index) => (
                <div key={index} className={`item-card ${selectedItems.includes(item.name) ? 'selected' : ''}`} onClick={() => handleItemClick(item.name)}>
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {/* More dropdown button for overflow tabs */}
      {overflowTabs.length > 0 && (
        <div className="more-tabs">
          <button onClick={toggleMoreTabs}>More</button>
          {showMoreTabs && (
            <div className="more-tabs-dropdown">
              {/* Render overflow tabs here */}
              <div ref={tabsRef} className="overflow-tabs">
                {overflowTabs.map((game, index) => (
                  <button key={index} onClick={() => handleGameChange(game.name)} className={selectedGame === game.name ? 'selected' : ''}>{game.name}</button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
      <SubHeaderItems/>
    </div>
  );
};

export default GameHeader;
