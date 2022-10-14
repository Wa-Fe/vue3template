/*
 * @Description: 
 * @Author: Wa_Fe
 * @Date: 2022-10-13 17:32:02
 * @LastEditTime: 2022-10-13 17:36:45
 * @LastEditors: Wa_Fe
 */
import request from '@/api/request';

// 配置
export const getSetting = (data) =>{
    return  request({url:"/pc/index/getSetting",method:"GET",data:data})
}
