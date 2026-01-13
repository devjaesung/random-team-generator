import { useState } from "react";
import type { Team } from "./types/team";
import { parseNames, createTeams } from "./utils/teamUtils";
import { TeamForm } from "./components/TeamForm";
import { TeamList } from "./components/TeamList";
import { WarningModal } from "./components/WarningModal";

function App() {
  const [teamCount, setTeamCount] = useState(4);
  const [namesInput, setNamesInput] = useState("");
  const [teams, setTeams] = useState<Team[]>([]);
  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  const handleGenerate = () => {
    const names = parseNames(namesInput);
    if (names.length === 0) {
      setTeams([]);
      return;
    }

    if (names.length < teamCount) {
      setWarningMessage(
        `참여 인원(${names.length}명)이 팀 개수(${teamCount}팀)보다 적습니다. 팀 개수를 조정해주세요.`
      );
      setShowWarning(true);
      return;
    }

    const generatedTeams = createTeams(names, teamCount);
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
          namesInput={namesInput}
          onTeamCountChange={setTeamCount}
          onNamesInputChange={setNamesInput}
          onGenerate={handleGenerate}
        />

        <TeamList teams={teams} />

        <WarningModal
          isOpen={showWarning}
          message={warningMessage}
          onClose={() => setShowWarning(false)}
        />
      </div>
    </div>
  );
}

export default App;
