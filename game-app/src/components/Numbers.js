import React from 'react';

const Numbers = (props) => {
  const arrayOfNumbers = _.range(1,10);
  return (
    <div>
      <div>
        {arrayOfNumbers.map((number, i) =>
          <span key={i}>{number}</span>
        )
        }
      </div>
    </div>
  );
};

export default Numbers;
