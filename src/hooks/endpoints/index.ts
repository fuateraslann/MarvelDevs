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
