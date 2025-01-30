import { motion } from "framer-motion";

import {
  ServiceCard,
  ServiceContent,
  ServiceDescription,
  ServiceHeader,
  ServiceImages,
  ServicesGrid,
  ServicesSection,
  SocialLink,
  SocialSection,
} from "../styles/services";
import { SERVICES } from "../utils";

const Services = () => {
  return (
    <ServicesSection>
      <ServicesGrid>
        {SERVICES.map((service, index) => (
          <ServiceCard
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <ServiceHeader>
              <span className="icon">{service.icon}</span>
              <h3>{service.title}</h3>
            </ServiceHeader>

            <ServiceContent>
              <ServiceDescription>
                <p>{service.description}</p>
              </ServiceDescription>

              {service.images && (
                <ServiceImages
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  viewport={{ once: true }}
                  data-image-count={service.images.length}
                  data-service={service.title}
                >
                  {service.images.map((img, imgIndex) => (
                    <motion.div
                      key={imgIndex}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={img}
                        alt={`${service.title} example ${imgIndex + 1}`}
                        loading={index < 2 ? "eager" : "lazy"}
                        onError={(e) => {
                          console.error(
                            `Failed to load image ${imgIndex + 1} for ${
                              service.title
                            }:`,
                            e
                          );
                          e.target.style.display = "none";
                        }}
                      />
                    </motion.div>
                  ))}
                </ServiceImages>
              )}
            </ServiceContent>
          </ServiceCard>
        ))}
      </ServicesGrid>

      <SocialSection>
        <SocialLink
          href="https://www.facebook.com/groups/176820612728680/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
          </svg>
          Следете всичко ново около нас
        </SocialLink>
      </SocialSection>
    </ServicesSection>
  );
};

export default Services;
