"use client";

import { regionLabels } from "@/types/destinations";

interface RegionSelectorProps {
  selectedRegion: string;
  onRegionChange: (region: string) => void;
}

export function RegionSelector({ selectedRegion, onRegionChange }: RegionSelectorProps) {
  return (
    <div className="flex justify-center mb-8">
      <div className="inline-flex p-1 bg-white rounded-lg shadow-sm border border-gray-200">
        {Object.keys(regionLabels).map(region => (
          <button
            key={region}
            onClick={() => onRegionChange(region)}
            className={`px-4 py-2.5 text-sm font-medium rounded-md transition-colors duration-200 ${
              selectedRegion === region 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            {regionLabels[region]}
          </button>
        ))}
      </div>
    </div>
  );
}