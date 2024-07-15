import React from 'react'
import CreditQuick from './CreditQuick'
import CreditOffer from './CreditOffer';

const SidebarCredit = () => {
  return (
    <div style={{ marginTop: '150px' }}>
      <CreditQuick />
      <div>Split</div>
      <div>Account Management</div>
      <CreditOffer />
    </div>
  );
};

export default SidebarCredit