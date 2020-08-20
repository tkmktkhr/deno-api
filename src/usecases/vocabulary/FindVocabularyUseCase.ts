import { IVocabularyRepository } from "../../interfaces/repositories/vocabularies/IVocabularyRepository.ts";

export class FindVocabularyUseCase {
  findVocabularyRepository: IVocabularyRepository;

  constructor(findVocabularyRepository: IVocabularyRepository) {
    this.findVocabularyRepository = findVocabularyRepository;
  }

  find(randomId: number) {
    return this.findVocabularyRepository.find(randomId);
  }

  findAll() {
    return this.findVocabularyRepository.findAll();
  }
}
