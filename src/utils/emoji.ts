import foxomoji from 'foxomoji';

/**
 * Replaces all text emojis with image emojis from the foxomoji library.
 * @param text - The input text containing emojis.
 * @param resolution - The resolution of the emoji images (either '64' or '160').
 * @returns The text with emojis replaced by image tags.
 */
export const replaceEmojis = (text: string, resolution: '64' | '160' = '64'): string => {
    const emojis = foxomoji.getAllEmojis();
    let result = text;

    emojis.forEach((emoji: { code: string; char: string; }) => {
        const escapedChar = escapeRegExp(emoji.char);
        const imgTag = `<img src="/node_modules/foxomoji/dist/emoji-${resolution}/${emoji.code}.png" class="emoji" alt="${emoji.char}" draggable="false">`;
        result = result.replace(new RegExp(escapedChar, 'g'), imgTag);
    });

    return result;
};

/**
 * Escapes special characters in a string for use in a regular expression.
 * @param string - The string to escape.
 * @returns The escaped string.
 */
function escapeRegExp(string: string): string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}