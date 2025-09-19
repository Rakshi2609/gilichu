import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconDashboard, IconHourglass, IconCheckCircle, IconChart, IconAlert, IconUser, IconSettings, IconNotes, IconPlus, IconBuilding } from '../common/Icons';
import '../../styles/BottomNav.css';



const BottomNavGov = () => (
    <nav className="bottom-nav">
        <NavLink to="/dashboard" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}>
            <span className="icon"><IconDashboard /></span>
            <span>Overview</span>
        </NavLink>
        <NavLink to="/dashboard/pending-issues" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}>
            <span className="icon"><IconHourglass /></span>
            <span>Pending</span>
        </NavLink>
        <NavLink to="/dashboard/resolved-issues" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}>
            <span className="icon"><IconCheckCircle /></span>
            <span>Resolved</span>
        </NavLink>
        <NavLink to="/dashboard/analytics" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}>
            <span className="icon"><IconChart /></span>
            <span>Analytics</span>
        </NavLink>
        <NavLink to="/dashboard/alerts" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}>
            <span className="icon"><IconAlert /></span>
            <span>Manage Alerts</span>
        </NavLink>
        <NavLink to="/date" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}>
            <span className="icon"><IconHourglass /></span>
            <span>Predict</span>
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}>
            <span className="icon"><IconUser /></span>
            <span>Profile</span>
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}>
            <span className="icon"><IconSettings /></span>
            <span>Settings</span>
        </NavLink>
    </nav>
);

export default BottomNavGov;
