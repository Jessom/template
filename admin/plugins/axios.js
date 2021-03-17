/*
 * @Description: 
 * @Author: watasi
 * @Date: 2021-03-09 16:52:04
 * @LastEditTime: 2021-03-09 17:45:17
 * @LastEditors: watasi
 */
import Vue from 'vue'
import { message } from 'ant-design-vue'
export default function ({ $axios, redirect }) {
  $axios.onRequest(config => {
    const token = Vue.ls.get('token')
    token && (config.headers = {
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MTc2ODkxOTIsImlhdCAiOjE2MTUwOTcxOTIsImlzcyI6Impzd2VpMzBALiMkIiwiZG9tYWluIjoiIiwidGV4dCI6IjcwY2IyMDdhZjRkMTc2ZmY2MDk3YTU3ODJiM2NlMzVkIn0.GCP49j6Fwy0L2stVnpcgOKmRwHDQ2aoO7rzoRTO3mpQ'
    })
  })

  $axios.onResponse(req => {
    return req.data
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/exception/400')
    } else if(code === 403) {
      redirect('/exception/403')
    } else if(code === 404) {
      redirect('/exception/404')
    } else if(code === 500) {
      redirect('/exception/500')
    }
  })
}
