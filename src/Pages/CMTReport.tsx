import { Box } from "@mui/material";
import React from "react";

export interface ReportProps {
  reportName?: string;
}

const CMTReport: React.FC<ReportProps> = (props: ReportProps) => {
  return (
    <Box>
      <div>CMTReport Coming Soon</div>
    </Box>
  );
};

export default CMTReport;
