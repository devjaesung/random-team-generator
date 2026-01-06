import type { Team } from "../types/team";

export function parseNames(input: string): string[] {
  return input
    .split("\n")
    .map((name) => name.trim())
    .filter((name) => name.length > 0);
}

export function shuffleNames(names: string[]): string[] {
  const shuffled = [...names];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function createTeams(
  names: string[],
  teamCount: number,
  maxTeamSize: number
): Team[] {
  const teams: Team[] = Array.from({ length: teamCount }, (_, i) => ({
    id: i + 1,
    members: [],
  }));

  const shuffled = shuffleNames(names);
  let nameIndex = 0;

  for (let teamIndex = 0; teamIndex < teamCount; teamIndex++) {
    while (
      teams[teamIndex].members.length < maxTeamSize &&
      nameIndex < shuffled.length
    ) {
      teams[teamIndex].members.push(shuffled[nameIndex]);
      nameIndex++;
    }
  }

  return teams;
}
