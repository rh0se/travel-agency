import React from 'react'
import { Outlet, redirect } from 'react-router'
import { SidebarComponent } from "@syncfusion/ej2-react-navigations"
import { MobileSidebar, NavItems } from 'components'
import { account } from '~/appwrite/client'
import { getExistingUser, storeUserData } from '~/appwrite/auth'


export async function clientLoader() {
    try {
        const user = await account.get()
        if (!user.$id) return redirect
            ("sign-in")
        const existingUser = await getExistingUser(user.$id)
        console.log(existingUser)
        if (existingUser?.status === "user") return redirect("/");

        return existingUser?.$id ? existingUser : await storeUserData()
    } catch (error) {
        console.log("Error in Client Loader", error)
        return redirect("sign-in")
    }
}

const AdminLayout = () => {
    return (
        <div className='admin-layout'>
            <MobileSidebar />
            <aside className='w-full max-w-[270px] hidden lg:block'>
                <SidebarComponent width={270} enableGestures={false}>
                    <NavItems />
                </SidebarComponent>
            </aside>
            <Outlet />
        </div>
    )
}

export default AdminLayout
