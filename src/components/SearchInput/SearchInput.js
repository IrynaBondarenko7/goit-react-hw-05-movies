import { StyledSearchInput } from './SearchInput.styled';

export const SearchInput = ({ setSearchInputValue }) => {
  return (
    <StyledSearchInput
      type="text"
      placeholder="Search film"
      onChange={evt => {
        setSearchInputValue(evt.target.value);
      }}
    />
  );
};
