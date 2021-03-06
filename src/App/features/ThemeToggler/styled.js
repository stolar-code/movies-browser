import styled, { css } from 'styled-components';

export const Toggler = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  ${({ clicked }) =>
    clicked &&
    css`
      ${Ball} {
        transform: translateX(calc(100% + 4px));
        background: #e3e3e3;
      }
    `}
`;

export const TogglerField = styled.span`
  display: flex;
  align-items: center;
  padding: 2px;
  border-radius: 20px;
  border: 1px solid darkgrey;
  width: 50px;
  height: 25px;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    width: 40px;
    height: 20px;
  }
`;

export const Ball = styled.span`
  background: darkgrey;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  transition: transform 0.5s, background 0.5s;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    height: 15px;
    width: 15px;
  }
`;
