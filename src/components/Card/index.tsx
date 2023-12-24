import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { CSSProperties } from 'react'
const CardComponent = ({
  imgSrc,
  name,
  contentStyle,
  extras,
}: {
  imgSrc: string
  name: string
  contentStyle?: CSSProperties
  extras?: JSX.Element
}) => {
  return (
    <Card
      style={{
        height: '100%',
      }}
    >
      <CardMedia component="img" height="90%" src={imgSrc} alt={name} />
      <CardContent
        style={
          contentStyle
            ? contentStyle
            : {
                height: 120,
                padding: 5,
                display: 'flex',
                justifyContent: 'space-between',
              }
        }
      >
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        {extras}
      </CardContent>
    </Card>
  )
}

export default CardComponent
