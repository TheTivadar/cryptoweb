import { createNews } from "../news";

export async function createNewsManually(formData: FormData) {
  "use server";
  const title = formData.get('title') as string ;
  const description = formData.get('description') as string ;
  const link = formData.get('link') as string ;
  const type = formData.get('type') as "TWEET" | "ARTICLE" | "UPDATE";

  if (!title || !description) {
    throw new Error("Name and email are required fields.");
  }


  await createNews({ title, description, link, type });

}