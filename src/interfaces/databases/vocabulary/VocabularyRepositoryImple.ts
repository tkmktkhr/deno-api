import { toMap, fromMap } from "../mapConverter.ts";
import { FileCode } from "../../../constants/FileCode.ts";
import { IVocabularyRepository } from "../../repositories/vocabularies/IVocabularyRepository.ts";
import { Vocabulary } from "../../../entities/vocabulary.ts";
import { Response } from "../../responses/response.ts";

export class VocabularyRepository implements IVocabularyRepository {
  async find(id: number): Promise<Response<Vocabulary>> {
    const vocabularies = await this.findAll();
    // Converter
    const targetVocabulary = toMap(vocabularies).get(id);
    console.log(targetVocabulary);
    if (!targetVocabulary) {
      // TODO / Error Handler
      // return [undefined, new Error("Cannnot find item.!!!!")];
      throw new Error();
    }
    const res: Response<Vocabulary> = {
      data: [
        targetVocabulary,
      ],
    };
    return res;
  }

  async findAll(): Promise<Response<Vocabulary[]>> {
    const localData = await Deno.readFile(FileCode.FILE_PATH);
    const decoder = new TextDecoder();
    console.log("Ended decorded.");
    console.log(JSON.parse(decoder.decode(localData)));
    const res: Response<Vocabulary[]> = {
      data: JSON.parse(decoder.decode(localData)),
    };
    return res;
  }
}
