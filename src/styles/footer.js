import styled from "@emotion/styled";

export const FooterSection = styled.footer`
  background: #1a1a1a;
  color: white;
  padding: 4rem 0;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const MapContainer = styled.div`
  height: 300px;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  background: #333;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }

  &::after {
    content: "Map loading...";
    color: #666;
  }
`;
