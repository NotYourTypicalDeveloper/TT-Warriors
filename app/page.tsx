import HomeHero from "./my-components/homepage/hero/HeroDesktop";
import HeroMobile from "./my-components/homepage/hero/HeroMobile";
import TopPlayers from "./my-components/homepage/topPlayersSection/TopPlayers";

export default function Home() {
  return (
    <div>
      <main className="mt-0 lg:mt-5 lg:py-8">
        {/* hero banner_____*/}

        {/* desktop view */}
        <div className="hidden 2lg:block">
          <HomeHero />
        </div>

        {/* mobile view  */}
        <div className="2lg:hidden">
          <HeroMobile />
        </div>
        <TopPlayers />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        footer
      </footer>
    </div>
  );
}
