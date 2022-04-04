import styled, {css} from 'styled-components';

export const Button = styled.button`
  align-items: center; /* For when the as={Link} attribute is added.  */
  background-color: #136EF6;
  border: none;
  border-radius: 2px;
  color: inherit;
  cursor: pointer;
  display: flex;
  font-family: 'SofiaPro-Regular';
  font-size: 20px;
  width: 170px;
  height: 45px;
  justify-content: center;
  position: relative;
  text-decoration: none; /* when the as={Link} attribute is added. */
`;