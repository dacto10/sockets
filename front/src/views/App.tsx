import { Container, Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import RouterView from "../router/routes";
import background from "../assets/img/background.svg";

const App: React.FC = () => {
  const location = useLocation();

  return (
    location.pathname !== '/login' ? (
      <>
        <Navbar />
        <Grid container>
              <Grid item xs={2}>
                <Sidebar />
              </Grid>
              <Grid item xs={10}>
                  <Container maxWidth="xl" sx={ containerStyle }>
                      <RouterView />
                  </Container>
              </Grid>
          </Grid>
      </>
    ) : (
      <Container maxWidth="xl" sx={ { ...containerStyle, ...navbarContainerStyle } }>
        <RouterView />
      </Container>
    )
  )
}

export default App;

const containerStyle = {
  m: 0,
  height: 'calc(100vh - 64px)',
  backgroundImage: `url(${background})`,
  backgroundSize: 'cover',
  position: 'relative',
  maxWidth: '100% !important',
}

const navbarContainerStyle = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}