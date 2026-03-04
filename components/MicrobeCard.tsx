import { Microbe } from '@/types/microbe';

interface MicrobeCardProps {
  microbe: Microbe;
}

export default function MicrobeCard({ microbe }: MicrobeCardProps) {
  // function to detect the color from the role
  const getRoleBadgeStyle = (role: string) => {
    switch (role) {
      case 'beneficial':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'pathogenic':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'neutral':
      default:
        return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  // function to detect the color from the type
  const getTypeBadgeStyle = (type: string) => {
    return type === 'bacteria'
      ? 'bg-blue-50 text-blue-700 border-blue-200'
      : 'bg-purple-50 text-purple-700 border-purple-200';
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow duration-200 flex flex-col h-full justify-between">
      {/*Top Part*/}
      <div className="mb-4">
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="text-lg font-semibold text-gray-900 leading-tight">
            {microbe.name}
          </h3>
          <span
            className={`px-2.5 py-1 text-xs font-medium border rounded-full whitespace-nowrap ${getTypeBadgeStyle(
              microbe.type
            )}`}
          >
            {microbe.type}
          </span>
        </div>

        {/* Role of microbe */}
        <div className="flex items-center gap-2 mt-3">
          <span className="text-sm text-gray-500">Role:</span>
          <span
            className={`px-2.5 py-0.5 text-xs font-medium border rounded-full capitalize ${getRoleBadgeStyle(
              microbe.role
            )}`}
          >
            {microbe.role}
          </span>
        </div>
      </div>

      {/* Footer part */}
      <div className="mt-auto pt-4 border-t border-gray-50">
        <div className="flex justify-between text-sm mb-1.5">
          <span className="text-gray-500 font-medium">Relative Abundance</span>
          <span className="font-semibold text-gray-700">
            {microbe.abundance}%
          </span>
        </div>
        {/* Progress-bar */}
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div
            className="bg-indigo-500 h-2 rounded-full"
            style={{ width: `${microbe.abundance}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
