/*
 * Copyright (c) 2020 MariaDB Corporation Ab
 *
 * Use of this software is governed by the Business Source License included
 * in the LICENSE.TXT file and at www.mariadb.com/bsl11.
 *
 * Change Date: 2024-07-01
 *
 * On the date above, in accordance with the Business Source License, use
 * of this software will be governed by version 2 or later of the General
 * Public License.
 */
// Sidebar components
import Dashboard from 'pages/Dashboard'
// import Reports from 'pages/Reports'
const Settings = () => import(/* webpackChunkName: "sidebar-routes-settings" */ 'pages/Settings')
import tabRoutes from './tabRoutes'

export default [
    // Sidebar Routes
    {
        path: '/dashboard/',
        component: Dashboard,
        meta: {
            requiresAuth: true,
            keepAlive: true,
            layout: 'app-layout',
            size: 22,
            icon: '$vuetify.icons.tachometer',
        },
        name: 'dashboards',
        children: tabRoutes,
    },

    // {
    //     path: '/reports',
    //     component: Reports,
    //     meta: {
    //         requiresAuth: true,
    //         layout: 'app-layout',
    //         size: 22,
    //         icon: '$vuetify.icons.reports',
    //     },
    //     name: 'reports',
    // },

    {
        path: '/settings',
        component: Settings,
        meta: {
            requiresAuth: true,
            layout: 'app-layout',
            size: 22,
            icon: '$vuetify.icons.settings',
        },
        name: 'settings',
    },
]
