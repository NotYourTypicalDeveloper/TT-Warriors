import PlayerCard from "./PlayerCard";
import { players } from "@/app/data/players";

const TopPlayers = () => {
  const topPlayersArr = players
    .sort((a, b) => b.totalWins - a.totalWins)
    .slice(0, 5);

  return (
    <section className="container mx-auto">
      <h1>Top players</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 lg:gap-6">
        {topPlayersArr.map((el) => (
          <PlayerCard
            key={el.id}
            imageUrl={`/assets/${el.id}.webp`}
            firstName={el.firstName}
            lastName={el.lastName}
            wins={el.totalWins}
            country={el.country}
          />
        ))}
      </div>
    </section>
  );
};

export default TopPlayers;
