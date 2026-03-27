import {
  Hero,
  FeatureEasyToUse,
  FeatureSafety,
  FeatureDynamic,
  FeatureAI,
} from "@/components/landing";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div id="features">
        <FeatureEasyToUse />
        <FeatureSafety />
        <FeatureDynamic />
        <FeatureAI />
      </div>
    </>
  );
}
