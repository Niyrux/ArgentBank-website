import React from 'react'
import "./view.css"

export default function view({ Argent, money, current }) {
    return (
        <section class="account">
            <div class="account-content-wrapper">
                <h3 class="account-title">{Argent}</h3>
                <p class="account-amount">{money}</p>
                <p class="account-amount-description">{current}</p>
            </div>
            <div class="account-content-wrapper cta">
                <button class="transaction-button">View transactions</button>
            </div>
        </section>
    )
}
