import { IAutoComplete } from '../types'
import { Recommendations } from './Recommendations'

export const AutoComplete = ({ handleChange, inputValue, recValues }: IAutoComplete) => {
    return (
        <>
            <input onChange={handleChange} type='text' value={inputValue}/>
            <Recommendations inputValue={inputValue} recValues={recValues} />
        </>
    )
}