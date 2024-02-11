import React from 'react';
import './user-info.css'
import View from '../../components/view-money/view'
import Edit from '../../components/editUserInfo/edit';

function AutrePage() {





  return (
    <div className='main bg-dark'>
   
  <>
  <div className="header">
        <Edit/>
      </div>
      <View Argent={"Argent Bank Checking (x8349)"} money={"$2,082.79"} current={"$184.30"}/>
      <View Argent={"Argent Bank Checking (x8349)"} money={"$2,082.79"} current={"$184.30"}/>
      <View Argent={"Argent Bank Checking (x8349)"} money={"$2,082.79"} current={"$184.30"}/>
  </>


    </div>
  );
}

export default AutrePage;
