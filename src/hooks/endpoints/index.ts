import { useQuery, UseQueryResult } from 'react-query'

import { axios } from 'utils'
import { TCharacter, TComics } from 'types'

export const useGetCharacters = ({
  offset = 0,
}: {
  offset: number
}): UseQueryResult<TCharacter[]> => {
  return useQuery(
    'characters',
    async (): Promise<TCharacter[]> => {
      return await axios
        .get(`/v1/public/characters`, { params: { offset } })
        .then((response) => {
          return response.data.data.results
        })
        .catch((error) => {
          console.log(error)
        })
    },
    {
      refetchOnWindowFocus: false,
    }
  )
}

export const useGetCharacterComics = ({
  characterId,
  enabled,
}: {
  characterId: number
  enabled: boolean
}): UseQueryResult<TComics[]> => {
  return useQuery(
    ['characterComics', characterId],
    async (): Promise<TComics[]> => {
      return await axios
        .get(`/v1/public/characters/${characterId}/comics?orderBy=-focDate`, {
          params: { limit: 10 },
        })
        .then((response) => {
          return response.data.data.results
        })
        .catch((error) => {
          console.log(error)
        })
    },
    {
      enabled,
      refetchOnWindowFocus: false,
    }
  )
}
