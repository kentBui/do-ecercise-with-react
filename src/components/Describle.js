import React from "react";

export default function Describle({ describle }) {
  return (
    <div className="product__describle">
      <ul className="list-describle">
        {describle.map((item, i) => (
          <li key={i} className="describle-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
