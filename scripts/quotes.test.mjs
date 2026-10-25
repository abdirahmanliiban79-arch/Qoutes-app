import assert from "node:assert/strict";
import test from "node:test";
import { quotes } from "../src/data/quotes.ts";
import { CATEGORIES } from "../src/types/quote.ts";

test("has at least 60 quotes", () => {
  assert.ok(quotes.length >= 60, `found ${quotes.length}`);
});

test("ids are unique and every field is filled", () => {
  assert.equal(new Set(quotes.map((q) => q.id)).size, quotes.length);
  for (const q of quotes) {
    assert.ok(q.id && q.text.trim() && q.author.trim(), `incomplete: ${q.id}`);
    assert.ok(CATEGORIES.includes(q.category), `bad category: ${q.id}`);
  }
});

test("no duplicate quote text", () => {
  const texts = quotes.map((q) => q.text.toLowerCase());
  assert.equal(new Set(texts).size, texts.length);
});

test("every category has at least 5 quotes", () => {
  for (const category of CATEGORIES) {
    const count = quotes.filter((q) => q.category === category).length;
    assert.ok(count >= 5, `${category} has ${count}`);
  }
});
