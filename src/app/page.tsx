import HeroPoster from "@/components/blocks/HeroPoster";
import StatGrid from "@/components/blocks/StatGrid";
import PhotoStrip from "@/components/blocks/PhotoStrip";
import BookCallout from "@/components/blocks/BookCallout";
import CampCallout from "@/components/blocks/CampCallout";
import ColumnBlock from "@/components/blocks/ColumnBlock";
import Section from "@/components/atoms/Section";
import SectionHead from "@/components/atoms/SectionHead";
import Button from "@/components/atoms/Button";
import ChapterIndicator from "@/components/chrome/ChapterIndicator";

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

const chapters = [
  { id: "hero", label: "Mad Dog" },
  { id: "record", label: "The Record" },
  { id: "then-and-now", label: "Then & Now" },
  { id: "book", label: "The Book" },
  { id: "camp", label: "The Camp" },
  { id: "columns", label: "Speaking" },
];

export default function HomePage() {
  return (
    <>
      <ChapterIndicator chapters={chapters} />

      <HeroPoster />

      <Section id="record">
        <SectionHead overline="The Record" title="Eleven Seasons. One Number." />
        <StatGrid />
      </Section>

      <Section flushTop id="then-and-now">
        <PhotoStrip />
      </Section>

      <Section id="book">
        <SectionHead
          overline="The Book"
          title="Taming Mad Dog"
          action={
            <Button kind="ghost" href="/book">
              Full chapter →
            </Button>
          }
        />
        <BookCallout />
      </Section>

      <Section variant="ink-50" id="camp">
        <SectionHead
          overline="The Camp"
          title="Up-Front Lineman Camp"
          action={
            <Button kind="ghost" href="/camp">
              Register →
            </Button>
          }
        />
        <CampCallout />
      </Section>

      <Section id="columns">
        <SectionHead
          overline="Speaking & Press"
          title="The Work Now"
          action={
            <Button kind="ghost" href="/coaching#recent">
              Recent →
            </Button>
          }
        />
        <ColumnBlock />
      </Section>
    </>
  );
}
