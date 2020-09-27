import MarkdownHeader from "./MarkdownHeader";

export default interface SearchResult {
    pages: number;
    files: MarkdownHeader[];
}
