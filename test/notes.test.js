import { it, jest, describe } from "@jest/globals";

// Mock db.js
jest.unstable_mockModule("../src/db.js", () => ({
  insertDB: jest.fn(), // 👈 use insertDB instead of insert
  getDB: jest.fn(),
  saveDB: jest.fn(),
}));

const { insertDB, getDB, saveDB } = await import("../src/db.js");
const { newNote, getAllNotes, removeNote } = await import("../src/notes.js");

beforeEach(() => {
  insertDB.mockClear();
  getDB.mockClear();
  saveDB.mockClear();
});

//grouping tests with describe
describe("cli app", () => {
  test("getAllNotes returns all notes", async () => {
    const db = {
      notes: ["note1", "note2", "note3"],
    };
    getDB.mockResolvedValue(db);

    const result = await getAllNotes();
    expect(result).toEqual(db.notes);
  });
  test("removeNote does nothing if id is not found", async () => {
    const notes = [
      { id: 1, content: "note 1" },
      { id: 2, content: "note 2" },
      { id: 3, content: "note 3" },
    ];
    saveDB.mockResolvedValue(notes);

    const idToRemove = 4;
    const result = await removeNote(idToRemove);
    expect(result).toBeUndefined();
  });
});

//it convention to write tests

it("it should do", async () => {
  const note = {
    content: "this is my note",
    id: 1,
    tags: ["hello"],
  };

  insertDB.mockResolvedValue(note); // 👈 correct mock target

  const result = await newNote(note.content, note.tags); // 👈 call function from notes.js

  expect(result.content).toEqual(note.content);
  expect(result.tags).toEqual(note.tags);
});
