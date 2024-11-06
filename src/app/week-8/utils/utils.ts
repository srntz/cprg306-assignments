export function FormatString(str: string): string {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  str = str.replace(/[\p{Emoji_Presentation}\p{Emoji}\uFE0F]/gu, "");
  str = str.split(",")[0];
  return str;
}
