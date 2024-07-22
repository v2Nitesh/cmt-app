import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/Router";
import { SidebarComponent } from "./components/SidebarComponent";
import "/src/assets/styles/index.scss";
import { Box } from "@mui/material";
import "/src/App.css";

export interface IAppProps {
  roleId?: string;
}

const App: React.FC<IAppProps> = (props: IAppProps) => {
  return (
    <>
      <Box className="App">
        <BrowserRouter>
          <Box component="section" className="appBoxWrapper p-0">
            <SidebarComponent />
            <Box component="div" className="mainContent">
              <Router />
            </Box>
          </Box>
        </BrowserRouter>
      </Box>
    </>
  );
};

export default App;
