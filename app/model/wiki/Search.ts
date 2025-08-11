import type Markdown from "./Markdown";

export default interface Search {
  pages: number;
  files: Markdown[];
}