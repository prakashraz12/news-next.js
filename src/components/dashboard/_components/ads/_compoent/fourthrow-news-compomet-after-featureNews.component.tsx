import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export const FourthrowNewsCompometAfterFeatureNewsComponent = () => {
  return (
    <div className="w-full">
      <FourthrowNewsCompometAfterFeatureNewsComponentMainCard />
    </div>
  );
};

const FourthrowNewsCompometAfterFeatureNewsComponentMainCard = () => {
  return (
      <div className="gird  grid-cols-2">
        <div>
          <Skeleton className="w-full h-[400px]" />
        </div>
        <div>
          <div className="flex flex-col justify-center">
            
          <Skeleton className="w-[10%] h-[100px]" />
          </div>
        </div>
      </div>

  );
};
