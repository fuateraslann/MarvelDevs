export type TCharacter = {
  id: number
  name: string
  description: string
  thumbnail: {
    path: string
    extension: 'jpg' | 'png' | 'svg'
  }
  comics: {
    available: number
    collectionURI: string
    items: [
      {
        resourceURI: string
        name: string
      }
    ]
    returned: number
  }
}
