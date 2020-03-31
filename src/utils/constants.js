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
import i18n from 'plugins/i18n'

export const APP_CONFIG = Object.freeze({
    productName: i18n.t('productName'),
    asciiLogo: `   
.___  ___.      ___      ___   ___      _______.  ______      ___       __       _______ 
|   \\/   |     /   \\     \\  \\ /  /     /       | /      |    /   \\     |  |     |   ____|
|  \\  /  |    /  ^  \\     \\  V  /     |   (----'|  ,----'   /  ^  \\    |  |     |  |__   
|  |\\/|  |   /  /_\\  \\     >   <       \\   \\    |  |       /  /_\\  \\   |  |     |   __|  
|  |  |  |  /  _____  \\   /  .  \\  .----)   |   |  '----. /  _____  \\  |  '----.|  |____ 
|__|  |__| /__/     \\__\\ /__/ \\__\\ |_______/     \\______|/__/     \\__\\ |_______||_______|
`,
    // navigation: {
    //     maxscale: [
    //         {
    //             title: i18n.t('dashboard'),
    //             route: 'dashboard',
    //             size: 22,
    //             icon: '$vuetify.icons.tachometer',
    //         },
    //         {
    //             title: i18n.t('statistics'),
    //             route: 'statistics',
    //             size: 22,
    //             icon: '$vuetify.icons.reports',
    //         },
    //         { title: i18n.t('users'), route: 'users', size: 22, icon: '$vuetify.icons.users' },
    //         {
    //             title: i18n.t('settings'),
    //             route: 'settings',
    //             size: 22,
    //             icon: '$vuetify.icons.settings',
    //         },
    //     ],
    // },
})
