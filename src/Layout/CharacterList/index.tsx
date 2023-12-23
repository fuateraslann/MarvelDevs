import { Container, Grid } from '@mui/material'
import { isEmpty } from 'lodash'
import { CharaterCard } from 'components'
import { useGetCharacters } from 'hooks/endpoints'
import { TCharacter } from 'types'

const CharacterList = () => {
  const { data: characters } = useGetCharacters()

  if (!characters) return null

  return (
    <Container
      sx={{
        marginTop: '24px',
        height: '100vh',
        width: '100%',
      }}
    >
      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
        {isEmpty(characters) ? (
          <div>No Characters Found ! </div>
        ) : (
          characters?.map((character: TCharacter) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              sx={{ marginBottom: 7 }}
              key={character.id}
            >
              <CharaterCard character={character} />
            </Grid>
          ))
        )}
      </Grid>
    </Container>
  )
}

export default CharacterList
