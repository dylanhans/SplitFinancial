import React from 'react'
import CreditQuick from './CreditQuick'
import CreditOffer from './CreditOffer';
import AccountSidebar from './AccountSidebar';

const SidebarCredit = ({type}: SidebarCreditProps) => {

  return (
    <div style={{ marginTop: '145px' }}>
      <CreditQuick />
      <div style={{ marginTop: '25px' }}>
        <AccountSidebar 
          type={type}
        />
      </div>
      <div>
      <CreditOffer 
      />
      </div>
    </div>
  );
};

export default SidebarCredit