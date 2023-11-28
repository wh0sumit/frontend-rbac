import { cn } from "@/lib/utils";

interface ViewContainerProps {
  children: React.ReactNode;
  className?: string;
  attr?: React.HTMLAttributes<HTMLDivElement>;
}

/**
 *
 * @param children
 * @param className
 * @param attr
 * @returns ViewContainer
 * @description View Container Component
 * @example <ViewContainer>...</ViewContainer>
 * @example <ViewContainer className="bg-gray-100">...</ViewContainer>
 */
const ViewContainer: React.FC<ViewContainerProps> = ({
  children,
  className,
  attr,
}) => (
  <div
    className={cn("px-4 mx-auto max-w-xl sm:px-6 lg:px-8 ", className)}
    {...attr}
  >
    {children}
  </div>
);

export default ViewContainer;
