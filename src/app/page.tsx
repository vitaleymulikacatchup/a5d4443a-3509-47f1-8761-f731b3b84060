"use client";
import { ThemeProvider } from '@/providers/ThemeProvider';
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';

const assetMap = [
  { id: 'hero-image', url: 'https://images.pexels.com/photos/17632052/pexels-photo-17632052.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Showroom featuring luxury sports cars, Lamborghini models, with sleek design and modern architecture.' },
  { id: 'feature-image', url: 'https://images.pexels.com/photos/10866820/pexels-photo-10866820.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'A vintage hot rod showcased at a car show, attracting onlookers with its retro design.' },
  { id: 'product-image-1', url: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'A sleek red sports car driving fast on a forest road, showcasing speed and luxury.' },
  { id: 'product-image-2', url: 'https://images.pexels.com/photos/14836357/pexels-photo-14836357.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'A stylish blue SUV parked by the ocean in Busan, South Korea, on a sunny day.' },
  { id: 'product-image-3', url: 'https://images.pexels.com/photos/27639321/pexels-photo-27639321.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'A stylish black Kia K5 sedan parked in a modern urban area, reflecting city architecture.' },
];

const navItems = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Features', id: 'feature' },
  { name: 'Products', id: 'product' },
  { name: 'Contact', id: 'contact' },
];

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="/brand/carshop-logo.svg"
          brandName="CarShop"
          navItems={navItems}
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Discover Your Dream Car"
            description="Offering the finest selection of vehicles to fit your lifestyle."
            imageSrc={assetMap.find(a => a.id === 'hero-image')?.url}
            buttons={[
              { text: 'Explore Now', href: 'features' },
              { text: 'Contact Us', href: 'contact' },
            ]}
          />
        </div>
      </div>
      <div id="about" data-section="about" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <TextSplitAbout
            title="About Us"
            description={[
              "At CarShop, we are passionate about delivering the best car-buying experience.",
              "Our mission is to connect you with the car of your dreams while ensuring transparency and trust.",
            ]}
            buttons={[{ text: 'Read More', href: 'about' }]}
          />
        </div>
      </div>
      <div id="feature" data-section="feature" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            features={[{
              title: 'Performance',
              description: 'Experience top-notch performance in every ride.',
              imageSrc: assetMap.find(a => a.id === 'feature-image')?.url,
            }]}
            title="Outstanding Features"
            description="Discover the features that make our cars stand out."
          />
        </div>
      </div>
      <div id="product" data-section="product" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <ProductCardTwo
            products={[
              {
                id: '1',
                brand: 'CarShop',
                name: 'Eclipse Motion Pro',
                price: '$150,000',
                rating: 5,
                reviewCount: '1.2k',
                imageSrc: assetMap.find(a => a.id === 'product-image-1')?.url,
              },
              {
                id: '2',
                brand: 'CarShop',
                name: 'Blue Odyssey SUV',
                price: '$90,000',
                rating: 4,
                reviewCount: '800',
                imageSrc: assetMap.find(a => a.id === 'product-image-2')?.url,
              },
              {
                id: '3',
                brand: 'CarShop',
                name: 'Green Luxury Sedan',
                price: '$130,000',
                rating: 5,
                reviewCount: '950',
                imageSrc: assetMap.find(a => a.id === 'product-image-3')?.url,
              }
            ]}
            title="Our Collection"
          />
        </div>
      </div>
      <div id="contact" data-section="contact" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Get in Touch"
            title="Contact Us"
            description="Reach out to us for more information or assistance."
            imageSrc={assetMap.find(a => a.id === 'contact-image')?.url}
            mediaPosition="left"
          />
        </div>
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24 bg-blue-50 text-blue-900">
        <div className="mx-auto px-4 md:px-6">
          <FooterBaseReveal
            columns={[
              { title: 'About', items: [
                { label: 'Our Story', href: 'about' },
                { label: 'Our Team', href: 'team' }
              ]},
              { title: 'Support', items: [
                { label: 'Contact Us', href: 'contact' },
                { label: 'FAQ', href: 'faq' }
              ]},
            ]}
            copyrightText="© 2025 | CarShop"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
