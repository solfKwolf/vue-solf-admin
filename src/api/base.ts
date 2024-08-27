import service from "@/utils/request"

interface LoginParams {
  password: string;
  username: string;
}
export async function loginApi(data:LoginParams) {
  return service.post('/login', data);
}
