import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconDashboard, IconNotes, IconBell, IconPlus, IconUser, IconSettings } from '../common/Icons';
import '../../styles/BottomNav.css';

const BottomNav = () => (
    <nav className="bottom-nav">
        <NavLink to="/dashboard" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}>
            <span className="icon"><IconDashboard /></span>
            <span>Home</span>
        </NavLink>
        <NavLink to="/dashboard/my-issues" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}>
            <span className="icon"><IconNotes /></span>
            <span>Issues</span>
        </NavLink>
        <NavLink to="/dashboard/notifications" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}>
            <span className="icon"><IconBell /></span>
            <span>Alerts</span>
        </NavLink>
        <NavLink to="/report-issue" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}>
            <span className="icon"><IconPlus /></span>
            <span>Report</span>
        </NavLink>
        <NavLink to="/profile" className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}>
            <span className="icon"><IconUser /></span>
            <span>Profile</span>
        </NavLink>
    </nav>
);

export default BottomNav;
