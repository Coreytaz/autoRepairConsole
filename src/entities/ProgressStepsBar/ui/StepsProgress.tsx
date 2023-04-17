import { Check } from 'lucide-react';
import React from 'react';
import { FC, useMemo } from 'react';
import { useSteps } from 'react-step-builder';

import { cn } from '~shared/lib';

interface StepsProgressProps extends React.HTMLAttributes<HTMLDivElement> {

}

const StepsProgress: FC<StepsProgressProps> = ({ ...props }) => {
  const { total, current } = useSteps()
  const totalProggresSteps = useMemo(() => Array.from({ length: total }, (_, i) => i + 1), [total])

  return (
    <div className="mx-auto my-4 border-b-2 pb-4" {...props}>
      <div className="flex pb-3">
        {
          totalProggresSteps.map((step) => (
            <React.Fragment key={step}>
              <div className="flex-1">
                <div className={cn("w-10 h-10 mx-auto rounded-full text-lg text-white flex items-center", {
                  'bg-white border-2 border-gray-200': current <= step,
                  'bg-primary': current > step
                })}>
                  <span className={cn("text-white text-center w-full", {
                    'text-gray-700': current <= step,
                    'text-white': current > step,
                  })}>
                    {current > step ? <Check className="w-full" /> : step}
                  </span>
                </div>
              </div>
              {total !== step ? <div className="w-full mx-4 align-center items-center align-middle content-center flex grow">
                <div className="w-full bg-gray-100 rounded items-center align-middle align-center flex-1">
                  <div
                    className={cn("bg-primary w-0 text-xs leading-none py-1 text-center transition-all duration-300 text-gray-900 rounded", {
                      'w-full': current > step,
                      'w-1/2': current === step,
                      'delay-200': current === step
                    })}
                  ></div>
                </div>
              </div> : null}
            </React.Fragment>
          ))
        }
      </div>
    </div >
  );
};

export default StepsProgress;
