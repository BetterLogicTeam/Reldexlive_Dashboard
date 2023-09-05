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

function App() {
  return (
    <div className="App"  ng-app="MyApp">
    <Activation_history/>
<BuyFundOnlineHistory/>
<ReceivedFundHistory/>
<DirectIncome/>
<Roi_Income/>
<RoiLevelIncome/>
<Reward/>
<MyReferral/>
<LevelDetails/>
<MyTeam/>
<DirectlegBussiness/>
<Bonanza/>
<WithdrawalHistory/>
<ContactSupportTable/>
    </div>
  );
}

export default App;
