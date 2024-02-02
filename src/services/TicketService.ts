import axios, { AxiosInstance } from 'axios'

export default class TicketServiceApi {
  private baseURL: string
  private client: AxiosInstance


  constructor(baseURL?) {

    if (!baseURL) {
      baseURL = 'https://tickets.bankong.cloud'
    }
    if (baseURL?.endsWith('/')) {
      baseURL = baseURL.slice(0, -1)
    }

    this.baseURL = baseURL

    this.client = axios.create({
      baseURL: this.baseURL,
      withCredentials: false,
      headers: {
        accept: 'application/json'
      }
    })


  }

  async postTicket(payload: any) {
    const response = await this.client.post(this.baseURL + '/post/', payload, {
      headers: {
        'content-type': 'text/json',
        'apikey': 'jkorlnoxltg5fgkbvzuTZViuztvtlhj'
      }
    })
    return response.data;
  }
}
