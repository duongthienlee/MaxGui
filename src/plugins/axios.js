/*
 * Copyright (c) 2020 MariaDB Corporation Ab
 *
 * Use of this software is governed by the Business Source License included
 * in the LICENSE.TXT file and at www.mariadb.com/bsl11.
 *
 * Change Date: 2024-06-15
 *
 * On the date above, in accordance with the Business Source License, use
 * of this software will be governed by version 2 or later of the General
 * Public License.
 */
import Vue from 'vue'
import ax from 'axios'
import store from 'store'
import { getErrorsArr } from '@/utils/helpers'

// allow cookies to be sent (cors handling)

let apiClient = ax.create({
    baseURL: '/',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
    },
})
apiClient.interceptors.response.use(
    response => {
        return response
    },
    error => {
        if (error.response.status === 401) {
            store.dispatch('user/logout')
            return Promise.reject(error)
        } else {
            store.commit('showMessage', {
                text: getErrorsArr(error),
                type: 'error',
            })
            // when request is dispatched in a modal, an overlay loading will be set -> turn it off before return error
            if (store.state.overlay !== false) {
                setTimeout(() => {
                    store.commit('hideOverlay')
                }, 600)
            }
            return Promise.reject(error)
        }
    }
)

const loginAxios = ax.create({
    baseURL: '/',
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
    },
})

Vue.axios = apiClient
Vue.loginAxios = loginAxios
// immutable axios instances
Object.defineProperties(Vue.prototype, {
    axios: {
        get() {
            return apiClient
        },
    },

    loginAxios: {
        get() {
            return loginAxios
        },
    },
})
