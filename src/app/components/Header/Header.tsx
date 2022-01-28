import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

const StyledHeader = styled.header`
  border-bottom: 1px solid black;
  padding: 6px;
  margin-bottom: 8px;
`;

const Header = () => (
  <StyledHeader>
    <Typography variant="h1" sx={{ fontSize: '26px' }}>
      Message stream render with React and Observable
    </Typography>
  </StyledHeader>
);

export default Header;
