import { Vocabulary } from "../../../entities/vocabulary.ts";

// Because this is used in some classes, define as abstract class but interface.
export abstract class IVocabularyRepository {
  abstract async find(randomId: number): Promise<Vocabulary>;
  abstract async findAll(): Promise<Vocabulary[]>;
}
