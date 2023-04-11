import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Brand-name Electronics. Great Prices. Unbeatable Payments."
    description="The premier destination for top-quality brand name electronics. Our online store is dedicated to providing you with the latest and greatest products from the most reputable brands in the industry."
  >
    <VerticalFeatureRow
      title="PC Parts and Components"
      description="Whether you’re in the market for a new gaming pc, laptop, graphics card, motherboard or you’re just looking for a niche component, we’ve got you covered. We stock over 3,000 unique products and maintain accurate daily inventory levels."
      image="/assets/images/feature.svg"
      imageAlt="Shop Parts"
    />
    <VerticalFeatureRow
      title="High Quality Brand Names"
      description="Our team is knowledgeable with the latest technology trends and product releases, and we carefully select each product to ensure that it meets our quality standards and provides the best value to our customers."
      image="/assets/images/feature2.svg"
      imageAlt="Quality Hardware and Brands"
      reverse
    />
    <VerticalFeatureRow
      title="Get 10% Off w/ 85+ Crypto Coins"
      description="We are passionate about technology and decentralized payment protocols. That’s why we accept over 85 different virtual currencies (cryptocurrencies) and offer substantial discounts for doing so! It’s our way of passing on better pricing to our valued customers while strengthening mainstream adoption and widespread use of cryptocurrencies."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
