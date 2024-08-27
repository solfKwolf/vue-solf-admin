import axios from "axios";
import type { InternalAxiosRequestConfig, AxiosResponse } from "axios";
import { ElMessage } from "element-plus";

const errorCode: Record<string, string> = {
	401: '认证失败，无法访问系统资源',
	403: '当前操作没有权限',
	404: '访问资源不存在',
	default: '系统未知错误，请反馈给管理员',
};


const instance = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
  },
  // 默认超时时间
  timeout: 60000,
});

// 请求拦截
instance.interceptors.request.use(
  (
    config: InternalAxiosRequestConfig
  ): InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig> => {
    return config;
  },
  (error) => Promise.reject(error)
);

// 响应拦截
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    // 未设置状态码则默认成功状态
		const code = response.data.code || 200;
    // 获取错误信息
		const msg = errorCode[code] || response.data.msg || errorCode['default'];
    // 二进制数据则直接返回
    if (response.request.responseType === 'blob' || response.request.responseType === 'arraybuffer') {
			return response.data;
		}
    if (code === 401) {
      return Promise.reject('无效的会话，或者会话已过期，请重新登录。');
    } else if (code === 500) {
      ElMessage({ message: msg, type: 'error' });
			return Promise.reject(new Error(msg));
    } else if (code === 601) {
      ElMessage({ message: msg, type: 'warning' });
			return Promise.reject('error');
    } else if (code !== 200) {
      ElMessage({ message: msg, type: 'error' });
			return Promise.reject('error');
    } else {
      return response.data;
    }
  },
  (error: any) => {
    let { message } = error;
    if (message == "Network Error") {
      message = "后端接口连接异常";
    } else if (message.includes("timeout")) {
      message = "系统接口请求超时";
    } else if (message.includes("Request failed with status code")) {
      message = "系统接口" + message.substr(message.length - 3) + "异常";
    }
    ElMessage({ message: message, type: "error", duration: 5 * 1000 });
    return Promise.reject(error);
  }
);

export default instance;
