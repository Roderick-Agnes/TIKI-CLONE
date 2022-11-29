import parse from "html-react-parser";
import DOMPurify from "dompurify";

export const htmlFrom = (htmlString) => {
  const cleanHtmlString = DOMPurify.sanitize(
    htmlString,
    { USE_PROFILES: { html: true } },
  );
  const html = parse(cleanHtmlString);
  return html;
};
