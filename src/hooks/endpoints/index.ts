import { useQuery, UseQueryResult } from 'react-query'

import { axios } from 'utils'
import { TCharacter } from 'types'

export const useGetCharacters = (): UseQueryResult<TCharacter[]> => {
  return useQuery(
    'characters',
    async (): Promise<TCharacter[]> => {
      return await axios
        .get(`/v1/public/characters`)
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
