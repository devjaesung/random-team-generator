import { useState } from "react";
import type { Team } from "./types/team";
import { parseNames, createTeams } from "./utils/teamUtils";
import { TeamForm } from "./components/TeamForm";
import { TeamList } from "./components/TeamList";

function App() {
  const [teamCount, setTeamCount] = useState(4);
  const [maxTeamSize, setMaxTeamSize] = useState(4);
  const [namesInput, setNamesInput] = useState("");
  const [teams, setTeams] = useState<Team[]>([]);

  const handleGenerate = () => {
    const names = parseNames(namesInput);
    if (names.length === 0) {
      setTeams([]);
      return;
    }
    const generatedTeams = createTeams(names, teamCount, maxTeamSize);
    setTeams(generatedTeams);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-800">
          랜덤 팀 매칭
        </h1>

        <TeamForm
          teamCount={teamCount}
          maxTeamSize={maxTeamSize}
          namesInput={namesInput}
          onTeamCountChange={setTeamCount}
          onMaxTeamSizeChange={setMaxTeamSize}
          onNamesInputChange={setNamesInput}
          onGenerate={handleGenerate}
        />

        <TeamList teams={teams} />
      </div>
    </div>
  );
}

export default App;
