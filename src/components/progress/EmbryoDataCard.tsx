import { BeakerIcon } from "@heroicons/react/24/outline";
import type { EmbryoData } from "../../models/ivf-types";

interface EmbryoDataCardProps {
  embryoData: EmbryoData;
}

export function EmbryoDataCard({ embryoData }: EmbryoDataCardProps) {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-0 shadow-lg rounded-lg">
      <div className="px-6 py-4 border-b border-blue-200">
        <h3 className="text-lg font-semibold text-blue-700 flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <BeakerIcon className="w-5 h-5 text-white" />
          </div>
          Kết quả thụ tinh & phôi
        </h3>
      </div>
      <div className="p-6 space-y-4">
        {/* Egg Summary */}
        <div className="bg-white p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">
              Tổng số trứng sử dụng:
            </span>
            <span className="text-lg font-bold text-blue-600">
              {embryoData.totalEggs}
            </span>
          </div>
        </div>

        {/* Embryo Types */}
        <div className="space-y-3">
          <div className="max-h-64 overflow-y-auto space-y-3 pr-2">
            {embryoData.embryoTypes.map((embryoType, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg border-l-4 border-blue-400"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium text-gray-900">
                    {embryoType.type}
                  </span>
                  <span className="text-lg font-bold text-blue-600">
                    {embryoType.count}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  <h4>Chất lượng: {embryoType.quality}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total Summary */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 rounded-lg text-white">
          <div className="flex items-center justify-between">
            <span className="font-medium">Tổng số phôi thành công:</span>
            <span className="text-2xl font-bold">
              {embryoData.totalEmbryos}
            </span>
          </div>
          <div className="text-sm opacity-90 mt-1">
            Tỷ lệ thành công:{" "}
            {Math.round((embryoData.totalEmbryos / embryoData.totalEggs) * 100)}
            %
          </div>
        </div>
      </div>
    </div>
  );
}
