import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const ServicesSection = styled.section`
  padding: 4rem 0;
  background: #f8f9fa;
  min-height: 60vh;
  width: 100%;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

export const ServicesGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ServiceCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 4rem;
  overflow: visible;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    margin-bottom: 2rem;
  }
`;

export const ServiceHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  h3 {
    font-size: 2rem;
    margin: 0;
    color: #2d3748;
  }

  .icon {
    font-size: 3.5rem;
  }
`;

export const ServiceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const ServiceDescription = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #4a5568;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 1.1rem;
      line-height: 1.5;
    }
  }
`;

export const ServiceImages = styled(motion.div)`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  width: 100%;

  img {
    width: 100%;
    height: 300px;
    border-radius: 12px;
    object-fit: cover;
    background: #fff;
    padding: 0;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    transition: all 0.3s ease;
    aspect-ratio: 16/9;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.2);
    }
  }

  &[data-service="Реставрации"] {
    grid-template-columns: repeat(2, 1fr);
    position: relative;
    gap: 8rem;
    max-width: 900px;
    margin: 0 auto;

    img {
      height: 300px;
      aspect-ratio: 16/9;
    }

    &::after {
      content: "→";
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 2.5rem;
      color: #2d3748;
      background: white;
      padding: 1.5rem 2rem;
      border-radius: 50%;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
      z-index: 2;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
    }
  }

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 5rem;
    margin: 0 auto;
    position: relative;
    padding-top: 1rem;
    padding-bottom: 1rem;

    > div {
      background: white;
      border-radius: 16px;
      padding: 1rem;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }

    img {
      width: 100%;
      height: auto;
      aspect-ratio: auto;
      object-fit: contain;
      border-radius: 12px;
      padding: 0;
      box-shadow: none;
      margin: 0;
      max-height: 70vh;
    }

    &[data-service="Карикатури"] {
      img {
        aspect-ratio: auto;
        min-height: auto;
        background: white;
      }
    }

    &[data-service="Реставрации"] {
      grid-template-columns: 1fr;
      gap: 5rem;
      margin: 0 auto;
      position: relative;
      padding-top: 1rem;
      padding-bottom: 1rem;

      img {
        width: 100%;
        height: auto;
        aspect-ratio: auto;
      }

      &::after {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(90deg);
        font-size: 2rem;
        padding: 0;
        width: 50px;
        height: 50px;
        background: white;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
        display: flex;
        align-items: center;
        justify-content: center;
        line-height: 1;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    gap: 4rem;

    > div {
      padding: 0.8rem;
    }

    &[data-service="Реставрации"] {
      gap: 4rem;

      &::after {
        width: 40px;
        height: 40px;
        font-size: 1.8rem;
      }
    }
  }
`;

export const SocialSection = styled.div`
  text-align: center;
  padding: 2rem 0;
  margin-top: 2rem;
`;

export const SocialLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  background: #1877f2;
  color: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.2rem;
  white-space: nowrap;
  min-width: max-content;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;

  svg {
    width: 28px;
    height: 28px;
  }

  &:hover {
    background: #1664d9;
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 90%;
    justify-content: center;
    margin: 0 auto;
    padding: 1.2rem 2rem;
  }
`;
