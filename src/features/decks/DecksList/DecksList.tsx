import s from './DecksList.module.css'
import { useEffect } from 'react'
import { Deck, decksAPI } from '../decks-api.ts'
import { useAppDispatch, useAppSelector } from '../../../app/store.ts'
import { fetchDecksAC } from '../decks-reducer.ts'
import { DeckItem } from '../DecksList/DeckItem/DeckItem.tsx'


export const DecksList = () => {
  const decks = useAppSelector<Deck[]>(state => state.decks.decks)
  const dispatch = useAppDispatch()

  useEffect(() => {
    decksAPI.fetchDecks().then(res => {
      dispatch(fetchDecksAC(res.data.items))
    })
  }, [])

  return <ul className={s.list}>
    {decks.map((deck) => (
      <DeckItem key={deck.id} deck={deck} />
    ))}
  </ul>
}
