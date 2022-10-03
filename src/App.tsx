import React, {useState} from 'react';
import './App.css';
import { AutoComplete } from './components/AutoComplete';
import { IRecValues } from './types';
const fruits = ['apple', 'banana', 'orange', 'red apple', ' juciy orange', 'again banana']

function App() {
 
  const [inputValue, setInputValue] = useState<string>('')
  const [recValues, setRecValues] = useState<IRecValues>([])

  const getFilteredData = (inputValue:string) => {
    const filteredData = fruits.filter(
      fruits =>
        fruits.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
    );

    return filteredData
  }

  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const tempInputValue = event.currentTarget.value;
    const filteredData = getFilteredData(tempInputValue)
    setInputValue(tempInputValue)
    setRecValues(filteredData)
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
