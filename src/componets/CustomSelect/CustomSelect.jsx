import React from "react";
import { useState } from "react";

const CustomSelect = ({ handleCategorySelected, categorias }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Todos");
  const handleOptionClick = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
    handleCategorySelected(value);
  };
  return (
    <div className="seletWrapper" onClick={() => setIsOpen(!isOpen)}>
      <div className="selectedOption">
        {selectedOption}
        <span className="icon">&#9660;</span>
      </div>
      {isOpen && (
        <ul className="optionsList">
          {categorias.map((categoria) => (
            <li
              key={categoria.id}
              className="option"
              onClick={() => handleOptionClick(categoria.nombre)}
            >
              {categoria.nombre}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
