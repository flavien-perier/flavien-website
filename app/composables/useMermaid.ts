import { onMounted, watch } from "vue";
import type { Ref } from "vue";

let initialized = false;

async function renderMermaid() {
  if (import.meta.server) {
    return;
  }

  const nodes = document.querySelectorAll<HTMLElement>("pre.mermaid:not([data-processed])");
  if (nodes.length === 0) {
    return;
  }

  const mermaid = (await import("mermaid")).default;

  if (!initialized) {
    mermaid.initialize({
      startOnLoad: false,
      theme: "default",
      securityLevel: "strict",
    });
    initialized = true;
  }

  try {
    await mermaid.run({ nodes, suppressErrors: true });
  } catch (error) {
    console.error("Failed to render mermaid diagrams:", error);
  }
}

export function useMermaid(content: Ref<string>) {
  onMounted(() => {
    void renderMermaid();
  });

  watch(content, () => {
    void renderMermaid();
  }, { flush: "post" });
}