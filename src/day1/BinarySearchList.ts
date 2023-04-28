export default function bs_list(haystack: number[], needle: number): boolean {
    let lowValue = 0;
    let highValue = haystack.length;

    do {
        const middle = lowValue + Math.floor((highValue - lowValue) / 2);
        const target = haystack[middle];

        if (target === needle)
            return true
        else if (target > needle)
            highValue = middle;
        else
            lowValue = middle + 1

    } while (lowValue < highValue)

    return false
}
