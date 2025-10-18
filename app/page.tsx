import HomeHero from "./my-components/homepage/HomeHero";

export default function Home() {
  return (
    <div>
      <main className="mt-5 py-8">
        <HomeHero />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        footer
      </footer>
    </div>
  );
}
