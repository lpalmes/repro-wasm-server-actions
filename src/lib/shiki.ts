import { createCssVariablesTheme, getHighlighter } from "shiki";

const highlighterPromise = getHighlighter({
  themes: ["nord"],
  langs: ["javascript", "python"],
});

export async function highlight(code: string, language: string) {
  const highlighter = await highlighterPromise;
  const output = highlighter.codeToHtml(code, {
    lang: language,
    theme: "nord",
  });
  return output;
}
