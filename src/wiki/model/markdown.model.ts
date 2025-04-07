export default interface MarkdownModel {
  title: string;
  type: "ARTICLE" | "BLOG" | "DOCUMENTATION" | "WIKI";
  categories: string[];
  description: string;
  author: string;
  date: string;
  filename: string;
  url: string;
}
