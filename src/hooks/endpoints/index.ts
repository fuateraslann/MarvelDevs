import { useQuery, UseQueryResult } from 'react-query'

import { axios } from 'utils'
import { TCharacter } from 'types'

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
}): UseQueryResult<TCharacter[]> => {
  return useQuery(
    ['characterComics', characterId],
    async (): Promise<TCharacter[]> => {
      return await axios
        .get(`/v1/public/characters/${characterId}/comics`, {
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
