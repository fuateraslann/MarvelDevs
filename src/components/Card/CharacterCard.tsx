import { Button } from '@mui/material'
import DetailsModal from 'components/DetailsModal'
import { useState } from 'react'
import { TCharacter } from 'types'
import Card from '.'
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
      name={character.name}
      imgSrc={character.thumbnail.path + '.' + character.thumbnail.extension}
      extras={
        <>
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
          <DetailsModal
            detailsItem={character}
            openModal={openModal}
            onCloseModal={handleCloseModal}
          />
        </>
      }
    />
  )
}

export default CharacterCard
