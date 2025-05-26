// pages/index.tsx
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import type { HeroData, ServiceFeatureData } from "@/src/types";
import { getHeroData } from "./api/services/heroService";
import Hero from "@/src/components/home/Hero";
import TopToolBar from "@/src/components/layout/TopToolbar";
import Services from "@/src/components/home/Services";
import { getServiceFeatures } from "./api/services/servicesService";
import OfferedProducts from "@/src/components/home/OfferedProducts";

interface HomeProps {
  heroData: HeroData;
  serviceFeatures: ServiceFeatureData;
}

export default function Home({ heroData, serviceFeatures }: HomeProps) {
  return (
    <main>
      <Container>
        <Header />
        <TopToolBar />
        <Hero data={heroData} />
        <Services data={serviceFeatures} />
        <OfferedProducts />
      </Container>
    </main>
  );
}

export async function getServerSideProps() {
  try {
    const [heroData, serviceFeatures] = await Promise.all([
      getHeroData(),
      getServiceFeatures(),
    ]);

    return {
      props: {
        heroData,
        serviceFeatures,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        heroData: [],
        serviceFeatures: [],
      },
    };
  }
}
