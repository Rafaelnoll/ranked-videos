/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IHTTPClient {
  get: (url: string, headers?: any) => Promise<any>;
  post: (url: string, data: any, headers?: any) => Promise<any>;
  delete: (url: string, headers?: any) => Promise<any>;
  put: (url: string, data: any, headers?: any) => Promise<any>;
}
