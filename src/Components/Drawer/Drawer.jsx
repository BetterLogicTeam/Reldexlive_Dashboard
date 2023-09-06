import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import "./Drawer.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import Dropdown from "react-bootstrap/Dropdown";
// import { Accordion } from 'react-bootstrap';
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { LiaCoinsSolid } from 'react-icons/lia';
import Offcanvas from "react-bootstrap/Offcanvas";
import { Container, Navbar } from "react-bootstrap";
const drawerWidth = 320;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const [selectedOption, setSelectedOption] = React.useState(null);

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }} className="main_drw">
      <CssBaseline />
      <AppBar position="fixed" open={open}>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="navMMain Offcanvas_res">
          <Container fluid>
            <Navbar.Brand href="#">
              <div className="iq-navbar-logo d-flex align-items-center justify-content-between">
                <a href="index.html" className="header-logo">
                  <img
                    src="assets/images/logo.png"
                    className="img-fluid rounded-normal light-logo"
                    alt="logo"
                  />
                </a>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                RD332211
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    RD332212
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    RD332213
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    RD332214
                  </a>
                </li>
              </ul>
            </div>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <div className="py-3"><HomeOutlinedIcon className="mr-2"/>Dashboard</div>
              <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography><PersonOutlineOutlinedIcon className="mr-2"/> Profile</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li className="mt-3">My Account</li>
                      <li className="mt-3">Change Password</li>
                      <li className="mt-3">Change Transaction Password</li>
                      <li className="mt-3">Ecurrency Details</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography><AccountBalanceWalletOutlinedIcon className="mr-2"/> Activation</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li className="mt-3">Activation</li>
                      <li className="mt-3">Activation/Upgrade History</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography><AccountBalanceWalletOutlinedIcon className="mr-2"/> Manage Fund</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li className="mt-3">Buy Fund Online</li>
                      <li className="mt-3">Buy Fund Online History</li>
                      <li className="mt-3">Received Fund History</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography><DescriptionOutlinedIcon className="mr-2"/>Income</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li className="mt-3">Direct Income</li>
                      <li className="mt-3">Roi Income</li>
                      <li className="mt-3">Roi Level Income</li>
                      <li className="mt-3">Reward</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography><PersonAddAltOutlinedIcon className="mr-2"/> My Team </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li className="mt-3">My Referral</li>
                      <li className="mt-3">Level Details</li>
                      <li className="mt-3">My Team</li>
                      <li className="mt-3">Direct leg Bussiness</li>
                      <li className="mt-3">Bonanza</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography><AccountBalanceWalletOutlinedIcon className="mr-2"/> Withdrawal</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li className="mt-3">Withdrawal</li>
                      <li className="mt-3">Withdrawal History</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>

                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography><AccountBalanceWalletOutlinedIcon className="mr-2"/> Contact support </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li className="mt-3">contactsupport</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>

                <div className="py-3"><ExitToAppIcon className="mr-2"/>Logout</div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
        <Toolbar className="Toolbar_resp">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <div className="iq-navbar-logo d-flex align-items-center justify-content-between">
            <a href="index.html" className="header-logo">
              <img
                src="assets/images/logo.png"
                className="img-fluid rounded-normal light-logo"
                alt="logo"
              />
            </a>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} className="Toolbar_resp" >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <HomeOutlinedIcon />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                Dashboard
              </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <PersonOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Profile</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li className="mt-3">My Account</li>
                      <li className="mt-3">Change Password</li>
                      <li className="mt-3">Change Transaction Password</li>
                      <li className="mt-3">Ecurrency Details</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <AccountBalanceWalletOutlinedIcon />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Activation</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li className="mt-3">Activation</li>
                      <li className="mt-3">Activation/Upgrade History</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </ListItemText>
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <AccountBalanceWalletOutlinedIcon />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Manage Fund</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li className="mt-3">Buy Fund Online</li>
                      <li className="mt-3">Buy Fund Online History</li>
                      <li className="mt-3">Received Fund History</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <DescriptionOutlinedIcon />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Income</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li className="mt-3">Direct Income</li>
                      <li className="mt-3">Roi Income</li>
                      <li className="mt-3">Roi Level Income</li>
                      <li className="mt-3">Reward</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </ListItemText>
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <PersonAddAltOutlinedIcon />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography> My Team </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li className="mt-3">My Referral</li>
                      <li className="mt-3">Level Details</li>
                      <li className="mt-3">My Team</li>
                      <li className="mt-3">Direct leg Bussiness</li>
                      <li className="mt-3">Bonanza</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <AccountBalanceWalletOutlinedIcon />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>Withdrawal</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li className="mt-3">Withdrawal</li>
                      <li className="mt-3">Withdrawal History</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <AccountBalanceWalletOutlinedIcon />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography> Contact support </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li className="mt-3">contactsupport</li>
                    </ul>
                  </AccordionDetails>
                </Accordion>
              </ListItemText>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText sx={{ opacity: open ? 1 : 0 }}>
                Logout
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <div className="content-page ">
          <div className="content">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="d-block align-items-center referralItem mb2">
                    <div className="form-group">
                      <h3>Referral Link</h3>
                      <div className="input-group mb-0 bgss">
                        <input
                          type="text"
                          id="MyValue"
                          className="form-control"
                        />
                        <span
                          text="button"
                          onclick="addressCopy()"
                          className="input-group-text"
                        >
                          <i className="fa fa-copy" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row mb_flx">
                  <div className="col-lg-3">
                    <a href="#">
                      <div className="card cardItem">
                        <div className="card-body">
                          <div className="card_heading">
                            <div className="iq-icon-box-2">
                              <LiaCoinsSolid />
                            </div>
                            <h6>Current Package</h6>
                          </div>
                          <h5>8586</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3">
                    <a href="/user/ActivationHistory">
                      <div className="card cardItem">
                        <div className="card-body">
                          <div className="card_heading">
                            <div className="iq-icon-box-2">
                             <LiaCoinsSolid />
                            </div>
                            <h6>Total Investment</h6>
                          </div>
                          <div>
                            <h5>5868</h5>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3">
                    <a href="/user/myReferral">
                      <div className="card cardItem">
                        <div className="card-body">
                          <div className="card_heading">
                            <div className="iq-icon-box-2">
                             <LiaCoinsSolid />
                            </div>
                            <h6>Total Referral</h6>
                          </div>
                          <h5>2364</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3">
                    <a href="/user/myTeam">
                      <div className="card cardItem">
                        <div className="card-body">
                          <div className="card_heading">
                            <div className="iq-icon-box-2">
                             <LiaCoinsSolid />
                            </div>
                            <h6>Total Team</h6>
                          </div>
                          <h5>9582</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3">
                    <a href="/user/myTeam">
                      <div className="card cardItem">
                        <div className="card-body">
                          <div className="card_heading">
                            <div className="iq-icon-box-2">
                             <LiaCoinsSolid />
                            </div>
                            <h6>Total Business</h6>
                          </div>
                          <h5>8282</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3">
                    <a href="/user/DirectIncome">
                      <div className="card cardItem">
                        <div className="card-body">
                          <div className="card_heading">
                            <div className="iq-icon-box-2">
                             <LiaCoinsSolid />
                            </div>
                            <h6>Direct Income</h6>
                          </div>
                          <h5>8585</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3">
                    <a href="/user/roiIncome">
                      <div className="card cardItem">
                        <div className="card-body">
                          <div className="card_heading">
                            <div className="iq-icon-box-2">
                             <LiaCoinsSolid />
                            </div>
                            <h6>Daily Profit Income</h6>
                          </div>
                          <h5>8957</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3">
                    <a href="/user/RoiLevelIncome">
                      <div className="card cardItem">
                        <div className="card-body">
                          <div className="card_heading">
                            <div className="iq-icon-box-2">
                             <LiaCoinsSolid />
                            </div>
                            <h6>Daily Profit Level Income</h6>
                          </div>
                          <h5>869</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3">
                    <a href="/user/Rewardincome">
                      <div className="card cardItem">
                        <div className="card-body">
                          <div className="card_heading">
                            <div className="iq-icon-box-2">
                             <LiaCoinsSolid />
                            </div>
                            <h6>Reward Income</h6>
                          </div>
                          <h5>458</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3">
                    <a href="#">
                      <div className="card cardItem">
                        <div className="card-body">
                          <div className="card_heading">
                            <div className="iq-icon-box-2">
                             <LiaCoinsSolid />
                            </div>
                            <h6>Total Income</h6>
                          </div>
                          <h5>2423</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3">
                    <a href="/user/WithdrawHistory">
                      <div className="card cardItem">
                        <div className="card-body">
                          <div className="card_heading">
                            <div className="iq-icon-box-2">
                             <LiaCoinsSolid />
                            </div>
                            <h6>Withdrawal</h6>
                          </div>
                          <h5>3234</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-lg-3">
                    <a href="#">
                      <div className="card cardItem">
                        <div className="card-body">
                          <div className="card_heading">
                            <div className="iq-icon-box-2">
                             <LiaCoinsSolid />
                            </div>
                            <h6>Net Income</h6>
                          </div>
                          <h5>535</h5>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row mb_flx">
                  <div className="col-md-12">
                    <div className="prgs">
                      <div id="myProgress">
                        <div id="myBar" />
                      </div>
                    </div>
                    <div
                      className="text_color mb_1"
                      style={{ fontSize: "medium" }}
                    >
                      You have earned Total 1.25 % (63 BUSD) out of 500 %
                      (5000.00 BUSD) of total investment (1000.00 BUSD).
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row mb_flx">
                  <div className="col-md-12">
                    <div className="news_section">
                      <h4 className="userdet">News</h4>
                      <marquee
                        direction="up"
                        scrollamount={2}
                        onmouseover="this.stop();"
                        onmouseout="this.start();"
                      >
                        <table>
                          <tbody>
                            <tr>
                              <td style={{ color: "white" }}>
                                Welcome To Reldexlive
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <table>
                          <tbody>
                            <tr>
                              <td>Comming Soon..</td>
                            </tr>
                          </tbody>
                        </table>
                      </marquee>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="loader" />
        </div>
      </Box>
    </Box>
  );
}
