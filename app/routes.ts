import type { RouteConfig } from "@react-router/dev/routes";

const routes: RouteConfig = [
    {
        file: "routes/root/sign-in.tsx",
        path: 'sign-in'
    },
    {
        file: 'routes/api/create-trip.ts',
        path: "/api/create-trip",
    },
    {
        file: "routes/admin/admin-layout.tsx",
        children: [
            {
                path: "dashboard",
                file: "routes/admin/dashboard.tsx",
            },
            {
                path: "all-users",
                file: "routes/admin/all-users.tsx",
            },
            {
                path: "trips",
                file: "routes/admin/trips.tsx",
            },
            {
                path: "trips/create",
                file: "routes/admin/create-trip.tsx",
            },
        ],
    },
];

export default routes;
