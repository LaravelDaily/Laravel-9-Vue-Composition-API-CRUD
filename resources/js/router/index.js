import { createRouter, createWebHistory } from "vue-router";

import CompaniesIndex from '@/components/companies/CompaniesIndex.vue'
import CompaniesCreate from '@/components/companies/CompaniesCreate.vue'

const routes = [
    {
        path: '/dashboard',
        name: 'companies.index',
        component: CompaniesIndex
    },
    {
        path: '/companies/create',
        name: 'companies.create',
        component: CompaniesCreate
    }
]

export default createRouter({
    history: createWebHistory(),
    routes
})
