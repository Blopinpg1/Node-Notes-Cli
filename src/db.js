import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Recreate __dirname since it's not available in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use an absolute path (relative paths can break)
const DB_PATH = path.join(__dirname, "..", "db.json");

export const getDB = async () => {
  const db = await fs.readFile(DB_PATH, "utf-8");
  return JSON.parse(db);
};

export const saveDB = async (db) => {
  await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));
  return db;
};

export const insertDB = async (note) => {
  const db = await getDB();
  db.notes.push(note);
  await saveDB(db);
  return note;
};
