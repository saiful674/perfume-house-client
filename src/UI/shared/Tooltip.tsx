import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ReactNode } from "react";

const CustomTooltip = ({
  children,
  text,
}: {
  children: ReactNode;
  text: string;
}) => {
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger as-child>{children}</TooltipTrigger>
          <TooltipContent className="mb-2 text-xs">{text}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default CustomTooltip;
