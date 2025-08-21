function findTheDifference(s, t) {
    let result = ""
    for (let x = 0; x < s.length; x++) {
        const elementX = s[x];
        for (let j = 0; j < t.length; j++) {
            const elementY = t[j];
            if (elementX === elementY) break
        }
    }
    return result
}

findTheDifference("abcd", "abcde")