import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Grid,
} from '@mui/material'

import { useGetCharacterComics } from 'hooks/endpoints'
import { TCharacter } from 'types'
import ComicsList from '../ComicsList'

interface IDetailsModalProps {
  detailsItem: TCharacter
  onCloseModal: () => void
  openModal: boolean
}
const DetailsModal = ({
  detailsItem,
  onCloseModal,
  openModal,
}: IDetailsModalProps) => {
  const { data: comics, isLoading: isLoadingComics } = useGetCharacterComics({
    characterId: detailsItem.id,
    enabled: openModal,
  })

  const imageSrc =
    detailsItem.thumbnail.path + '.' + detailsItem.thumbnail.extension

  return (
    <Dialog open={openModal} onClose={onCloseModal}>
      <DialogTitle>
        <h4> Details Of {detailsItem.name}</h4>
      </DialogTitle>
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Grid flex={2}>
            <img style={{ width: '90%', height: '90%' }} src={imageSrc} />
            <Typography variant="h6" gutterBottom>
              {detailsItem.name}
            </Typography>
          </Grid>
          <Grid flex={1}>
            {detailsItem.description !== ''
              ? detailsItem.description
              : 'No Description'}
          </Grid>
        </Grid>
        <Grid flex={1}>
          <h4>Comics Of {detailsItem.name}</h4>
          <ComicsList comics={comics ?? []} isLoading={isLoadingComics} />
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCloseModal}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default DetailsModal
