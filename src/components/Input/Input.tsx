import React from 'react';
import './Input.scss';

interface InputProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputValue: string;
  clickButton: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Input = ({ handleChange, inputValue, clickButton }: InputProps) => (
  <div className="search">
    <h3>Please enter the city name</h3>
    <form className="input-form">
      <input className="input-field" onChange={handleChange} value={inputValue} />
      <button className="search-button" onClick={clickButton}>
        Search
      </button>
    </form>
  </div>
);

export default Input;
