import MaxWidth from "../components/MaxWidth";
import SectionTitle from "../components/SectionTitle";
import Specifications from "../components/Specifications";
import Footer from "../components/Footer";
import HeaderSection from "../components/IndexSections/Header";
import EfficiencySection from "../components/IndexSections/Efficiency";
import AccessibilitySection from "../components/IndexSections/Accessibility";
import WirelessCharging from "../components/IndexSections/WirelessCharging";
import HardwareButtons from "../components/IndexSections/HardwareButtons";

export default function Home() {
  return (
    <>
      <MaxWidth mt={{ base: "2rem", lg: "12rem" }} pb="8rem">
        <HeaderSection />
        <EfficiencySection />
        <AccessibilitySection />
        <HardwareButtons />
        <WirelessCharging />
        <Specifications />
      </MaxWidth>
      <Footer />
    </>
  );
}
