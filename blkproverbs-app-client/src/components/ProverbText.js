import React from 'react';

export const ProverbText = ({ proverb, meaning, source}) => (
  <div>
    <p className="text-justify">{proverb}</p>
    <p className="text-justify">{meaning}</p>
    <p className="font-weight-bold text-right"> {source}</p>
  </div>
);
