import React from 'react'
import { Outlet } from 'react-router'

const AdminLayout = () => {
    return (
        <div className='admin-layout'>
            ADMIN LAYOUT
            <Outlet />
        </div>
    )
}

export default AdminLayout
