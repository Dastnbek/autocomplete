import React from 'react'
export interface IAutoComplete {
    handleChange: (event:React.ChangeEvent<HTMLInputElement>) => void,
    inputValue: string
    recValues: IRecValues
}

export interface IRecommendations {
    inputValue: string,
    recValues: IRecValues
}

export interface IHighlightedText {
    fullText: string,
    inputValue: string
}

export type IRecValues = Array<string>
