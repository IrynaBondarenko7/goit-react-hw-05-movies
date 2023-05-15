import { StyledSectionContainer } from 'components/SectionContainer.styled';
import { StyledHeader } from './StyledHeader';

export const Header = ({ children }) => {
  return (
    <StyledHeader>
      <StyledSectionContainer>{children}</StyledSectionContainer>
    </StyledHeader>
  );
};
