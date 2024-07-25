import React from 'react'
import CreditQuick from './CreditQuick'
import CreditOffer from './CreditOffer';
import AccountSidebar from './AccountSidebar';

const SidebarCredit = ({type, account, accounts}: SidebarCreditProps) => {

  return (
    <div style={{ marginTop: '145px' }}>
      <CreditQuick 
        account={account}
        accounts={accounts}
      />
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