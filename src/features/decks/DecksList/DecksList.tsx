import s from './DecksList.module.css'
import { useEffect } from 'react'
import { Deck } from '../decks-api.ts'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { fetchDecksTC } from '../../decks/decks-thunks.ts'
import { DeckItem } from '../DecksList/DeckItem/DeckItem.tsx'

export const DecksList = () => {
  const decks = useAppSelector<Deck[]>(state => state.decks.decks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchDecksTC())
  }, [])

  return <ul className={s.list}>
    {decks.map((deck) => (
      <DeckItem key={deck.id} deck={deck} />
    ))}
  </ul>
}
