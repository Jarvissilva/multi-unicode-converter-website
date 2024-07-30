import { zg2uni, uni2zg } from "rabbit-node";

export function zawgyiToUnicode(text) {
  return zg2uni(text);
}

export function unicodeToZawgyi(text) {
  return uni2zg(text);
}
