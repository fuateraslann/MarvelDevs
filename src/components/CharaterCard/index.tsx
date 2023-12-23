import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material'
import DetailsModal from 'components/DetailsModal'
import { useState } from 'react'
import { TCharacter } from 'types'

const CharacterCard = ({ character }: { character: TCharacter }) => {
  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }

  return (
    <Card
      style={{
        height: '100%',
      }}
    >
      <CardMedia
        component="img"
        height="90%"
        src={character.thumbnail.path + '.' + character.thumbnail.extension}
        alt={character.name}
        style={{ backgroundColor: '#efefef' }}
      />
      <CardContent
        style={{
          height: 100,
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h6" gutterBottom>
          {character.name}
        </Typography>
        <Button
          sx={{
            maxHeight: 30,
            border: '1px solid',
            borderRadius: 1,
          }}
          onClick={handleOpenModal}
        >
          Details
        </Button>
      </CardContent>
      <DetailsModal
        detailsItem={character}
        openModal={openModal}
        onCloseModal={handleCloseModal}
      />
    </Card>
  )
}

export default CharacterCard
