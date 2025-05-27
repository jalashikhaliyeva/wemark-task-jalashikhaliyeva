// Modified Home page component
import Container from "@/src/components/layout/Container";
import Header from "@/src/components/layout/Header";
import type { HeroData, ServiceFeatureData, ProductsData } from "@/src/types";
import { getHeroData } from "./api/services/heroService";
import { getServiceFeatures } from "./api/services/servicesService";
import Hero from "@/src/components/home/Hero";
import TopToolBar from "@/src/components/layout/TopToolbar";
import Services from "@/src/components/home/Services";
import OfferedProducts from "@/src/components/home/OfferedProducts";
import { getProducts } from "./api/services/productsService";
import Partners from "@/src/components/home/Partners";
import Blogs from "@/src/components/home/Blogs";
import Head from "next/head";
import Footer from "@/src/components/layout/Footer";
import { useState, useEffect } from "react";
import NavBar from "@/src/components/layout/NavBar";

interface HomeProps {
  heroData: HeroData;
  serviceFeatures: ServiceFeatureData;
  products: ProductsData;
}

export default function Home({
  heroData,
  serviceFeatures,
  products,
}: HomeProps) {
  return (
    <>
      <main>
        <Head>
          <title>Jala Sh. | Wemark/Baku Electronics</title>
        </Head>
        <Container>
          <Header />
          <NavBar />
          <Hero data={heroData} />
          <Services data={serviceFeatures} />
          <OfferedProducts data={products} />
        </Container>
        <Blogs />
        <Partners />
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const [heroData, serviceFeatures, products] = await Promise.all([
      getHeroData(),
      getServiceFeatures(),
      getProducts(),
    ]);

    return {
      props: {
        heroData,
        serviceFeatures,
        products,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        heroData: [],
        serviceFeatures: [],
        products: [],
      },
    };
  }
}
