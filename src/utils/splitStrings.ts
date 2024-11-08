export default function splitStringsUsingRegex(input: string): string[] {
  const characters: string[] = [];
  const regex = /[\s\S]/gu;

  let match;
  while ((match = regex.exec(input)) !== null) {
    characters.push(match[0]);
  }

  return characters;
}
