function copyCode(text: string) {
  if (navigator && "clipboard" in navigator && typeof navigator.clipboard?.writeText === "function") {
    navigator.clipboard.writeText(text).catch(() => {
      legacyCopy(text);
    });
    return;
  }
  legacyCopy(text);
}

function legacyCopy(text: string) {
  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.top = "0";
    textarea.style.left = "0";
    textarea.style.width = "1px";
    textarea.style.height = "1px";
    textarea.style.padding = "0";
    textarea.style.border = "none";
    textarea.style.outline = "none";
    textarea.style.boxShadow = "none";
    textarea.style.background = "transparent";

    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    try {
      document.execCommand("copy");
    } catch (e) {
    }

    document.body.removeChild(textarea);
  } catch {}
}

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.server || typeof window === "undefined") {
    return;
  }

  (window as any).copyCode = copyCode;
});
