import { Router, Context, RouterContext } from "../../../deps.ts";
import { Vocabulary } from "../../../entities/vocabulary.ts";
import { FindVocabularyUseCase } from "../../../usecases/vocabulary/FindVocabularyUseCase.ts";
import { VocabularyRepository } from "../../databases/vocabulary/VocabularyRepositoryimple.ts";
import { IVocabularyRepository } from "../../repositories/vocabularies/IVocabularyRepository.ts";

export class VocabularyController {
  private vocabularyRepository: IVocabularyRepository;

  constructor() {
    this.vocabularyRepository = new VocabularyRepository();
  }

  async findAllVocabularies(): Promise<Vocabulary[]> {
    console.log("Started Controller.");
    const usecase = new FindVocabularyUseCase(this.vocabularyRepository);
    const result = await usecase.findAll();
    return result;
  }

  async findVocabulary(id: string): Promise<Vocabulary> {
    const usecase = new FindVocabularyUseCase(this.vocabularyRepository);
    const result = await usecase.find(+id);
    return result;
  }
}
