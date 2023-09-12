import React from "react";
import {
  ServicesContainer,
  ServiceItem,
  ServiceIcon,
  ServiceTitle,
  ServiceDescription,
} from "./styles"; // Create styled components for ServicesContainer, ServiceItem, etc.

const Services = () => {
  return (
    <ServicesContainer>
      <ServiceItem>
        <ServiceIcon>Icon1</ServiceIcon>
        <ServiceTitle>Service 1</ServiceTitle>
        <ServiceDescription>Description 1</ServiceDescription>
      </ServiceItem>
      <ServiceItem>
        <ServiceIcon>Icon2</ServiceIcon>
        <ServiceTitle>Service 2</ServiceTitle>
        <ServiceDescription>Description 2</ServiceDescription>
      </ServiceItem>
      {/* Add more ServiceItems as needed */}
    </ServicesContainer>
  );
};

export default Services;
