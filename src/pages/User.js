/**
 * Dashboard homepage
 * @component
 */
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {authSelector} from "../redux/AuthSelectors";

export default function User() {


    const { user } = useSelector(authSelector)


    return (
        <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back</h1>
                    <h2>{user.firstName} {user.lastName}!</h2>
                    <button
                        className="edit-button"
                    >Edit Name</button>
                </div>
            {/* Placeholder data */}
            <h2 className="sr-only">Accounts</h2>
            <div className="dashboard-grid">
                <section className="account">
                    <div className="account-content">
                        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-actions">
                        <button className="transaction-button btn btn-primary">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content">
                        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-actions">
                        <button className="transaction-button btn btn-primary">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content">
                        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-actions">
                        <button className="transaction-button btn btn-primary">View transactions</button>
                    </div>
                </section>
            </div>
        </main>
    )
}
