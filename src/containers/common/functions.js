// capitalize first letter
export function cFL(string) {
    if (!string) {
        return ""
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}
