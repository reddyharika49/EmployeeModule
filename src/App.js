
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/HeaderComponents/Header';
import GenericNavTabs from '..//src/widgets/GenericNavTabs';
import FamilyAddressInfoContainer from'../src/containers/FamilyAddressInfoMainContainer/FAmilyAddressInfoContainer';

const navTabs = [
  { id: 'BasicInfo', label: 'Basic Info', path: '/BasicInfo' },
  { id: 'Family&AddressInfo', label: 'Family&AddressInfo', path: '/Family&AddressInfo' },
  { id: 'QualificationDetails', label: 'Qualification Details', path: '/QualificationInfo' },
  { id: 'Documents', label: 'Documents', path: '/Documents' },
  { id: 'BankDetails', label: 'Bank Details', path: '/BankDetails' },

]
function App() {
  return (
    <BrowserRouter>
    <div className="whole_container">
      <Header/>

       <aside >
        {/* <SideBarContainer/> */}
      </aside>

      <div className="main_content">
       
        <GenericNavTabs tabs={navTabs} />
        <Routes>
          <Route path="/BasicInfo" element={<h5>Basic Info</h5>} />
          <Route path="/Family&AddressInfo" element={<FamilyAddressInfoContainer/>} />
          <Route path="/QualificationInfo" element={<h5>QualificationInfo</h5>} />
          <Route path="/Documents" element={<h5>Documents</h5>} />
          <Route path="/BankDetails" element={<h5>BankDetails</h5>} />
        </Routes>
        
      </div>
   </div>
   </BrowserRouter>
  );
}

export default App;
