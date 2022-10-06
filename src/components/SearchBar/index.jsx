import React from "react";
import { string, func } from "prop-types";
import { Paper, TextField } from "@mui/material";
import styled from "@emotion/styled";

const SearchBarContainer = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em 0;
`;

const Logo = styled.img`
  width: 55px;
  margin-right: 1em;
`;

const Input = styled(TextField)`
  width: 250px;
  border: 0;
  
  &:focus{
    outline: none;
    box-shadow: 0 3px #b1b1b1;
  }
`;

const SearchBar = ({logo, onSearch, onChange, searchValue}) => {
    const handleOnSubmit = (event) => {
        event.preventDefault();
        onSearch(searchValue);
    }
    return (
      <SearchBarContainer square>
          <Logo src={logo} />
          <form onSubmit={handleOnSubmit}>
              <Input label='Search related topics'
                     variant="filled"
                     value={searchValue}
                     name='searchValue'
                     onChange={onChange}
              />
          </form>
      </SearchBarContainer>
    );
}

SearchBar.defaultProps = {
  searchValue: null
}

SearchBar.propTypes = {
  logo: string.isRequired,
  onSearch: func.isRequired,
  onChange: func.isRequired,
  searchValue: string
};

export default SearchBar;
