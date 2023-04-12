import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Large discounts and extreme value."
    description="We offer high quality, brand name hardware from leading manufacturers. We are dedicated to providing you with the latest and greatest products from the most reputable brands in the industry."
  >
    <VerticalFeatureRow
      title="Huge Inventory"
      description="We stock over 3,350+ items including desktops, laptops, parts and components while maintaining accurate daily inventory levels."
      image="/assets/images/feature.svg"
      imageAlt="Shop pc's, parts and components"
    />
    <VerticalFeatureRow
      title="High Quality Brands"
      description="Our team is knowledgeable with the latest technology trends and product releases. We carefully select each product to ensure that it meets our quality standards and provides the best value."
      image="/assets/images/feature2.svg"
      imageAlt="Quality Hardware and Brands"
      reverse
    />
    <VerticalFeatureRow
      title="10% Discount Storewide"
      description="We incentivize the use of cryptocurrencies by offering a 10% discount across our entire store. Pay us in your coins of choice! Our payment gateway accepts over 85+ different blockchains."
      image="/assets/images/feature3.svg"
      imageAlt="Crypto powered discounts"
    />
  </Section>
);

export { VerticalFeatures };
