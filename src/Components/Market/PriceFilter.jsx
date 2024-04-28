import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const PriceFilter = () => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(1571);

  const handleSliderChange = ([min, max]) => {
    setMinValue(min);
    setMaxValue(max);
  };

  return (
    <div className="PriceFilter">
      <div className="PriceFilter-bar">
        <div className="PriceFilter-diagram">
          {/* Here, you can dynamically generate the colored bricks based on your minValue and maxValue */}
          {/* For simplicity, I'm showing a static representation */}
          <div className="PriceFilter-diagramCol" style={{ width: `calc(5% - 1px)`, background: 'rgb(77, 181, 218)' }}></div>
          <div className="PriceFilter-diagramCol" style={{ width: `calc(5% - 1px)`, background: 'rgb(77, 181, 218)' }}></div>
          {/* Add more divs based on your range */}
          {/* Example: <div className="PriceFilter-diagramCol" style={{ width: `calc(${(maxValue - minValue) / totalRange}% - 1px)`, background: 'rgb(77, 181, 218)' }}></div> */}
          <div className="PriceFilter-diagramCol" style={{ width: `calc(5% - 1px)`, background: 'rgb(51, 56, 57)' }}></div>
          <div className="PriceFilter-diagramCol" style={{ width: `calc(5% - 1px)`, background: 'rgb(51, 56, 57)' }}></div>
        </div>
        <Slider
          min={0}
          max={100} // adjust the max value according to your range
          value={[minValue, maxValue]}
          onChange={handleSliderChange}
          trackStyle={[{ backgroundColor: 'rgb(255, 255, 255)' }]}
          handleStyle={[
            { backgroundColor: 'white', borderColor: 'rgb(77, 181, 218)' },
            { backgroundColor: 'white', borderColor: 'rgb(77, 181, 218)' }
          ]}
        />
      </div>
      <div className="PriceFilter-inputs">
        <label className="PriceFilter-inputField" htmlFor="pricegt">
          <span className="PriceFilter-label">from</span>
          <div className="PriceFilter-inputWrapper">
            <span className="PriceFilter-currency">$</span>
            <input
              className="PriceFilter-input"
              id="pricegt"
              autoComplete="off"
              spellCheck="false"
              autoCorrect="false"
              autoCapitalize="off"
              value={minValue.toFixed(2)}
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
              autoComplete="off"
              spellCheck="false"
              autoCorrect="false"
              autoCapitalize="off"
              value={maxValue.toFixed(2)}
              readOnly
            />
          </div>
        </label>
      </div>
    </div>
  );
};

export default PriceFilter;
