export interface Answer {
  answer: string;
  context: string;
  query: string;
  question: string;
}

export interface AnswerReqPayload {
  question: string;
  debug?: boolean;
  model?: 'efasto' | 'apolo';
  language?: 'pt' | 'en';
}
