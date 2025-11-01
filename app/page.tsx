import HomeHero from "./my-components/homepage/hero/HeroDesktop";
import HeroMobile from "./my-components/homepage/hero/HeroMobile";
import TopPlayers from "./my-components/homepage/topPlayersSection/TopPlayers";
import SectionWrapper from "./my-components/shared/SectionWrapper";

export default function Home() {
  return (
    <div>
      <main className="mt-0 lg:mt-5 lg:py-8">
        {/* hero banner_____*/}

        {/* desktop view */}
        <div className="hidden mdplus:block">
          <HomeHero />
        </div>

        {/* mobile view  */}
        <div className="mdplus:hidden">
          <HeroMobile />
        </div>
        <SectionWrapper children={<TopPlayers />} sectionLabel="Top players" />
        {/* <TopPlayers /> */}
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        footer
      </footer>
    </div>
  );
}
