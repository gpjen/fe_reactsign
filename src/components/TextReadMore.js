import React, { useState } from "react";

export default function TextReadMore({ limit, children }) {
  const text = children;
  const [showMore, setShowMore] = useState(false);

  function handleReadMoreClick() {
    setShowMore((value) => !value);
  }
  return (
    <div>
      {showMore ? text : text.slice(0, limit)}
      <p className="btn text-info" onClick={handleReadMoreClick}>
        {showMore ? "Read Less" : "...Read More"}
      </p>
    </div>
  );
}
