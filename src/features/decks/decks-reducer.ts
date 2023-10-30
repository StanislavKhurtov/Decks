const initialState = {
  decks: [] as any[], // todo: add type
  searchParams: {
    name: '',
  },
}

type ActionType = ReturnType<typeof fetchDecksAC>

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: ActionType): DecksState => {
  switch (action.type) {
    case 'FETCH-DECKS': {
      return state
    }
  }
  return state
}

export const fetchDecksAC = () => ({ type: 'FETCH-DECKS' } as const)
