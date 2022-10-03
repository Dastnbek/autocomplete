import { IRecommendations } from '../types'

export const Recommendations = ({ inputValue, recValues}: IRecommendations) => {
    if (!inputValue || inputValue.length === 0 || recValues.length === 0) return <div>Nothing to recommend</div>
    
    const getHighlightedComponent = (fullText:string) => {
        const parts = fullText.split(new RegExp(`(${inputValue})`, 'gi'));
        return <span>{parts.map(part => part.toLowerCase() === inputValue.toLowerCase() ? <b>{part}</b> : part)}</span>
    }
    return (
    <>
      <ul className='recommend'>
        {recValues.map((value:string, index:number) => (
          <li key={index}>
            {getHighlightedComponent(value)}
          </li>
        ))}
      </ul>
    </>
    )
}