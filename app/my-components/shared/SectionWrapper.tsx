import SectionTitle from "./SectionTitle";

interface ISectionWrapper {
  children: React.ReactNode;
  isText: boolean;
  sectionLabel: string;
}
const SectionWrapper = ({ children, sectionLabel }: ISectionWrapper) => {
  return (
    <section className="container mx-auto py-10 px-2 xs:px-4 mdplus:px-6">
      <SectionTitle label={sectionLabel} />
      {children}
    </section>
  );
};

export default SectionWrapper;
