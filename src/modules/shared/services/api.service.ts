import axios, { AxiosInstance, AxiosResponse, RawAxiosRequestHeaders } from 'axios';
import { HttpMethodEnum } from '../enums/http-method.enum';

export class ApiService {
  private baseURL = 'http://localhost:3000';

  private axios?: AxiosInstance;

  async http<T>(method: HttpMethodEnum, path: string, data: any = {}) {
    const headers: RawAxiosRequestHeaders = {
      'Content-Type': 'application/json',
    };

    this.axios = axios.create({
      baseURL: this.baseURL,
      headers,
    });

    try {
      const response = await this.axios({
        method,
        url: path,
        data: data,
      });
      return this.handle<T>(response);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  handle<T>(response: AxiosResponse<T>) {
    return response;
  }

  get<T>(path: string): Promise<AxiosResponse<T>> {
    return this.http<T>(HttpMethodEnum.GET, path);
  }
}
