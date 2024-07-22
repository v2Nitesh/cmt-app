import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export interface EntryProps {
  personName?: string;
}

const CMTEntry: React.FC<EntryProps> = (props: EntryProps) => {
  const navigate = useNavigate();

  return (
    <Box>
      CMTEntry Coming Soon
      <button
        type="button"
        title="Report"
        onClick={() => navigate("/report")}
        aria-label="RT"
      />
    </Box>
  );
};

export default CMTEntry;
