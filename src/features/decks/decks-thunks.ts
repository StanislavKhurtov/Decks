import { Dispatch } from 'redux'
import { decksAPI } from '../decks/decks-api.ts'
import { fetchDecksAC } from '../decks/decks-reducer.ts'
import { AppDispatch } from '../../app/store.ts'



export const fetchDecksTC = () => async (dispatch: Dispatch) => {
  const res = await decksAPI.fetchDecks()
  dispatch(fetchDecksAC(res.data.items))
}

export const addDeckTC = (name: string) => async (dispatch: AppDispatch) => {
  await decksAPI.addDeck(name);
  dispatch(fetchDecksTC());
};


/*export const addDeckTC = (name:string) => async (dispatch: Dispatch) => {
  const res = await decksAPI.addDeck(name)
  dispatch(addDeckAC(res.data.name))
}*/
