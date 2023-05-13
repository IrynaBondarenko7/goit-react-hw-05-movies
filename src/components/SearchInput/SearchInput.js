import { StyledSearchInput } from './SearchInput.styled';

export const SearchInput = ({ setSearchInputValue }) => {
  return (
    <StyledSearchInput
      type="text"
      placeholder="search film"
      onChange={evt => {
        setSearchInputValue(evt.target.value);
      }}
    />
  );
};
