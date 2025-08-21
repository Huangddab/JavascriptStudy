function mergeAlternately(word1, word2) {
    let p = 0, q = 0
    let result = ""

    while (p < word1.length || q < word2.length) {
        if (p < word1.length) {
            result += word1[p]
            p++
        }
        if (q < word2.length) {
            result += word2[q]
            q++
        }
    }
    return result
}



