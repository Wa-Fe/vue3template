/*
 * @Description: 
 * @Author: Wa_Fe
 * @Date: 2022-10-13 17:52:27
 * @LastEditTime: 2022-10-14 09:46:07
 * @LastEditors: Wa_Fe
 */
import { getToken } from "@/utils/storage";
const getDefaultStore = ()=>{
    return {
        name:'213',
        token:getToken() || ''
    }
}

const state = getDefaultStore()

const mutations = {

}

const actions = {

}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }
