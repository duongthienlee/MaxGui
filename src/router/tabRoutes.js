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
import Servers from 'pages/Servers'
import Services from 'pages/Services'
import Sessions from 'pages/Sessions'

export default [
    // Tab Routes
    {
        path: '/dashboard/servers',
        component: Servers,
        meta: {
            requiresAuth: true,
            layout: 'app-layout',
        },
        name: 'servers',
        text: 'servers',
        isTabRoute: true,
    },
    {
        path: '/dashboard/sessions',
        component: Sessions,
        meta: {
            requiresAuth: true,
            layout: 'app-layout',
        },
        name: 'sessions',
        text: 'current sessions',
        isTabRoute: true,
    },
    {
        path: '/dashboard/services',
        component: Services,
        meta: {
            requiresAuth: true,
            layout: 'app-layout',
        },
        name: 'services',
        text: 'services',
        isTabRoute: true,
    },
]
