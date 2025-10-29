"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TeamCardOne from '@/components/sections/team/TeamCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Award, Camera, Compass, HelpCircle, Package, Quote, Sparkles, Star, Truck, Users } from "lucide-react";

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="entrance-slide"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://images.pexels.com/photos/13142739/pexels-photo-13142739.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          brandName="Wild Adventures"
          button={{
            text: "Book Safari",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Discover Africa's Wild Heart"
          description="Embark on unforgettable safari adventures through pristine wilderness. Experience breathtaking wildlife encounters, luxury accommodations, and expert-guided expeditions in Africa's most spectacular game reserves."
          tag="Premium Safari Experience"
          tagIcon={Compass}
          buttons={[
            {
              text: "Book Your Safari",
              href: "contact"
            },
            {
              text: "View Packages",
              href: "pricing"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/12445013/pexels-photo-12445013.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="A serene scene of zebras standing amidst trees during sunset in Bela-Bela, South Africa."
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Wild Adventures Safari"
          description={[
            "For over two decades, we've been crafting extraordinary safari experiences that connect travelers with Africa's untamed wilderness.",
            "Our expert guides, luxury accommodations, and commitment to conservation ensure every moment of your journey creates memories that last a lifetime."
          ]}
          buttons={[
            {
              text: "Our Story",
              href: "about"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Safari Adventures"
          description="Experience the magic of African wildlife through our expertly curated safari experiences"
          tag="What We Offer"
          tagIcon={Star}
          features={[
            {
              title: "Wildlife Photography Tours",
              description: "Capture stunning wildlife moments with professional photography guidance and premium equipment access",
              icon: Camera,
              button: {
                text: "Learn More",
                href: "features"
              }
            },
            {
              title: "Game Drive Adventures",
              description: "Explore vast savannas in comfortable 4x4 vehicles with experienced local guides who know every trail",
              icon: Truck,
              button: {
                text: "View Routes",
                href: "features"
              }
            },
            {
              title: "Luxury Bush Camps",
              description: "Stay in premium eco-friendly accommodations that blend comfort with authentic wilderness experiences",
              icon: Users,
              button: {
                text: "See Accommodations",
                href: "pricing"
              }
            }
          ]}
          layout="default"
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Safari Packages"
          description="Choose your perfect African adventure from our carefully crafted safari experiences"
          tag="Packages"
          tagIcon={Package}
          plans={[
            {
              id: "explorer",
              price: "$3,500",
              name: "Explorer Safari",
              buttons: [
                {
                  text: "Book Now",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "pricing"
                }
              ],
              features: [
                "5-day guided safari",
                "Shared game drives",
                "Standard camping accommodation",
                "All meals included",
                "Professional guide"
              ]
            },
            {
              id: "premium",
              badge: "Most popular adventure",
              badgeIcon: Sparkles,
              price: "$6,800",
              name: "Premium Safari",
              buttons: [
                {
                  text: "Book Now",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "pricing"
                }
              ],
              features: [
                "8-day luxury safari",
                "Private vehicle & guide",
                "Luxury tented camps",
                "Gourmet meals & drinks",
                "Photography equipment",
                "Airport transfers"
              ]
            },
            {
              id: "ultimate",
              price: "$12,500",
              name: "Ultimate Safari",
              buttons: [
                {
                  text: "Book Now",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "pricing"
                }
              ],
              features: [
                "14-day exclusive safari",
                "Multiple game reserves",
                "5-star lodge accommodations",
                "Private chef & butler",
                "Helicopter transfers",
                "Conservation activities",
                "Cultural experiences"
              ]
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardOne
          title="Expert Safari Guides"
          description="Meet our passionate team of local experts who bring Africa's wilderness to life"
          tag="Our Guides"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Kofi Asante",
              role: "Senior Guide",
              imageSrc: "https://images.pexels.com/photos/12139246/pexels-photo-12139246.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Black and white photo of two men standing outdoors in uniforms, conveying strength."
            },
            {
              id: "2",
              name: "Sarah Mwangi",
              role: "Wildlife Expert",
              imageSrc: "https://images.pexels.com/photos/34415337/pexels-photo-34415337.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Detailed view of a person holding a camera in natural light, perfect for photography themes."
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Safari Adventures Stories"
          description="Hear from travelers who experienced the magic of African wilderness with us"
          tag="Testimonials"
          tagIcon={Quote}
          testimonials={[
            {
              id: "1",
              name: "Michael Johnson",
              role: "Adventure Photographer",
              company: "National Geographic",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/34415337/pexels-photo-34415337.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Detailed view of a person holding a camera in natural light, perfect for photography themes."
            },
            {
              id: "2",
              name: "Emma Rodriguez",
              role: "Travel Blogger",
              company: "Wanderlust Magazine",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7009502/pexels-photo-7009502.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A young woman wrapped in a red sleeping bag, smiling with a serene expression."
            },
            {
              id: "3",
              name: "David & Lisa Chen",
              role: "Wildlife Enthusiasts",
              company: "Adventure Seekers",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/2386832/pexels-photo-2386832.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A couple embraces on rocky terrain during a golden sunset in Cape Town."
            },
            {
              id: "4",
              name: "The Thompson Family",
              role: "Family Adventurers",
              company: "Family Travel Co",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/33239448/pexels-photo-33239448.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "A cheerful family enjoying a fun photo moment on a Cape Town beach."
            },
            {
              id: "5",
              name: "Adventure Group 2023",
              role: "Corporate Retreat",
              company: "TechCorp Africa",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8760429/pexels-photo-8760429.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Three women smiling and embracing at the beach, enjoying a summer day together."
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Featured & Trusted By"
          description="Recognized by leading travel and wildlife organizations worldwide"
          tag="Media Recognition"
          tagIcon={Award}
          logos={[
            "https://images.pexels.com/photos/15483696/pexels-photo-15483696.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/7722856/pexels-photo-7722856.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/18937023/pexels-photo-18937023.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/16744357/pexels-photo-16744357.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/6867964/pexels-photo-6867964.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11022601/pexels-photo-11022601.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11644937/pexels-photo-11644937.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about planning your African safari adventure"
          tag="FAQ"
          tagIcon={HelpCircle}
          faqs={[
            {
              id: "1",
              title: "What's the best time of year for a safari?",
              content: "The dry season (May to October) is ideal for wildlife viewing as animals gather around water sources. However, each season offers unique experiences - wet season brings lush landscapes and baby animals."
            },
            {
              id: "2",
              title: "What should I pack for a safari?",
              content: "Pack neutral-colored clothing, sturdy walking boots, sun protection, insect repellent, and a good camera. We provide a detailed packing list upon booking confirmation."
            },
            {
              id: "3",
              title: "Are safaris safe for families with children?",
              content: "Absolutely! We offer family-friendly safari packages with age-appropriate activities and accommodations. Children must be at least 6 years old for game drives."
            },
            {
              id: "4",
              title: "Do I need vaccinations for an African safari?",
              content: "Some vaccinations may be required depending on your destination and travel history. We recommend consulting with a travel medicine specialist 6-8 weeks before departure."
            },
            {
              id: "5",
              title: "What wildlife can I expect to see?",
              content: "You'll have opportunities to see the 'Big Five' (lion, leopard, elephant, rhino, buffalo) plus countless other species including giraffes, zebras, cheetahs, and over 400 bird species."
            }
          ]}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Plan Your Safari Adventure"
          description="Ready to embark on the journey of a lifetime? Get in touch with our safari experts to customize your perfect African adventure."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            },
            {
              name: "guests",
              type: "number",
              placeholder: "Number of Guests",
              required: true
            },
            {
              name: "dates",
              type: "text",
              placeholder: "Preferred Dates",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your dream safari experience...",
            rows: 4,
            required: true
          }}
          buttonText="Book My Safari"
          imageSrc="https://images.pexels.com/photos/30878973/pexels-photo-30878973.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Scenic view of African savannah with acacia trees at sunset, glowing warm tones."
          mediaPosition="right"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Safari Packages",
              items: [
                {
                  label: "Explorer Safari",
                  href: "pricing"
                },
                {
                  label: "Premium Safari",
                  href: "pricing"
                },
                {
                  label: "Ultimate Safari",
                  href: "pricing"
                },
                {
                  label: "Custom Packages",
                  href: "contact"
                }
              ]
            },
            {
              title: "Destinations",
              items: [
                {
                  label: "Kenya Safaris",
                  href: "destinations"
                },
                {
                  label: "Tanzania Adventures",
                  href: "destinations"
                },
                {
                  label: "South Africa Tours",
                  href: "destinations"
                },
                {
                  label: "Botswana Expeditions",
                  href: "destinations"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Our Guides",
                  href: "team"
                },
                {
                  label: "Conservation",
                  href: "conservation"
                },
                {
                  label: "Contact",
                  href: "contact"
                }
              ]
            }
          ]}
          logoSrc="https://images.pexels.com/photos/13142739/pexels-photo-13142739.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          copyrightText="© 2025 Wild Adventures Safari. All rights reserved."
          onPrivacyClick={null}
        />
      </div>
    </ThemeProvider>
  );
}