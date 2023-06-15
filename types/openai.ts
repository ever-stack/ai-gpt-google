import { OPENAI_API_TYPE } from '../utils/app/const';

export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

// gpt-4, gpt-4-0314, gpt-t-32k, gpt-4-32k-0314
// gpt-3.5-turbo, gpt-3.5-turbo-0301, text-davinci-003, text-davinci-002
export enum OpenAIModelID {
  GPT_3_5 = 'gpt-3.5-turbo',
  GPT_3_5_0301 = 'gpt-3.5-turbo-0301',
  TEXT_DAVINCI_003 = 'text-davinci-003',
  TEXT_DAVINCI_002 = 'text-davinci-002',
  // CODE_DAVINCI_002 = 'code-davinci-002',
  GPT_4 = 'gpt-4',
  GPT_4_0314 = 'gpt-4-0314',
  GPT_4_32K = 'gpt-4-32k',
  GPT_4_32K_0314 = 'gpt-4-32k-0314',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.GPT_3_5;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
  [OpenAIModelID.GPT_3_5]: {
    id: OpenAIModelID.GPT_3_5,
    name: 'GPT-3.5',
    maxLength: 12000,
    tokenLimit: 4096,
  },
  [OpenAIModelID.GPT_3_5_0301]: {
    id: OpenAIModelID.GPT_3_5_0301,
    name: 'GPT-3.5-0301',
    maxLength: 12000,
    tokenLimit: 4096,
  },
  [OpenAIModelID.TEXT_DAVINCI_003]: {
    id: OpenAIModelID.TEXT_DAVINCI_003,
    name: 'TEXT-DAVINCI-003',
    maxLength: 12000,
    tokenLimit: 4097,
  },
  [OpenAIModelID.TEXT_DAVINCI_002]: {
    id: OpenAIModelID.TEXT_DAVINCI_002,
    name: 'TEXT-DAVINCI-002',
    maxLength: 12000,
    tokenLimit: 4097,
  },
  // [OpenAIModelID.CODE_DAVINCI_002]: {
  //   id: OpenAIModelID.CODE_DAVINCI_002,
  //   name: 'CODE-DAVINCI-002',
  //   maxLength: 24000,
  //   tokenLimit: 8001,
  // },
  [OpenAIModelID.GPT_4]: {
    id: OpenAIModelID.GPT_4,
    name: 'GPT-4',
    maxLength: 24000,
    tokenLimit: 8192,
  },
  [OpenAIModelID.GPT_4_0314]: {
    id: OpenAIModelID.GPT_4_0314,
    name: 'GPT-4-0314',
    maxLength: 24000,
    tokenLimit: 8192,
  },
  [OpenAIModelID.GPT_4_32K]: {
    id: OpenAIModelID.GPT_4_32K,
    name: 'GPT-4-32K',
    maxLength: 96000,
    tokenLimit: 32768,
  },
  [OpenAIModelID.GPT_4_32K_0314]: {
    id: OpenAIModelID.GPT_4_32K_0314,
    name: 'GPT-4-0314',
    maxLength: 96000,
    tokenLimit: 32768,
  },
};
