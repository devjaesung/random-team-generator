import { Select } from "./Select";

interface TeamFormProps {
  teamCount: number;
  maxTeamSize: number;
  namesInput: string;
  onTeamCountChange: (value: number) => void;
  onMaxTeamSizeChange: (value: number) => void;
  onNamesInputChange: (value: string) => void;
  onGenerate: () => void;
}

export function TeamForm({
  teamCount,
  maxTeamSize,
  namesInput,
  onTeamCountChange,
  onMaxTeamSizeChange,
  onNamesInputChange,
  onGenerate,
}: TeamFormProps) {
  const teamCountOptions = Array.from({ length: 10 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}`,
  }));

  const maxTeamSizeOptions = Array.from({ length: 10 }, (_, i) => ({
    value: i + 1,
    label: `${i + 1}`,
  }));

  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6">
      <div className="space-y-4 sm:space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              팀 개수
            </label>
            <Select
              value={teamCount}
              options={teamCountOptions}
              onChange={onTeamCountChange}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              팀당 최대 인원 수
            </label>
            <Select
              value={maxTeamSize}
              options={maxTeamSizeOptions}
              onChange={onMaxTeamSizeChange}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            이름 입력 (엔터로 구분)
          </label>
          <textarea
            value={namesInput}
            onChange={(e) => onNamesInputChange(e.target.value)}
            placeholder="일오즈&#10;이오즈&#10;삼오즈&#10;사오즈"
            rows={8}
            className="w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none bg-white"
          />
        </div>

        <button
          onClick={onGenerate}
          className="cursor-pointer w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors font-medium"
        >
          팀 생성
        </button>
      </div>
    </div>
  );
}
