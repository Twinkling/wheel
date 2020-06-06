/**
 * Hyphenate a camelCase string
 */
export function hyphenate(str: string): string {
    const reg = /([a-z\d])([A-Z])/g;
    return str.replace(reg, '$1-$2').toLowerCase();
}
