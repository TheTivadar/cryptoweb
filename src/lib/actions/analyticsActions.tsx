"use server";

import { updateGlobalBalances } from "../analytics";

export async function createAnalytics(prevState: any,formData: FormData) {
  await updateGlobalBalances();
}