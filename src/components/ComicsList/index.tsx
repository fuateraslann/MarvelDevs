import { IconButton, ImageList, ImageListItemBar, Tooltip } from '@mui/material'
import ImageListItem from '@mui/material/ImageListItem/ImageListItem'
import InfoIcon from '@mui/icons-material/Info'
import { TComics } from 'types'
import { isEmpty } from 'lodash'

const ComicsList = ({
  isLoading,
  comics,
}: {
  isLoading: boolean
  comics: TComics[]
}) => {
  if (isLoading) return <div>Loading...</div>
  if (isEmpty(comics)) return <div>No comics found</div>
  return (
    <ImageList
      sx={{
        gridAutoFlow: 'column',
        gridTemplateColumns: 'repeat(auto-fill,minmax(160px,1fr)) !important',
        gridAutoColumns: 'minmax(160px, 1fr)',
      }}
      data-testid="comics-list"
    >
      {comics?.map((e) => {
        return (
          <ImageListItem key={e.id}>
            <img src={e.thumbnail.path + '.' + e.thumbnail.extension} />
            <ImageListItemBar
              data-testid="image-list-item-bar"
              title={e.title}
              actionIcon={
                <Tooltip title={e.title}>
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${e.title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                </Tooltip>
              }
            />
          </ImageListItem>
        )
      })}
    </ImageList>
  )
}

export default ComicsList
