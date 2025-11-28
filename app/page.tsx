
import SponsorsSection from '@/components/Home/Sponsor/Sponsor';
import HeroSection from '@/components/Hero/Hero';
import ShopProductsSection from '@/components/Home/ShopProducts/ShopProducts';
import SocialSection from '@/components/Home/Social/Social';
import OwnersSection from '@/components/Home/Owners/page';

export default function Home() {
  return (
    <>
      <HeroSection />

      <section>
        <ShopProductsSection />
      </section>

      <section>
        <SocialSection />
      </section>

      <section>
        <OwnersSection/>
      </section>
    </>
  );
}
