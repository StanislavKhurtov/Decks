import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { Deck } from '../decks-api.ts'
import { useEffect } from 'react'
import { fetchDecksTC } from '../decks-thunks.ts'

export const useFetchDecks = () => {
  const decks = useAppSelector<Deck[]>(state => state.decks.decks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchDecksTC())
  }, [])

  return {decks}
}