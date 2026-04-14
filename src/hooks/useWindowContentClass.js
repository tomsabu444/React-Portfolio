import { useMemo } from 'react';

const DEFAULT_MAXIMIZED_CLASS = 'xl:max-w-[75%] xl:mx-auto';

const useWindowContentClass = ({
  baseClassName,
  isMaximized,
  enableMaximizedConstraint,
  maximizedClassName = DEFAULT_MAXIMIZED_CLASS
}) => {
  return useMemo(() => {
    if (isMaximized && enableMaximizedConstraint) {
      return `${baseClassName} ${maximizedClassName}`;
    }

    return baseClassName;
  }, [baseClassName, isMaximized, enableMaximizedConstraint, maximizedClassName]);
};

export default useWindowContentClass;