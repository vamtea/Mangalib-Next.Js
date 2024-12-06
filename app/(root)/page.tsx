import {
  ActiveSection,
  Container,
  ForumTopik,
  Header,
  LastUpdates,
  NewSection,
  ReviewSection,
  Slider,
} from "@/shared/components/shared";
import { CollectionSection } from "@/shared/components/shared/collection-section";
import { NowReading } from "@/shared/components/shared/now-read";

export default function Home() {
  return (
    <>
      <Header />
      <Slider />
      <NowReading />
      <Container className="flex gap-4">
        <LastUpdates />
        <div className="flex flex-col flex-1">
          <ForumTopik />
          <ReviewSection />
          <CollectionSection />
          <ActiveSection />
          <NewSection />
        </div>
      </Container>
    </>
  );
}
