import type { Team } from "../types/team";
import { TeamCard } from "./TeamCard";

interface TeamListProps {
  teams: Team[];
}

export function TeamList({ teams }: TeamListProps) {
  if (teams.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
      {teams.map((team) => (
        <TeamCard key={team.id} team={team} />
      ))}
    </div>
  );
}
