import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const HeroSection = styled(motion.section)`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: #1a1a1a;

  @media (max-width: 768px) {
    height: 100vh;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.4);

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    object-position: center;
  }
`;

export const HeroContent = styled.div`
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  z-index: 2;
  max-width: 800px;
  text-align: center;
  background: rgba(0, 0, 0, 0.6);
  padding: 2.5rem;
  border-radius: 16px;
  backdrop-filter: blur(8px);
  width: 90%;

  h1 {
    font-size: 3.5rem;
    margin: 0 0 1.5rem 0;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  p {
    font-size: 1.4rem;
    line-height: 1.6;
    margin: 0;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
  }

  @media (max-width: 768px) {
    top: 10%;
    padding: 1.5rem;
    width: 85%;

    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.2rem;
      line-height: 1.5;
    }
  }
`;

export const ActionButtons = styled.div`
  position: absolute;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 2rem;
  z-index: 2;
  width: 90%;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    bottom: 3rem;
    gap: 1.2rem;
    padding: 0 1rem;
    flex-direction: column;
    align-items: stretch;
  }
`;

export const ActionButton = styled(motion.a)`
  padding: 1.5rem 3rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  color: #000;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-weight: 600;
  font-size: 1.3rem;
  backdrop-filter: blur(5px);
  white-space: nowrap;
  min-width: max-content;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  svg {
    width: 32px;
    height: 32px;
  }

  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 1.3rem 2.5rem;
    font-size: 1.2rem;
    width: 100%;
    justify-content: center;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;
