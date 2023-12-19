import { styled } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const MobileDesignBlogWrapper = styled('div')`
  display: flex;
  @media (max-width: 600px) {
    justify-content: flex-end;
  }
`;

export const MobileMenuIcon = styled(IconButton)`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    margin-right: 10px; 
  }
`;

export const MobileMenu = styled(Menu)`
  @media (max-width: 600px) {
    display: block;
  }
`;

export const MobileMenuItem = styled(MenuItem)`
  @media (max-width: 600px) {
    text-align: center;
  }
`;