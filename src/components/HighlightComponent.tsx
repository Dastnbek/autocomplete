import { IHighlightedText } from '../types'

export const HighlightedComponent = (props: IHighlightedText) => {
    const parts = props.fullText.split(new RegExp(`(${props.inputValue})`, 'gi'));
    return <span>{parts.map(part => part.toLowerCase() === props.inputValue.toLowerCase() ? <b>{part}</b> : part)}</span>
}