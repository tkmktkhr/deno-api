import { Vocabulary } from "../../../entities/vocabulary.ts";
import { Response } from "../../responses/response.ts";

// Because this is used in some classes, define as abstract class but interface.
export abstract class IVocabularyRepository {
  abstract async findAll(): Promise<Response<Vocabulary[]>>;
  abstract async find(randomId: number): Promise<Response<Vocabulary>>;
}
