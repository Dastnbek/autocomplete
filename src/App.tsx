import React, { useEffect, useState } from 'react';
import './App.css';
import { AutoComplete } from './components/AutoComplete';
import { IRecValues } from './types';
import { fruits } from './assets/data'
import { getFilteredData } from './assets/functions'

function App() {
  const [inputValue, setInputValue] = useState<string>('')
  const [recValues, setRecValues] = useState<IRecValues>([])

  useEffect(() => {
    const debounce = setTimeout(() => {
      const filteredData = getFilteredData(fruits ,inputValue)
      setRecValues(filteredData)
    }, 350)

    return () => clearTimeout(debounce)

  }, [inputValue])

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value;
    setInputValue(inputValue)
  }

  return (
    <div className="app">
      <div>Search for fruits</div>
      <div className='container'>
        <AutoComplete handleChange={handleChange} inputValue={inputValue} recValues={recValues} />
      </div>
    </div>
  );
}

export default App;
