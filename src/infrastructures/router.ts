import { Router, Context, RouterContext } from "../deps.ts";
import { Vocabulary } from "../entities/vocabulary.ts";
import { VocabularyController } from "../interfaces/controllers/vocabulary/vocabularyController.ts";

export const router = new Router();
const vocabularyController = new VocabularyController();

router.get(
  "/vocabularies",
  async (context: RouterContext) => {
    // controller
    const result = await vocabularyController.findAllVocabularies();
    console.log("Ended process here is Router");
    console.log(result);
    context.response.body = result;
  },
);

router.get(
  "/vocabularies/:id",
  async (context: RouterContext) => {
    // controller
    console.log(context.params);
    const targetId: string = context.params.id as string;
    const result = await vocabularyController.findVocabulary(targetId);
    // const result = await vocabularyController.findAllVocabularies();
    console.log("Ended process here is Router");
    console.log(result);
    context.response.body = result;
  },
);
