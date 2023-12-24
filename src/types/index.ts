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
type TPublishDates = {
  type: 'focDate' | 'onsaleDate' | 'unlimitedDate' | 'digitalPurchaseDate'
  date: string
}
export type TComics = {
  id: number
  title: string
  description: string
  pageCount: string
  resourceURI: string
  dates: TPublishDates[]
  thumbnail: {
    path: string
    extension: 'jpg' | 'png' | 'svg'
  }
}
