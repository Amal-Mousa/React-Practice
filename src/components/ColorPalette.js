import React, { useState } from 'react'

function ColorPalette() {
  const colors = ["#9253a1", "#f063a4", "#ec015a"];
  const [color, setColor] = useState('#071415')
  console.log(color);
  return (
    <div className='App' style={{ background: color }}>
      <div className="container">
        {colors.map(color =>
          <button
            style={{ background: color, opacity: .7 }}
            key={color}
            className="color btn"
            onClick={(e) => setColor(color)}>
            {color}
          </button>
        )}
      </div>
    </div>
  )
}

export default ColorPalette
