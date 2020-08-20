import { FILE_PATH } from "../../constants/FileCode.ts";
import { IVocabularyRepository } from "../repositories/vocabularies/IVocabularyRepository.ts";
import { Vocabulary } from "../../entities/vocabulary.ts";

export class VocabularyRepository extends IVocabularyRepository {
  async find(randomId: number): Promise<Vocabulary> {
    // TODO
  }

  async findAll(): Promise<Vocabulary[]> {
    const localData = await Deno.readFile(FILE_PATH);
    const decoder = new TextDecoder();
    return JSON.parse(decoder.decode(localData));
  }
}
