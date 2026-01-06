import type { Team } from "../types/team";

interface TeamCardProps {
  team: Team;
}

export function TeamCard({ team }: TeamCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 border-l-4 border-blue-500">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800">
          Team {team.id}
        </h2>
        <span className="text-xs sm:text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded font-medium">
          {team.members.length}명
        </span>
      </div>
      <ul className="space-y-2">
        {team.members.length > 0 ? (
          team.members.map((member, index) => (
            <li
              key={index}
              className="text-sm sm:text-base text-gray-700 py-1.5 px-2 bg-gray-50 rounded"
            >
              {member}
            </li>
          ))
        ) : (
          <li className="text-sm sm:text-base text-gray-400 italic">
            인원 없음
          </li>
        )}
      </ul>
    </div>
  );
}
