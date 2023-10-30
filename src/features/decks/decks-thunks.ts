import { Dispatch } from 'redux'
import { decksAPI } from '../decks/decks-api.ts'
import { fetchDecksAC } from '../decks/decks-reducer.ts'


export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  const res = await decksAPI.fetchDecks()
  dispatch(fetchDecksAC(res.data.items))
}
