export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    do {
        const middle = low + Math.floor((high - low) / 2);
        const value = haystack[middle];

        if (value === needle) 
            return true;
        else if (value < needle)
            low = middle
        else 
            high = middle - 1
        
    } while(low < high)

    return false
}
