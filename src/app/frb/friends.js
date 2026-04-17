import { readFile } from "node:fs/promises";
import path from "node:path";

export async function getFriends() {
  const filePath = path.join(process.cwd(), "public", "yourfriends.json");
  const fileContents = await readFile(filePath, "utf-8");
  return JSON.parse(fileContents);
}
