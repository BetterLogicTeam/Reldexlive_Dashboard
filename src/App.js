import logo from './logo.svg';
import './App.css';
import Roi_Income from './Components/ROI_Income/Roi_Income';
import Activation_history from './Components/Activation_history/Activation_history';
import BuyFundOnlineHistory from './Components/BuyFundOnlineHistory/BuyFundOnlineHistory';
import ReceivedFundHistory from './Components/ReceivedFundHistory/ReceivedFundHistory';
import DirectIncome from './Components/DirectIncome/DirectIncome';
import RoiLevelIncome from './Components/RoiLevelIncome/RoiLevelIncome';
import Reward from './Components/Reward/Reward';
import MyReferral from './Components/MyReferral/MyReferral';
import LevelDetails from './Components/LevelDetails/LevelDetails';
import MyTeam from './Components/MyTeam/MyTeam';
import DirectlegBussiness from './Components/DirectlegBussiness/DirectlegBussiness';
import Bonanza from './Components/Bonanza/Bonanza';
import WithdrawalHistory from './Components/WithdrawalHistory/WithdrawalHistory';
import ContactSupportTable from './Components/ContactSupportTable/ContactSupportTable';
import { Route, Router, Routes } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import My_account from './Components/My_Profile/My_account';
import Change_Password from './Components/My_Profile/Change_Password';
import Change_TransactionPassword from './Components/My_Profile/Change_TransactionPassword';
import Ecurrency_Details from './Components/My_Profile/Ecurrency_Details';
import Activation from './Components/Activation/Activation';
import BuyOnline_Fund from './Components/BuyOnline_Fund/BuyOnline_Fund'
import Withdrawal_form from './Components/Withdrawal_Form/Withdrawal_form';
import Contact_Support from './Components/Contact_Support/Contact_Support';

import Main from './Components_index/Main/Main';
import Login from './Components_index/Login/Login';
import Register from './Components_index/Register/Register';
import Home from './Components/Home/Home';


function App() {

  let url = window.location.pathname
  if (url == "/" || url == "/Login" || url == "/Register") {
    require('./assets1/css/custom.css');
    require('./assets1/css/animate.min.css')
    // import './assets1/css/bootstrap.min.css'
    require('./assets1/css/custom.css')
    require('./assets1/css/style.css')
    require('./assets1/LoginAssets/css/backend-plugin.min28b528b5.css')
    require('./assets1/LoginAssets/css/login.css')
  } 
  
  if(url=="/dashboard"){
  
    require('./assets/css/3MatrixTree.css')
    require('./assets/css/all.min.css')
    require('./assets/css/backend-plugin.min28b5.css')
    require('./assets/css/backend28b5.css')
    // require('./assets/css/dripicons.css')
    // require('./assets/css/font-awesome.min.css')
    // require('./assets/css/line-awesome.min.css')
    // require('./assets/css/main-2.css')
    require('./assets/css/main.css')
    // require('./assets/css/tree.css')
    // require('./assets/css/trading.css')
    // require('./assets/css/mapbox-gl.css')

  }


  // console.log("URL", url);



  return (
    <div className="App ApiA" ng-app="MyApp"

    >
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Register' element={<Register />}></Route>
        <Route exact path="/dashboard" element={<Landing />} >
          <Route path="/dashboard/My_Account" element={<My_account />} />
          <Route path="/dashboard/Change_Password" element={<Change_Password />} />
          <Route
            path="/dashboard/Change_TransactionPassword"
            element={<Change_TransactionPassword />}
          />
          <Route path="/dashboard/Activation" element={<Activation />} />
          <Route path="/dashboard/Activation_history" element={<Activation_history />} />
          <Route path="/dashboard/BuyOnline_Fund" element={<BuyOnline_Fund />} />
          <Route
            path="/dashboard/BuyFundOnlineHistory"
            element={<BuyFundOnlineHistory />}
          />
          <Route
            path="/dashboard/ReceivedFundHistory"
            element={<ReceivedFundHistory />}
          />
          <Route path="/dashboard/DirectIncome" element={<DirectIncome />} />
          <Route path="/dashboard/Roi_Income" element={<Roi_Income />} />
          <Route path="/dashboard/RoiLevelIncome" element={<RoiLevelIncome />} />
          <Route path="/dashboard/Reward" element={<Reward />} />
          <Route path="/dashboard/MyReferral" element={<MyReferral />} />
          <Route path="/dashboard/LevelDetails" element={<LevelDetails />} />
          <Route path="/dashboard/MyTeam" element={<MyTeam />} />
          <Route path="/dashboard/DirectlegBussiness" element={<DirectlegBussiness />} />
          <Route path="/dashboard/Bonanza" element={<Bonanza />} />
          <Route path="/dashboard/Withdrawal_form" element={<Withdrawal_form />} />
          <Route path="/dashboard/WithdrawalHistory" element={<WithdrawalHistory />} />
          <Route path="/dashboard/Ecurrency_Details" element={<Ecurrency_Details />} />
          <Route
            path="/dashboard/ContactSupportTable"
            element={<ContactSupportTable />}
          />

        </Route>
      </Routes>

      {/* <Landing/> */}
      {/* <Activation_history />
      <BuyFundOnlineHistory />
      <ReceivedFundHistory />
      <DirectIncome />
      <Roi_Income />
      <RoiLevelIncome />
      <Reward />
      <MyReferral />
      <LevelDetails />
      <MyTeam />
      <DirectlegBussiness />
      <Bonanza />
      <WithdrawalHistory />
      <ContactSupportTable /> */}
    </div>
  );
}

export default App;
