import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { Services } from "@/components/home/Services";
import { WhyArambh } from "@/components/home/WhyArambh";
import { Showcase } from "@/components/home/Showcase";
import { Process } from "@/components/home/Process";
import { WhoWeBuildFor } from "@/components/home/WhoWeBuildFor";
import { FaqPreview } from "@/components/home/FaqPreview";
import { FinalCta } from "@/components/home/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <WhyArambh />
      <Showcase />
      <Process />
      <WhoWeBuildFor />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
