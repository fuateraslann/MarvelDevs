import { Container, Grid, Typography } from '@mui/material'
import { isEmpty } from 'lodash'
import { CharacterCard } from 'components'
import { useGetCharacters } from 'hooks/endpoints'
import { TCharacter } from 'types'
import { useEffect, useState } from 'react'

const CharacterList = () => {
  const [fetchCharacterOffset, setFetchCharacterOffset] = useState<number>(0)
  const [cardItems, setCardItems] = useState<TCharacter[] | []>([])

  const {
    data: characters,
    isLoading,
    isFetching,
    refetch,
  } = useGetCharacters({
    offset: fetchCharacterOffset,
  })

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement
    if (scrollTop + clientHeight >= scrollHeight - 10 && !isLoading) {
      setFetchCharacterOffset((prevState) => prevState + 30)
    }
  }

  useEffect(() => {
    refetch()
  }, [fetchCharacterOffset])

  useEffect(() => {
    if (characters) {
      setCardItems((prevState) => [...prevState, ...characters])
    }
  }, [characters])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isLoading])

  if (!cardItems) return null
  if (isEmpty(cardItems) && !isLoading) {
    return <div>No Characters Found ! </div>
  }

  return (
    <Container
      sx={{
        marginTop: '24px',
        height: '100vh',
        width: '100%',
      }}
    >
      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
        {cardItems?.map((character: TCharacter) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            sx={{ marginBottom: 7 }}
            key={character.id}
          >
            <CharacterCard character={character} />
          </Grid>
        ))}
        {isFetching && <Typography>LOADING...</Typography>}
      </Grid>
    </Container>
  )
}

export default CharacterList
