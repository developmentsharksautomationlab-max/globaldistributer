import { BrandsSection } from "@/components/replica/BrandsSection";
import { BuyersSourcingBlock } from "@/components/replica/BuyersSourcingBlock";
import { HeroWithPills } from "@/components/replica/HeroWithPills";
import { ResellerSliders } from "@/components/replica/ResellerSliders";
import { ServicesBlock } from "@/components/replica/ServicesBlock";
import { WholesaleGridBlock } from "@/components/replica/WholesaleGridBlock";

export default function HomePage() {
  return (
    <>
      <HeroWithPills />
      <BrandsSection />
      <ServicesBlock />
      <ResellerSliders />
      <WholesaleGridBlock />
      <BuyersSourcingBlock />
    </>
  );
}
