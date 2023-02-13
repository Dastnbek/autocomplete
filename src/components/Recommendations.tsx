import { HighlightedComponent } from './HighlightComponent'
import { IRecommendations } from '../types'

export const Recommendations = ({ inputValue, recValues}: IRecommendations) => {
    if (!inputValue || inputValue.length === 0 || recValues.length === 0) return <div>Nothing to recommend</div>
    
    return (
    <>
      <ul className='recommend'>
        {recValues.map((value:string, index:number) => (
          <li key={index}>
            <HighlightedComponent fullText={value} inputValue={inputValue} />
          </li>
        ))}
      </ul>
    </>
    )
}