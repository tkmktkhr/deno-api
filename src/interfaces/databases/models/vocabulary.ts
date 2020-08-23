interface IVocabulary {
  id: number;
  word: string;
  meaning: string;
  example: string;
  answerCorrect: number;
  answerWrong: number;
}

export class Vocabulary implements IVocabulary {
  id: number;
  word: string;
  meaning: string;
  example: string;
  answerCorrect: number;
  answerWrong: number;

  // constructor(init: Partial<IVocabulary>) {
  //   Object.assign(this, init);
  // }

  constructor(
    id: number,
    word: string,
    meaning: string,
    example: string,
    answerCorrect: number,
    answerWrong: number,
  ) {
    this.id = id;
    this.word = word;
    this.meaning = meaning;
    this.example = example;
    this.answerCorrect = answerCorrect;
    this.answerWrong = answerWrong;
  }
}
