interface IVocabulary {
  word: string;
  meaning: string;
  example: string;
  answerCorrect: number;
  answerWrong: number;
}

export class Vocabulary implements IVocabulary {
  word: string;
  meaning: string;
  example: string;
  answerCorrect: number;
  answerWrong: number;

  constructor(init: Partial<IVocabulary>) {
    Object.assign(this, init);
  }
}