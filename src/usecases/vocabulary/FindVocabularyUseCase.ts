import { IVocabularyRepository } from "../../interfaces/repositories/vocabularies/IVocabularyRepository.ts";

export class FindVocabularyUseCase {
  findVocabularyRepository: IVocabularyRepository;

  constructor(findVocabularyRepository: IVocabularyRepository) {
    this.findVocabularyRepository = findVocabularyRepository;
  }

  findAll() {
    return this.findVocabularyRepository.findAll();
  }

  find(randomId: number) {
    return this.findVocabularyRepository.find(randomId);
  }
}
