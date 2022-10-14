/*
 * @Description: 
 * @Author: Wa_Fe
 * @Date: 2022-10-13 17:51:47
 * @LastEditTime: 2022-10-14 09:38:15
 * @LastEditors: Wa_Fe
 */
import {createStore} from 'vuex'
import user from "./modules/user";
export default createStore({
    modules:{
        user
    }
})