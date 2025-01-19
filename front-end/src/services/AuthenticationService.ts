import { IHTTPClient } from "../interfaces/IHTTPClient";
import FetchClient from "../serviceClients/FetchClient";

interface IRegister {
  name: string;
  email: string;
  password: string;
}

class AuthenticationService {

  private httpClient: IHTTPClient;
  private baseUrl: string;

  constructor(httpClient: IHTTPClient, baseUrl: string){
    this.httpClient = httpClient;
    this.baseUrl = baseUrl;
  }

  async register({ name, email, password }: IRegister){
      try {
        const response = await this.httpClient.post(`${this.baseUrl}/register`, { name, email, password });
        const data = await response.json();
        return data;
      } catch (error){
        console.error(error);
      }
  }
}

export default new AuthenticationService(FetchClient, 'http://localhost:3000');
