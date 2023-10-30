import { Deck } from '../decks/decks-api.ts'

const initialState = {
  decks: [] as Deck[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: ActionType): DecksState => {
  switch (action.type) {
    case 'FETCH-DECKS': {
      return {
        ...state,
        decks: action.decks,
      }
    }

    default:
      return state
  }
}

export const fetchDecksAC = (decks: Deck[]) => ({ type: 'FETCH-DECKS', decks } as const)


type ActionType = DecksAction

type DecksAction = ReturnType<typeof fetchDecksAC>



