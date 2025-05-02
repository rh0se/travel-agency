import type { RouteConfig } from "@react-router/dev/routes";

const routes: RouteConfig = [
    {
        file: "routes/admin/admin-layout.tsx",
        path: "/",
        children: [
            {
                path: "dashboard",
                file: "routes/admin/dashboard.tsx",
            },
            {
                path: "all-users",
                file: "routes/admin/all-users.tsx",
            },
        ],
    },
];

export default routes;
