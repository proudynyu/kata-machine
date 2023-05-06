// implementation without steps
// export default function two_crystal_balls(breaks: boolean[]): number {
//     // [f, f, f, f, t, t, t, t]
//
//     let mid: number = Math.floor(breaks.length / 2);
//
//     if (!breaks[mid]) {
//         for(; mid < breaks.length; ++mid) {
//             if (breaks[mid]) {
//                 return mid
//             }
//         }
//     }
//     else {
//         for(; mid >= 0; --mid) {7
//             if (!breaks[mid])
//                 return mid + 1
//         }
//     }
//
//     return -1
// }

export default function two_crystal_balls(breaks: boolean[]): number {
    // [f, f, f, f, t, t, t, t]

    const step = Math.floor(Math.sqrt(breaks.length / 2))

    let i = 0;

    for(; i < breaks.length; i+= step) {
        if (breaks[i])
            break
    }

    let j = i - step;


    for(; j < i; j++) {
        if (breaks[j]) {
            return j
        }
    }

    return -1
}
