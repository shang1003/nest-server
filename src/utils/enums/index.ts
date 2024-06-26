

/**
 * @description: 请求状态码
 */
export enum REQUEST_CODE {
  NOSUCCESS = -1, // 表示请求成功，但操作未成功
  SUCCESS = 200, // 表示请求成功
  BADREQUEST = 400, // 表示客户端发送的请求有错误
  UNAUTHORIZED = 401, // 表示客户端未提供身份验证凭据或身份验证凭据不正确
  NOTFOUND = 404, // 表示服务器无法找到请求的资源
  INTERNALSERVERERROR = 500, // 表示服务器内部错误
}

/**
 * @description: 请求提示语
 */
export enum REQUEST_MSG {
  SUCCESS = '操作成功',
  FAILURE = '操作失败',
}

/**
 * @description: 状态
 */
export enum STATUS {
  DISABLE, // 禁用
  NORMAL, // 正常
}

/**
 * @description: 是否
 */
export enum FLAG {
  NO, // 否
  YES, // 是
}



/**
 * @description: 性别
 */
export enum SEX {
  FEMALE = '0', // 女
  MALE = '1', // 男
  PRIVACY = '2', // 隐私
}
export enum Role {
  ORGADM = 'orgadm',
  TEACHER = 'teacher',
  LEARNING_CONSULTANT = "learning_consultant",
  CLERK = "clerk",
  COURSE_CONSULTANT = "course_consultant",
}







/**
 * @description: 请求方式
 */
export enum REQUEST_METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}
