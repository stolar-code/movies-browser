import styled from 'styled-components';

const Section = styled.section`
  max-width: 1368px;
  margin: 56px auto;
  padding: 0 16px;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    margin: 24px auto;
  }
`;

export default Section;
