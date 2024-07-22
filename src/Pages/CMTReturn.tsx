import { Box } from "@mui/material";
import React from "react";

export interface ReturnProps {
  returnPersonName?: string;
}

const CMTReturn: React.FC<ReturnProps> = (props: ReturnProps) => {
  return (
    <Box>
      <div>CMTReturn Coming Soon</div>
    </Box>
  );
};

export default CMTReturn;
