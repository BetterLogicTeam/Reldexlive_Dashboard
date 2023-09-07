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
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import {AiOutlineMenu} from 'react-icons/ai'
import {RxCross2 } from 'react-icons/rx'
import Offcanvas from "react-bootstrap/Offcanvas";
import { Container, Navbar } from "react-bootstrap";
import { Route, Routes, useNavigate } from "react-router-dom";
import Landing from "../Landing/Landing";
import My_account from "../My_Profile/My_account";
import Home from "../Home/Home";
import Change_Password from "../My_Profile/Change_Password";
import Change_TransactionPassword from "../My_Profile/Change_TransactionPassword";
import Ecurrency_Details from "../My_Profile/Ecurrency_Details";
import Activation from "../Activation/Activation";
import Activation_history from "../Activation_history/Activation_history";
import BuyOnline_Fund from "../BuyOnline_Fund/BuyOnline_Fund";
import BuyFundOnlineHistory from "../BuyFundOnlineHistory/BuyFundOnlineHistory";
import ReceivedFundHistory from "../ReceivedFundHistory/ReceivedFundHistory";
import DirectIncome from "../DirectIncome/DirectIncome";
import Roi_Income from "../ROI_Income/Roi_Income";
import RoiLevelIncome from "../RoiLevelIncome/RoiLevelIncome";
import Reward from "../Reward/Reward";
import MyReferral from "../MyReferral/MyReferral";
import LevelDetails from "../LevelDetails/LevelDetails";
import MyTeam from "../MyTeam/MyTeam";
import DirectlegBussiness from "../DirectlegBussiness/DirectlegBussiness";
import Bonanza from "../Bonanza/Bonanza";
import Withdrawal_form from "../Withdrawal_Form/Withdrawal_form";
import WithdrawalHistory from "../WithdrawalHistory/WithdrawalHistory";
import ContactSupportTable from "../ContactSupportTable/ContactSupportTable";
const drawerWidth = 280;

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

  const [offopen,setoffOpen]= React.useState(false)





  const [selectedOption, setSelectedOption] = React.useState(null);

  let history = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Box sx={{ display: "flex" }} className="main_drw">
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        {[false].map((expand) => (
          <Navbar
            key={expand}
            expand={expand}
            className="navMMain Offcanvas_res"
          >
            <Container fluid>
              <Navbar.Brand className="new_nav_bar_here" href="#">
                <div className="iq-navbar-logo d-flex align-items-center justify-content-between">
                  <a href="/" className="header-logo">
                    <img
                      src="assets/images/logo.png"
                      className="img-fluid rounded-normal light-logo"
                      alt="logo"
                    />
                  </a>
                </div>
              </Navbar.Brand>
              {/* <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-true`}
                class="navbar-toggler"
                aria-label="Toggle navigation"
              /> */}

               <span className={show?"navbar-toggler":"navbar-toggler collapsed"} onClick={()=>setShow(!show)} >
              
                { 
                  show ? <><RxCross2 className='text-dark fs-1' /> </>:<><AiOutlineMenu className='text-dark fs-1'/></>
                }
              
             
              </span> 
 
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
              <Offcanvas show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
                  <div className="py-3 text-white"  onClick={() => (handleDrawerClose(), history("/dashboard"),handleClose())}>
                    <HomeOutlinedIcon className="mr-2 text-white"  />
                    Dashboard
                  </div>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        <PersonOutlineOutlinedIcon className="mr-2 text-white" />{" "}
                        Profile
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul>
                        <li className="mt-3 text-white"  onClick={() => (
                          handleDrawerClose(), history("/dashboard/My_Account"),handleClose()
                        )}>My Account</li>
                        <li className="mt-3 text-white"   onClick={() => (
                          handleDrawerClose(),
                          history("/dashboard/Change_Password"),handleClose()
                        )} >Change Password</li>
                        <li className="mt-3 text-white"   onClick={() => (
                          handleDrawerClose(),
                          history("/dashboard/Change_TransactionPassword"),handleClose()
                        )}>
                          Change Transaction Password
                        </li>
                        <li className="mt-3 text-white"  onClick={() => (
                          handleDrawerClose(),
                          history("/dashboard/Ecurrency_Details"),handleClose()
                        )}>Ecurrency Details</li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        <AccountBalanceWalletOutlinedIcon className="mr-2 text-white" />{" "}
                        Activation
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul>
                        <li className="mt-3"  onClick={() => (
                          handleDrawerClose(), history("/dashboard/Activation"),handleClose()
                        )}>Activation</li>
                        <li className="mt-3"   onClick={() => (
                            handleDrawerClose(),
                            history("/dashboard/Activation_history"),handleClose()
                          )}>Activation/Upgrade History</li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        <AccountBalanceWalletOutlinedIcon className="mr-2 text-white" />{" "}
                        Manage Fund
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul>
                        <li
                          className="mt-3"
                          onClick={() => (
                            handleDrawerClose(),
                            history("/dashboard/BuyOnline_Fund"),handleClose()
                          )}
                        >
                          Buy Fund Online
                        </li>
                        <li
                          className="mt-3"
                          onClick={() => (
                            handleDrawerClose(),
                            history("/dashboard/BuyFundOnlineHistory"),handleClose()
                          )}
                        >
                          Buy Fund Online History
                        </li>
                        <li
                          className="mt-3"
                          onClick={() => (
                            handleDrawerClose(),
                            history("/dashboard/ReceivedFundHistory"),handleClose()
                          )}
                        >
                          Received Fund History
                        </li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        <DescriptionOutlinedIcon className="mr-2 text-white" />
                        Income
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul>
                        <li
                          className="mt-3"
                          onClick={() => (
                            handleDrawerClose(),
                            history("/dashboard/DirectIncome"),handleClose()
                          )}
                        >
                          Direct Income
                        </li>
                        <li
                          className="mt-3"
                          onClick={() => (
                            handleDrawerClose(),
                            history("/dashboard/Roi_Income"),handleClose()
                          )}
                        >
                          Roi Income
                        </li>
                        <li
                          className="mt-3"
                          onClick={() => (
                            handleDrawerClose(),
                            history("/dashboard/RoiLevelIncome"),handleClose()
                          )}
                        >
                          Roi Level Income
                        </li>
                        <li
                          className="mt-3"
                          onClick={() => (
                            handleDrawerClose(), history("/dashboard/Reward"),handleClose()
                          )}
                        >
                          Reward
                        </li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        <PersonAddAltOutlinedIcon className="mr-2 text-white" />{" "}
                        My Team{" "}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul>
                        <li
                          className="mt-3"
                          onClick={() => (
                            handleDrawerClose(),
                            history("/dashboard/MyReferral"),handleClose()
                          )}
                        >
                          My Referral
                        </li>
                        <li
                          className="mt-3"
                          onClick={() => (
                            handleDrawerClose(),
                            history("/dashboard/LevelDetails"),handleClose()
                          )}
                        >
                          Level Details
                        </li>
                        <li
                          className="mt-3"
                          onClick={() => (
                            handleDrawerClose(), history("/dashboard/MyTeam"),handleClose()
                          )}
                        >
                          My Team
                        </li>
                        <li
                          className="mt-3"
                          onClick={() => (
                            handleDrawerClose(),
                            history("/dashboard/DirectlegBussiness"),handleClose()
                          )}
                        >
                          Direct leg Bussiness
                        </li>
                        <li
                          className="mt-3"
                          onClick={() => (
                            handleDrawerClose(), history("/dashboard/Bonanza"),handleClose()
                          )}
                        >
                          Bonanza
                        </li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        <AccountBalanceWalletOutlinedIcon className="mr-2 text-white" />{" "}
                        Withdrawal
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul>
                        <li
                          className="mt-3"
                          onClick={() => (
                            handleDrawerClose(),
                            history("/dashboard/Withdrawal_form"),handleClose()
                          )}
                        >
                          Withdrawal
                        </li>
                        <li
                          className="mt-3"
                          onClick={() => (
                            handleDrawerClose(),
                            history("/dashboard/WithdrawalHistory"),handleClose()
                          )}
                        >
                          Withdrawal History
                        </li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        <AccountBalanceWalletOutlinedIcon className="mr-2 text-white" />{" "}
                        Contact support{" "}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul>
                        <li
                          className="mt-3"
                          onClick={() => (
                            handleDrawerClose(),
                            history("/dashboard/ContactSupportTable"),handleClose()
                          )}
                        >
                          contactsupport
                        </li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>

                  <div className="py-3">
                    <ExitToAppIcon className="mr-2 text-white" />
                    Logout
                  </div>
                </Offcanvas.Body>
      </Offcanvas>

              {/* <Offcanvas 
                how={show} onHide={handleClose} 
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-true`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div className="py-3 text-white"  onClick={() => (handleDrawerClose(), history("/dashboard"))}>
                    <HomeOutlinedIcon className="mr-2 text-white"  />
                    Dashboard
                  </div>
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        <PersonOutlineOutlinedIcon className="mr-2 text-white" />{" "}
                        Profile
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul>
                        <li className="mt-3 text-white"  onClick={() => (
                          handleDrawerClose(), history("/dashboard/My_Account")
                        )}>My Account</li>
                        <li className="mt-3 text-white"   onClick={() => (
                          handleDrawerClose(),
                          history("/dashboard/Change_Password")
                        )} >Change Password</li>
                        <li className="mt-3 text-white"   onClick={() => (
                          handleDrawerClose(),
                          history("/dashboard/Change_TransactionPassword")
                        )}>
                          Change Transaction Password
                        </li>
                        <li className="mt-3 text-white"  onClick={() => (
                          handleDrawerClose(),
                          history("/dashboard/Ecurrency_Details")
                        )}>Ecurrency Details</li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        <AccountBalanceWalletOutlinedIcon className="mr-2 text-white" />{" "}
                        Activation
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul>
                        <li className="mt-3"  onClick={() => (
                          handleDrawerClose(), history("/dashboard/Activation")
                        )}>Activation</li>
                        <li className="mt-3"   onClick={() => (
                            handleDrawerClose(),
                            history("/dashboard/Activation_history")
                          )}>Activation/Upgrade History</li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        <AccountBalanceWalletOutlinedIcon className="mr-2 text-white" />{" "}
                        Manage Fund
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul>
                        <li
                          className="mt-3"
                          onClick={() => (
                            handleDrawerClose(),
                            history("/dashboard/BuyOnline_Fund")
                          )}
                        >
                          Buy Fund Online
                        </li>
                        <li
                          className="mt-3"
                          onClick={() => (
                            handleDrawerClose(),
                            history("/dashboard/BuyFundOnlineHistory")
                          )}
                        >
                          Buy Fund Online History
                        </li>
                        <li
                          className="mt-3"
                          onClick={() => (
                            handleDrawerClose(),
                            history("/dashboard/ReceivedFundHistory")
                          )}
                        >
                          Received Fund History
                        </li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        <DescriptionOutlinedIcon className="mr-2 text-white" />
                        Income
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul>
                        <li
                          className="mt-3"
                          onClick={() => (
                            handleDrawerClose(),
                            history("/dashboard/DirectIncome")
                          )}
                        >
                          Direct Income
                        </li>
                        <li
                          className="mt-3"
                          onClick={() => (
                            handleDrawerClose(),
                            history("/dashboard/Roi_Income")
                          )}
                        >
                          Roi Income
                        </li>
                        <li
                          className="mt-3"
                          onClick={() => (
                            handleDrawerClose(),
                            history("/dashboard/RoiLevelIncome")
                          )}
                        >
                          Roi Level Income
                        </li>
                        <li
                          className="mt-3"
                          onClick={() => (
                            handleDrawerClose(), history("/dashboard/Reward")
                          )}
                        >
                          Reward
                        </li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        <PersonAddAltOutlinedIcon className="mr-2 text-white" />{" "}
                        My Team{" "}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul>
                        <li
                          className="mt-3"
                          onClick={() => (
                            handleDrawerClose(),
                            history("/dashboard/MyReferral")
                          )}
                        >
                          My Referral
                        </li>
                        <li
                          className="mt-3"
                          onClick={() => (
                            handleDrawerClose(),
                            history("/dashboard/LevelDetails")
                          )}
                        >
                          Level Details
                        </li>
                        <li
                          className="mt-3"
                          onClick={() => (
                            handleDrawerClose(), history("/dashboard/MyTeam")
                          )}
                        >
                          My Team
                        </li>
                        <li
                          className="mt-3"
                          onClick={() => (
                            handleDrawerClose(),
                            history("/dashboard/DirectlegBussiness")
                          )}
                        >
                          Direct leg Bussiness
                        </li>
                        <li
                          className="mt-3"
                          onClick={() => (
                            handleDrawerClose(), history("/dashboard/Bonanza")
                          )}
                        >
                          Bonanza
                        </li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        <AccountBalanceWalletOutlinedIcon className="mr-2 text-white" />{" "}
                        Withdrawal
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul>
                        <li
                          className="mt-3"
                          onClick={() => (
                            handleDrawerClose(),
                            history("/dashboard/Withdrawal_form")
                          )}
                        >
                          Withdrawal
                        </li>
                        <li
                          className="mt-3"
                          onClick={() => (
                            handleDrawerClose(),
                            history("/dashboard/WithdrawalHistory")
                          )}
                        >
                          Withdrawal History
                        </li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>
                        <AccountBalanceWalletOutlinedIcon className="mr-2 text-white" />{" "}
                        Contact support{" "}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul>
                        <li
                          className="mt-3"
                          onClick={() => (
                            handleDrawerClose(),
                            history("/dashboard/ContactSupportTable")
                          )}
                        >
                          contactsupport
                        </li>
                      </ul>
                    </AccordionDetails>
                  </Accordion>

                  <div className="py-3">
                    <ExitToAppIcon className="mr-2 text-white" />
                    Logout
                  </div>
                </Offcanvas.Body>
              </Offcanvas> */}
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
      <Drawer variant="permanent" open={open} className="Toolbar_resp">
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
              <ListItemText
                sx={{ opacity: open ? 1 : 0 }}
                onClick={() => (handleDrawerClose(), history("/dashboard"))}
              >
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
                      <li
                        className="mt-3"
                        onClick={() => (
                          handleDrawerClose(), history("/dashboard/My_Account")
                        )}
                      >
                        My Account
                      </li>
                      <li
                        className="mt-3"
                        onClick={() => (
                          handleDrawerClose(),
                          history("/dashboard/Change_Password")
                        )}
                      >
                        Change Password
                      </li>
                      <li
                        className="mt-3"
                        onClick={() => (
                          handleDrawerClose(),
                          history("/dashboard/Change_TransactionPassword")
                        )}
                      >
                        Change Transaction Password
                      </li>
                      <li
                        className="mt-3"
                        onClick={() => (
                          handleDrawerClose(),
                          history("/dashboard/Ecurrency_Details")
                        )}
                      >
                        Ecurrency Details
                      </li>
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
                    <Typography className="text-white">Activation</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li
                        className="mt-3 text-white "
                        onClick={() => (
                          handleDrawerClose(), history("/dashboard/Activation")
                        )}
                      >
                        Activation
                      </li>
                      <li
                        className="mt-3 text-white"
                        onClick={() => (
                          handleDrawerClose(),
                          history("/dashboard/Activation_history")
                        )}
                      >
                        Activation/Upgrade History
                      </li>
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
                    <Typography className="text-white">Manage Fund</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li
                        className="mt-3 text-white"
                        onClick={() => (
                          handleDrawerClose(),
                          history("/dashboard/BuyOnline_Fund")
                        )}
                      >
                        Buy Fund Online
                      </li>
                      <li
                        className="mt-3 text-white"
                        onClick={() => (
                          handleDrawerClose(),
                          history("/dashboard/BuyFundOnlineHistory")
                        )}
                      >
                        Buy Fund Online History
                      </li>
                      <li
                        className="mt-3 text-white"
                        onClick={() => (
                          handleDrawerClose(),
                          history("/dashboard/ReceivedFundHistory")
                        )}
                      >
                        Received Fund History
                      </li>
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
                    <Typography className="text-white">Income</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li
                        className="mt-3 text-white"
                        onClick={() => (
                          handleDrawerClose(),
                          history("/dashboard/DirectIncome")
                        )}
                      >
                        Direct Income
                      </li>
                      <li
                        className="mt-3 text-white"
                        onClick={() => (
                          handleDrawerClose(), history("/dashboard/Roi_Income")
                        )}
                      >
                        Roi Income
                      </li>
                      <li
                        className="mt-3 text-white"
                        onClick={() => (
                          handleDrawerClose(),
                          history("/dashboard/RoiLevelIncome")
                        )}
                      >
                        Roi Level Income
                      </li>
                      <li
                        className="mt-3 text-white"
                        onClick={() => (
                          handleDrawerClose(), history("/dashboard/Reward")
                        )}
                      >
                        Reward
                      </li>
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
                    <Typography className="text-white"> My Team </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li
                        className="mt-3 text-white "
                        onClick={() => (
                          handleDrawerClose(), history("/dashboard/MyReferral")
                        )}
                      >
                        My Referral
                      </li>
                      <li
                        className="mt-3 text-white"
                        onClick={() => (
                          handleDrawerClose(),
                          history("/dashboard/LevelDetails")
                        )}
                      >
                        Level Details
                      </li>
                      <li
                        className="mt-3 text-white"
                        onClick={() => (
                          handleDrawerClose(), history("/dashboard/MyTeam")
                        )}
                      >
                        My Team
                      </li>
                      <li
                        className="mt-3 text-white"
                        onClick={() => (
                          handleDrawerClose(),
                          history("/dashboard/DirectlegBussiness")
                        )}
                      >
                        Direct leg Bussiness
                      </li>
                      <li
                        className="mt-3 text-white"
                        onClick={() => (
                          handleDrawerClose(), history("/dashboard/Bonanza")
                        )}
                      >
                        Bonanza
                      </li>
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
                    <Typography className="text-white">Withdrawal</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li
                        className="mt-3 text-white"
                        onClick={() => (
                          handleDrawerClose(),
                          history("/dashboard/Withdrawal_form")
                        )}
                      >
                        Withdrawal
                      </li>
                      <li
                        className="mt-3 text-white"
                        onClick={() => (
                          handleDrawerClose(),
                          history("/dashboard/WithdrawalHistory")
                        )}
                      >
                        Withdrawal History
                      </li>
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
                    <Typography className="text-white">
                      {" "}
                      Contact support{" "}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ul>
                      <li
                        className="mt-3 text-white"
                        onClick={() => (
                          handleDrawerClose(),
                          history("/dashboard/ContactSupportTable")
                        )}
                      >
                        contactsupport
                      </li>
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
              <ListItemText
                className="text-white"
                sx={{ opacity: open ? 1 : 0 }}
              >
                Logout
              </ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/My_Account" element={<My_account />} />
          <Route path="/Change_Password" element={<Change_Password />} />
          <Route
            path="/Change_TransactionPassword"
            element={<Change_TransactionPassword />}
          />
          <Route path="/Activation" element={<Activation />} />
          <Route path="/Activation_history" element={<Activation_history />} />
          <Route path="/BuyOnline_Fund" element={<BuyOnline_Fund />} />
          <Route
            path="/BuyFundOnlineHistory"
            element={<BuyFundOnlineHistory />}
          />
          <Route
            path="/ReceivedFundHistory"
            element={<ReceivedFundHistory />}
          />
          <Route path="/DirectIncome" element={<DirectIncome />} />
          <Route path="/Roi_Income" element={<Roi_Income />} />
          <Route path="/RoiLevelIncome" element={<RoiLevelIncome />} />
          <Route path="/Reward" element={<Reward />} />
          <Route path="/MyReferral" element={<MyReferral />} />
          <Route path="/LevelDetails" element={<LevelDetails />} />
          <Route path="/MyTeam" element={<MyTeam />} />
          <Route path="/DirectlegBussiness" element={<DirectlegBussiness />} />
          <Route path="/Bonanza" element={<Bonanza />} />
          <Route path="/Withdrawal_form" element={<Withdrawal_form />} />
          <Route path="/WithdrawalHistory" element={<WithdrawalHistory />} />
          <Route path="/Ecurrency_Details" element={<Ecurrency_Details />} />
          <Route
            path="/ContactSupportTable"
            element={<ContactSupportTable />}
          />
        </Routes>
      </Box>
    </Box>
  );
}
