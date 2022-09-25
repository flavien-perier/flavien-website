import MarkdownModel from "./markdown.model";

export default interface SearchModel {
  pages: number;
  files: MarkdownModel[];
}
