import { IVocabularyRepository } from "../../interfaces/repositories/vocabularies/IVocabularyRepository.ts";
import { Vocabulary } from "../../entities/vocabulary.ts";
import { Response } from "../../interfaces/responses/response.ts";

export class FindVocabularyUseCase {
  findVocabularyRepository: IVocabularyRepository;

  constructor(findVocabularyRepository: IVocabularyRepository) {
    this.findVocabularyRepository = findVocabularyRepository;
  }

  findAll(): Promise<Response<Vocabulary[]>> {
    return this.findVocabularyRepository.findAll();
  }

  find(randomId: number) {
    return this.findVocabularyRepository.find(randomId);
  }
}
