import styled from 'styled-components';
import { ReactComponent as Star } from '../../images/svgs/star.svg';

export const ImageContainer = styled.div`
  position: relative;
`;

export const ImageOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(
      270deg,
      #000000 14.11%,
      rgba(0, 0, 0, 0.873268) 15.08%,
      rgba(0, 0, 0, 0.720529) 16.51%,
      rgba(0, 0, 0, 0.294577) 19.99%,
      rgba(0, 0, 0, 0.159921) 21.88%,
      rgba(0, 0, 0, 0) 25.68%
    ),
    linear-gradient(
      90deg,
      #000000 13.6%,
      rgba(0, 0, 0, 0.984059) 14.58%,
      rgba(0, 0, 0, 0.967732) 15.44%,
      rgba(0, 0, 0, 0.865569) 16.3%,
      rgba(0, 0, 0, 0.230315) 22.87%,
      rgba(0, 0, 0, 0) 26.64%
    ),
    linear-gradient(
      180deg,
      #000000 0%,
      rgba(0, 0, 0, 0.689555) 4.66%,
      rgba(0, 0, 0, 0.439033) 9.34%,
      rgba(0, 0, 0, 0.20628) 15.16%,
      rgba(0, 0, 0, 0) 24.22%
    ),
    linear-gradient(
      189.44deg,
      rgba(0, 0, 0, 0) 58.48%,
      rgba(0, 0, 0, 0.106473) 63.17%,
      rgba(0, 0, 0, 0.235359) 68.85%,
      rgba(0, 0, 0, 0.492821) 78.08%,
      rgba(0, 0, 0, 0.740286) 85.86%,
      #000000 92.87%
    );
`;

export const Image = styled.img`
  width: 100%;
`;

export const Wrapper = styled.div`
  color: #ffffff;
  position: absolute;
  bottom: 0;
`;

export const Title = styled.h2`
  font-size: 64px;
  font-weight: 600;
  margin: 0 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 24px;
    margin: 0 0 6px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: 18px;
`;

export const StarIcon = styled(Star)`
  align-self: normal;
  width: 40px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 16px;
  }
`;

export const Rate = styled.span`
  font-weight: 500;
  font-size: 30px;
  margin: 0 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
    font-weight: 600;
    margin: 0 2px 0 4px;
  }
`;

export const TextContent = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 10px;
  }
`;
