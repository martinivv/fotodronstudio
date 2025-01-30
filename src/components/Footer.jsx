import {
  ContactInfo,
  FooterContent,
  FooterSection,
  MapContainer,
} from "../styles/footer";

const Footer = () => {
  return (
    <FooterSection>
      <FooterContent>
        <ContactInfo>
          <h3 style={{ fontSize: "1.2rem" }}>Контакти</h3>
          <p style={{ fontSize: "1.1rem" }}>
            📞 <a href="tel:+359887528752">0887 528 752</a>
          </p>
          <p style={{ fontSize: "1.1rem" }}>📍 гр. Ямбол, срещу Кауфланд</p>
        </ContactInfo>

        <MapContainer>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d400.7809518552302!2d26.51845611047112!3d42.47802890858513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a635cadfff97ef%3A0x37ffad3d1714c27f!2zS2F1ZmxhbmQg0K_QvNCx0L7Quw!5e0!3m2!1sen!2sbg!4v1738062187238!5m2!1sen!2sbg"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen=""
            loading="lazy"
          />
        </MapContainer>
      </FooterContent>
    </FooterSection>
  );
};

export default Footer;
