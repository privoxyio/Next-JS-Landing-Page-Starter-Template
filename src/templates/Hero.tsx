import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="https://shop.privoxy.io">
            <a>Our Store</a>
          </Link>
        </li>
        <li>
          <Link href="https://shop.privoxy.io/about-us/">
            <a>About Us</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'We are a Tech-focused e-retailer powered by\n'}
            <span className="text-primary-500">cryptocurrency payments</span>
          </>
        }
        description="Upgrade your hardware and save big."
        button={
          <Link href="https://shop.privoxy.io">
            <a>
              <Button xl>Shop Now</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
