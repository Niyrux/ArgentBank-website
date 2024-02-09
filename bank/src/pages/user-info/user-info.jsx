import React from 'react'
import Edit from '../../components/editUserInfo/edit'
import View from '../../components/view-money/view'
import "./user-info.css"

export default function Userinfo() {
    return (
        <div className="main bg-dark">
            <Edit />
            <View
                Argent={"Argent Bank Checking (x8349)"}
                money={"$2,082.79"}
                current={"Available Balance"} />
            <View
                Argent={"Argent Bank Checking (x8349)"}
                money={"$2,082.79"}
                current={"Available Balance"} />
            <View
                Argent={"Argent Bank Checking (x8349)"}
                money={"$2,082.79"}
                current={"Available Balance"} />
        </div>
    )
}
