import { toMap, fromMap } from "../mapConverter.ts";
import { FileCode } from "../../../constants/FileCode.ts";
import { IVocabularyRepository } from "../../repositories/vocabularies/IVocabularyRepository.ts";
import { Vocabulary } from "../../../entities/vocabulary.ts";

export class VocabularyRepository implements IVocabularyRepository {
  async find(id: number): Promise<Vocabulary> {
    //   const vocabularies = await this.findAll();
    //   const targetVocabulary = toMap(vocabularies).get(id);
    // if (!targetVocabulary) {
    // TODO / Error Handler
    // return [undefined, new Error("Cannnot find item.!!!!")];
    // }
    //   return targetVocabulary;

    return new Vocabulary(
      1,
      "abc",
      "nothing",
      "abc means nothing.",
      0,
      0,
    );
  }

  async findAll(): Promise<Vocabulary[]> {
    const localData = await Deno.readFile(FileCode.FILE_PATH);
    const decoder = new TextDecoder();
    console.log("Ended decorded.");
    console.log(JSON.parse(decoder.decode(localData)));
    return JSON.parse(decoder.decode(localData));
  }
}
