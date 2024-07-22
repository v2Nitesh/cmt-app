import { Box } from "@mui/material";
import React from "react";

export interface ViewProps {
  viewName?: string;
}

const CMTView: React.FC<ViewProps> = (props: ViewProps) => {
  return (
    <Box>
      <div>CMTView Coming Soon</div>
    </Box>
  );
};

export default CMTView;
