export const required = value => {
    if (value) return undefined
    return 'Input is required';
}