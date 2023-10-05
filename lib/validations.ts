import * as z from "zod";

export const QuestionSchema = z.object({
    title: z.string().min(5, { message: "Title must be 5 or more characters long" }).max(130),
    explanation: z.string().min(20, { message: "Question explanation must be 20 or more characters long" }),
    tags: z.array(z.string().min(2).max(15)).min(1).max(3)
  });
  