import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { TCharacter } from 'types'

const CharacterCard = ({ character }: { character: TCharacter }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="90%"
        src={character.thumbnail.path + '.' + character.thumbnail.extension}
        alt={character.name}
        style={{ backgroundColor: '#efefef' }}
      />
      <CardContent
        style={{
          height: 90,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Typography variant="h6" gutterBottom>
            {character.name}
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default CharacterCard
