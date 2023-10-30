import { Dispatch } from 'redux'
import { decksAPI } from '../decks/decks-api.ts'
import { addDeckAC, fetchDecksAC } from '../decks/decks-reducer.ts'


export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  const res = await decksAPI.fetchDecks()
  dispatch(fetchDecksAC(res.data.items))
}

export const addDeckTC = (name:string) => async (dispatch: Dispatch) => {
  const res = await decksAPI.addDeck(name)
  dispatch(addDeckAC(res.data))
}
