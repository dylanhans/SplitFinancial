import React from 'react'
import CreditQuick from './CreditQuick'
import CreditOffer from './CreditOffer';
import AccountSidebar from './AccountSidebar';

const SidebarCredit = () => {
  return (
    <div style={{ marginTop: '150px' }}>
      <CreditQuick />
      <div style={{ marginTop: '25px' }}>
        <AccountSidebar />
      </div>
      <div>
      <CreditOffer />
      </div>
    </div>
  );
};

export default SidebarCredit