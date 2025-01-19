/* eslint-disable @typescript-eslint/no-explicit-any */
import { IHTTPClient } from "../interfaces/IHTTPClient";

const FetchClient: IHTTPClient = {
  async get(url: string, headers: any = {}){
    return fetch(url, { headers });
  },
  async post(url: string, body: any, headers: any = {}){
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        "Content-Type": 'application/json',
        ...headers
      }
    })
  },
  async put(url: string, body: any , headers: any = {}) {
    return fetch(url, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        "Content-Type": 'application/json',
        ...headers
      }
    })
  },
  async delete(url: string, headers: any = {}) {
    return fetch(url, {
      method: 'DELETE',
      headers
    })
  },
};

export default FetchClient;
