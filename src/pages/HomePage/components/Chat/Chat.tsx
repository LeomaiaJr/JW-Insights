/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { AIMessage } from '../../../../components/AIMessage/AIMessage';
import { StyledTextArea } from '../../../../components/SyledTextArea/StyledTextArea';
import { UserMessage } from '../../../../components/UserMessage/UserMessage';
import useIsMobile from '../../../../hooks/useIsMobile';
import Typography from '@mui/material/Typography';
import { ExampleWrapper } from './styles';
import SnackbarUtils from '../../../../utils/SnackbarUtils';
import LinearProgress from '@mui/material/LinearProgress';
import AnswerService from '../../../../api/AnswerService';
import { AnswerReqPayload } from '../../../../api/AnswerService/dto/AnswerDTO';
import { useAppData } from '../../../../providers/AppDataProvider';
import * as texts from '../../constants/texts';

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system' | 'function';
  content: string;
}

export const Chat = () => {
  const { language } = useAppData();

  const textData =
    language === 'pt' ? texts.portugueseTexts : texts.englishTexts;

  const [chatData, setChatData] = useState({
    messages: [
      {
        role: 'assistant',
        content: textData.assistantFirstMessage,
      },
    ],
  } as { messages: ChatMessage[] });

  const [loading, setLoading] = useState(false);

  const isMobile = useIsMobile();

  const promptSuggestions = [
    textData.firstExample,
    textData.secondExample,
    textData.thirdExample,
    textData.fourthExample,
  ];

  const examples = promptSuggestions.slice(0, isMobile ? 2 : 4);

  const resetHandler = () => {
    setChatData({
      messages: [
        {
          role: 'assistant',
          content: textData.assistantFirstMessage,
        },
      ] as ChatMessage[],
    });
  };

  const getAnswer = async (question: string) => {
    try {
      setLoading(true);
      setChatData((prev) => ({
        messages: [
          ...prev.messages,
          {
            role: 'user',
            content: question,
          },
        ],
      }));

      const payload = {
        question,
        language,
        model: 'efasto',
      } as AnswerReqPayload;

      const res = await AnswerService.getAnswer(payload);
      setChatData((prev) => ({
        messages: [
          ...prev.messages,
          {
            role: 'assistant',
            content: res,
          },
        ],
      }));
    } catch {
      SnackbarUtils.error(textData.errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const question = e.currentTarget.question.value;
    if (question) {
      await getAnswer(question);
    } else {
      SnackbarUtils.error(textData.emptyQuestionError);
    }
  };

  useEffect(() => {
    if (chatData.messages.length <= 1) {
      setChatData({
        messages: [
          {
            role: 'assistant',
            content: textData.assistantFirstMessage,
          },
        ],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return (
    <div
      className="flex flex-col justify-between w-full p-6 pt-3 mt-4"
      style={{
        height: 'calc(100vh - 80px)',
      }}
    >
      <div
        className="flex flex-col gap-4"
        style={{
          height: 'calc(100% - 90px)',
          overflow: 'auto',
        }}
      >
        {(chatData?.messages || [])
          .filter((m) => m.role !== 'system')
          .map((message, index) => {
            const key = `${message.role}-${index}`;

            if (message.role === 'user') {
              return <UserMessage key={key} message={message.content ?? ''} />;
            }

            return <AIMessage key={key} messageData={message} first={true} />;
          })}
      </div>

      {chatData.messages.length <= 1 && (
        <div className="container mx-auto p-4">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {examples.map((example) => (
              <ExampleWrapper
                onClick={() => {
                  getAnswer(example);
                }}
              >
                <Typography>{example}</Typography>
              </ExampleWrapper>
            ))}
          </div>
        </div>
      )}

      {loading && <LinearProgress color="secondary" />}

      <div className="flex flex-row mb-2 mt-4 items-center justify-center">
        <form
          className="gap-2 flex flex-row items-center justify-center w-full"
          onSubmit={onSubmit}
          style={{
            display: 'flex',
          }}
        >
          <Button
            sx={{
              height: 'min-content',
            }}
            variant="contained"
            color="error"
            onClick={(e) => {
              e.preventDefault();
              resetHandler();
            }}
          >
            {textData.resetButton}
          </Button>

          <div className="flex w-full max-w-[800px]">
            <StyledTextArea
              maxLength={150}
              name="question"
              placeholder={textData.placeholder}
            />
          </div>

          <Button
            sx={{
              height: 'min-content',
            }}
            variant="contained"
            type="submit"
          >
            {textData.sendButton}
          </Button>
        </form>
      </div>
    </div>
  );
};
