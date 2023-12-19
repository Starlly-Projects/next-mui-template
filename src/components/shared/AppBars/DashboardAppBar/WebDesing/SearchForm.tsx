import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from '../styles'
import SearchIcon from '@mui/icons-material/Search'
import Box from '@mui/material/Box'

const SearchFormComponent = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: { xs: 'none', sm: 'flex' },
        justifyContent: 'center',
      }}
    >
      <Search className="SearchForm">
        <SearchIconWrapper>
          <SearchIcon className="search-icon" />
        </SearchIconWrapper>

        <StyledInputBase 
          placeholder="Buscar…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
    </Box>
  )
}

export default SearchFormComponent
