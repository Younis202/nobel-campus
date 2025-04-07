"use client";

import { usePathname } from "next/navigation";
import { regionPaths } from "./NavigationData";

const CurrentRegionIndicator = () => {
  const pathname = usePathname();
  
  // Check if we're on a region-specific page
  const currentPath = Object.keys(regionPaths).find(path => 
    pathname?.startsWith(path)
  );
  
  if (!currentPath) return null;
  
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="py-2 text-sm text-gray-500">
          <span>Exploring destinations in {regionPaths[currentPath]}</span>
        </div>
      </div>
    </div>
  );
};

export default CurrentRegionIndicator;