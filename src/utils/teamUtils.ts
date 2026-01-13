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
  teamCount: number
): Team[] {
  const teams: Team[] = Array.from({ length: teamCount }, (_, i) => ({
    id: i + 1,
    members: [],
  }));

  const shuffled = shuffleNames(names);
  const totalMembers = shuffled.length;
  
  // 기본 팀당 인원 수 계산
  const baseSize = Math.floor(totalMembers / teamCount);
  // 나머지 인원 수 계산
  const remainder = totalMembers % teamCount;
  
  // 각 팀의 목표 인원 수 설정
  const teamSizes: number[] = Array.from({ length: teamCount }, (_, i) => 
    i < remainder ? baseSize + 1 : baseSize
  );

  let nameIndex = 0;
  for (let teamIndex = 0; teamIndex < teamCount; teamIndex++) {
    const targetSize = teamSizes[teamIndex];
    while (
      teams[teamIndex].members.length < targetSize &&
      nameIndex < shuffled.length
    ) {
      teams[teamIndex].members.push(shuffled[nameIndex]);
      nameIndex++;
    }
  }

  return teams;
}
