import React, { useState } from 'react';

function MyComponent() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleInputClickOrFocus = () => {
    document.getElementById('datepicker').click();
  };

  return (
    <div className="form-group">
      <input
        type="date"
        className="form-control"
        placeholder="التاريخ" 
      />
    </div>
  );
}

export default MyComponent;
