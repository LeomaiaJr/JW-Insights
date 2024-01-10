import Api from '..';
import { AnswerReqPayload } from './dto/AnswerDTO';

class AnswerService {
  private static endpoints = {
    chat: '/answer',
    ping: '/ping',
  };

  public static async getAnswer(payload: AnswerReqPayload) {
    const { data } = await Api.post<string>(this.endpoints.chat, payload);

    return data;
  }

  public static async test() {
    const { data } = await Api.get<string>(this.endpoints.ping);

    return data;
  }
}

export default AnswerService;
