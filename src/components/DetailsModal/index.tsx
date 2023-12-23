import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Grid,
} from '@mui/material'

import { TCharacter } from 'types'
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
  return (
    <Dialog open={openModal} onClose={onCloseModal}>
      <DialogTitle>Details Of {detailsItem.name}</DialogTitle>
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Grid flex={2}>
          <img
            style={{ width: '90%', height: '90%' }}
            src={
              detailsItem.thumbnail.path + '.' + detailsItem.thumbnail.extension
            }
          />
          <Typography variant="h6" gutterBottom>
            {detailsItem.name}
          </Typography>
        </Grid>
        <Grid flex={1}>{detailsItem.description}</Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onCloseModal}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}

export default DetailsModal
