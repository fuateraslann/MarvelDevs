export type TImageExtensions = 'jpg' | 'png' | 'svg'
export type TCharacter = {
  id: number
  name: string
  description: string
  thumbnail: {
    path: string
    extension: TImageExtensions
  }
}
export type TComics = {
  id: number
  title: string
  thumbnail: {
    path: string
    extension: TImageExtensions
  }
}
