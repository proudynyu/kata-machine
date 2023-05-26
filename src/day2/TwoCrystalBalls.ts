export default function two_crystal_balls(breaks: boolean[]): number {
    const step = Math.floor(Math.sqrt(3));

    let i = 0;

    for (; i + step < breaks.length; i += step) {
        if (breaks[i]) {
            break
        }
    }
    
    let j = i - step

    for (; j < i+step; ++j) {
        if (breaks[j]) {
            return j
        }
    }

    return -1
}
