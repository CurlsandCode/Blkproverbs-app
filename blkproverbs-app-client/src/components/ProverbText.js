import React from "react";

export const ProverbText = ({ proverb, meaning, source }) => (
  <div>
    <h1 className="title">
      <span className="icon is-medium">
        <i className="fa fa-quote-left" />
      </span>
      {proverb}
      <span className="icon is-medium">
        <i className="fa fa-quote-right" />
      </span>
    </h1>
    <p className="text-justify">{meaning}</p>
    <p className="text-justify"> {source}</p>
  </div>
);
