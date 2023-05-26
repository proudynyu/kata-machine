export default function bs_list(haystack: number[], needle: number): boolean {
    let high = haystack.length
    let low = 0

    do {
        const middle = low + Math.floor((high - low) / 2)
        const target = haystack[middle]

        if (needle === target) {
            return true
        } else if (needle < target) {
            high = middle
        } else {
            low = middle + 1
        }
    } while (low < high)

    return false
}

