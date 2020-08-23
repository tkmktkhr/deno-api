import { Router } from "../deps.ts";
import { Vocabulary } from "../entities/vocabulary.ts";
import { VocabularyController } from "../interfaces/controllers/vocabulary/vocabularyController.ts";

export const router = new Router();
const vocabularyController = new VocabularyController();

router.get(
  "/vocabularies",
  async (context) => {
    // controller
    const result = await vocabularyController.findAllVocabularies();
    console.log("Ended process here is Router");
    console.log(result);
    context.response.body = result;
  },
);
