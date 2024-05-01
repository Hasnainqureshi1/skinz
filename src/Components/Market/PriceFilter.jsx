import React, { useState ,useEffect} from 'react';
 
import ReactSlider from 'react-slider'

const PriceFilter = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(10000);
  const maxBricks = 20; // Maximum number of bricks on each side
  const [lowerBound,SetlowerBound] = useState(0);
  const [upperBound,SetupperBound] = useState(20000);
  const [step, setStep] = useState(5);

  const handleSliderChange = (value) => {
    if (Array.isArray(value)) {
      const [min, max] = value;
      setMinValue(min);
      setMaxValue(max);
    }
  };

  // Define different ranges and their corresponding step sizes
  const ranges = [
    { min: 0, max: 100, step: 5 },
    { min: 100, max: 500, step: 10 },
    { min: 500, max: 1000, step: 40 },
    { min: 1000, max: 5000, step: 90 },
    { min: 5000, max: 10000, step: 100 },
  ];

  useEffect(() => {
    // Find the range that the current range falls into
    const currentRangeConfig = ranges.find(range => minValue >= range.min && maxValue <= range.max);

    if (currentRangeConfig) {
      setStep(currentRangeConfig.step);
    } else {
      // If the current range does not fall into any defined range, default to 5
      setStep(5);
    }
  }, [minValue, maxValue, ranges]);

  // Generate marks for the slider based on the defined ranges
  const marks = {};
  ranges.forEach(range => {
    marks[range.min] = `${range.min}`;
    marks[range.max] = `${range.max}`;
  });

  const roundedMinValue = Math.floor(minValue / 500) * 500;
  console.log("roundedMinValue: ", roundedMinValue)
// Calculate the number of selected bricks
const numSelectedBricks = Math.ceil(((maxValue - roundedMinValue) / 10000) * maxBricks);

// Calculate the number of bricks on the left side
const numBricksLeft = Math.min(Math.floor(minValue / (10000 / maxBricks)), maxBricks);

// Calculate the number of bricks on the right side based on the remaining space
const numBricksRight = maxBricks - numBricksLeft - numSelectedBricks;





 

  console.log("selected bricks: " + numSelectedBricks);
  console.log("right bricks: " + numBricksRight);
  console.log("left bricks: " + numBricksLeft);

  // Generate styles for the bricks
  const brickStyle = {
    width: `calc(100% / ${maxBricks})`,
  };

  return (
    <div className="PriceFilter">
      <div className="PriceFilter-bar">
        <div className="PriceFilter-diagram">
          {/* Render left side dark gray bricks */}
          {[...Array(numBricksLeft)].map((_, index) => (
            <div key={index} className="PriceFilter-diagramCol" style={{ ...brickStyle, background: 'rgb(51, 56, 57)' }}></div>
          ))}
          {/* Render selected range with sky color bricks */}
          {[...Array(numSelectedBricks)].map((_, index) => (
            <div key={index + numBricksLeft} className="PriceFilter-diagramCol" style={{ ...brickStyle, background: 'rgb(77, 181, 218)' }}></div>
          ))}
          {/* Render right side dark gray bricks */}
          {[...Array(numBricksRight)].map((_, index) => (
            <div key={index + numBricksLeft + numSelectedBricks} className="PriceFilter-diagramCol" style={{ ...brickStyle, background: 'rgb(51, 56, 57)' }}></div>
          ))}
        </div>
        <ReactSlider
          min={0}
          max={10000}
          value={[minValue, maxValue]}
          onChange={handleSliderChange}
          step={step}
          className="custom-slider" // Add custom class for styling
          renderThumb={(props, state) => <div {...props} className="custom-thumb" />} // Custom thumb rendering
          renderTrack={(props, state) => <div {...props} className="custom-track" />} // Custom track rendering
        />
        <div className="PriceFilter-arrow"></div>
      </div>
      <div className="PriceFilter-inputs">
        <label className="PriceFilter-inputField" htmlFor="pricegt">
          <span className="PriceFilter-label">from</span>
          <div className="PriceFilter-inputWrapper">
            <span className="PriceFilter-currency">$</span>
            <input
              className="PriceFilter-input"
              id="pricegt"
              value={minValue }
              readOnly
            />
          </div>
        </label>
        <label className="PriceFilter-inputField" htmlFor="pricelt">
          <span className="PriceFilter-label">to</span>
          <div className="PriceFilter-inputWrapper">
            <span className="PriceFilter-currency">$</span>
            <input
              className="PriceFilter-input"
              id="pricelt"
              value={maxValue }
              readOnly
            />
          </div>
        </label>
      </div>
    </div>
  );
};

export default PriceFilter;
