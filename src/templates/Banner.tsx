import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Ready for DEEP crypto discounts?"
      subtitle="Save 10% today"
      button={
        <Link href="https://shop.privoxy.io">
          <a>
            <Button>Shop Now</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
