import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Ready for a crypto-enabled shopping experience?"
      subtitle="Save 10%."
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
