import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import DonutSmallOutlinedIcon from "@mui/icons-material/DonutSmallOutlined";
import LuggageOutlinedIcon from "@mui/icons-material/LuggageOutlined";
import { useNavigate } from "react-router-dom";

enum SidebarMenu {
  CMTEntry = "Entry",
  CMTView = "View",
  CMTReturn = "Return",
  CMTReport = "Report",
}

const menuList = [
  {
    id: 0,
    label: SidebarMenu.CMTEntry,
    routeDetails: `/${SidebarMenu.CMTEntry.toLowerCase()}`,
  },
  {
    id: 1,
    label: SidebarMenu.CMTView,
    routeDetails: `/${SidebarMenu.CMTView.toLowerCase()}`,
  },
  {
    id: 2,
    label: SidebarMenu.CMTReturn,
    routeDetails: `/${SidebarMenu.CMTReturn.toLowerCase()}`,
  },
  {
    id: 3,
    label: SidebarMenu.CMTReport,
    routeDetails: `/${SidebarMenu.CMTReport.toLowerCase()}`,
  },
];

const getIcon = (menuName: string) => {
  switch (menuName) {
    case SidebarMenu.CMTEntry:
      return <HomeOutlinedIcon />;
      break;
    case SidebarMenu.CMTView:
      return <DescriptionOutlinedIcon />;
      break;
    case SidebarMenu.CMTReturn:
      return <DonutSmallOutlinedIcon />;
      break;
    case SidebarMenu.CMTReport:
      return <LuggageOutlinedIcon />;
      break;
    default:
  }
};

export const SidebarComponent: React.FC = () => {
  console.log("Testing");
  const navigate = useNavigate();
  const [selectedMenuIndex, setSelectedMenuIndex] = useState(0);
  const changeRoute = (index: number) => {
    return menuList.find((object, ObjIndex) => {
      if (ObjIndex === index) {
        setSelectedMenuIndex(index);
        return navigate(object.routeDetails);
      }
    });
  };

  return (
    <Box component="aside" className="sideNavbar">
      <List className="sidebarListWrapper">
        {menuList.length > 0 ? (
          <>
            {menuList.map((item, index) => {
              return (
                <ListItem
                  key={`${item.label}-${index}`}
                  className="SidebarList"
                  onClick={() => changeRoute(index)}
                >
                  <ListItemButton
                    className={`buttonWrapper ${
                      selectedMenuIndex === index ? "activeState" : ""
                    }`}
                    key={`${item}-${index}-buttonWrapper`}
                  >
                    <ListItemIcon className="iconWrapper">
                      {getIcon(item.label)}
                    </ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </>
        ) : (
          <></>
        )}
      </List>
    </Box>
  );
};
