import heroImage from "../images/hero.jpg";
import {
  ActionButton,
  ActionButtons,
  HeroContent,
  HeroImage,
  HeroSection,
} from "../styles/hero";
import { getMapsUrl } from "../utils";

const Hero = () => (
  <HeroSection
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <HeroImage src={heroImage} alt="Нашето студио" loading="eager" />

    <HeroContent>
      <h1>Фото Дрон Студио</h1>
      <p>
        Вашият партньор за професионална фотография, заснемания с дрон,
        карикатури, фото продукти и реставрация на спомени.
      </p>
    </HeroContent>

    <ActionButtons>
      <ActionButton
        href="tel:+359887528752"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z" />
          <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z" />
        </svg>
        0887 528 752
      </ActionButton>

      <ActionButton
        href={getMapsUrl()}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
        Намери ни
      </ActionButton>
    </ActionButtons>
  </HeroSection>
);

export default Hero;
