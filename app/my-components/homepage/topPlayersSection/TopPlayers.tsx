import PlayerCard from "./PlayerCard";
import { players } from "@/app/data/players";
import { v4 as uuidv4 } from "uuid";

const TopPlayers = () => {
  const topPlayersArr = players
    .sort((a, b) => b.totalWins - a.totalWins)
    .slice(0, 5);

  return (
    <section className="container mx-auto">
      <h1>Top players</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 lg:gap-6">
        {topPlayersArr.map((el) => (
          <PlayerCard
            key={el.id}
            imageUrl={`/assets/${el.id}.webp`}
            nickName={el.nickName}
            fullName={el.fullName}
            wins={el.totalWins}
            country={el.country}
          />
        ))}
      </div>
    </section>
  );
};

export default TopPlayers;
