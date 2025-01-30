import styled from "@emotion/styled";
import { useEffect, useState } from "react";

import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";

const AppContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  min-height: 100vh;
  background: #f8f9fa;
`;

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const heroImage = new Image();
    heroImage.src = new URL("./images/hero.jpg", import.meta.url).href;
    heroImage.onload = () => setIsLoading(false);
    heroImage.onerror = () => {
      console.error("Failed to load hero image");
      setIsLoading(false);
    };
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <AppContainer>
      <Hero />
      <Services />
      <Footer />
    </AppContainer>
  );
}

export default App;
