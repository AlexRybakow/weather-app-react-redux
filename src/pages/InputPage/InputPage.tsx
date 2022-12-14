import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCityToStorage } from '../../redux/actions';
import Input from '../../components/Input/Input';

interface InputProps {
  addCityToStorage: (city: string) => string;
}

const InputPage = ({ addCityToStorage }: InputProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value);

  const clickButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setInputValue('');
    if (inputValue !== '') addCityToStorage(inputValue);
  };

  return <Input inputValue={inputValue} handleChange={handleChange} clickButton={clickButton} />;
};

//@ts-ignore
export default connect(null, { addCityToStorage })(InputPage);
