import { createTheme, ThemeProvider } from '@mui/material/styles'
import { QueryClient, QueryClientProvider } from 'react-query'

import Header from 'Layout/Header'
import CharacterList from 'Layout/CharacterList'
function App() {
  const queryClient = new QueryClient()

  const theme = createTheme({
    typography: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: 12,
      button: {
        color: '#be5155',
        textTransform: 'none',
      },
    },
    palette: {
      primary: {
        light: '#dda0a8',
        main: '#be5155',
        contrastText: '#fff',
      },
      secondary: {
        light: '#e6b9bf',
        main: '#c65866',
      },
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Header />
        <CharacterList />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
