import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

import home from '../assets/home.svg'
import companies from '../assets/companies.svg'
import logo from '../assets/logo.svg'
import exp from '../assets/exp.svg'
import inc from '../assets/inc.svg'


export default class Sidebar extends Component {
    render() {
        return (
            <aside className={this.props.sidebar}>
            <header className="sidebar-brand">
            <a href="/app"><img src={logo} alt="logo-icon" /></a>
            </header>
            <ul className="sidebar-list">
              <li className="sidebar-link">
                <NavLink to="/" className="">
                  <div>
                    <img src={home} alt="dashboard-icon" /><span>Home</span>
                  </div>
                </NavLink>
              </li>

              <li className="sidebar-link">
                <NavLink to="/invoice" className="">
                  <div>
                    <img src={inc} alt="dashboard-icon" /><span>Add Invoice </span>
                  </div>
                </NavLink>
              </li>
              <li className="sidebar-link">
                <NavLink to="/expense" className="">
                  <div>
                    <img src={exp} alt="dashboard-icon" /><span>Add Expense </span>
                  </div>
                </NavLink>
              </li>
              <li className="sidebar-link">
                <NavLink to="/bank" className="">
                  <div>
                    <img src={companies} alt="dashboard-icon" /><span>Bank Account</span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </aside>
        )
    }
}