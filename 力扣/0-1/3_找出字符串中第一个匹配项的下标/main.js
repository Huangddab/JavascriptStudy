function strStr(haystack, needle) {
    if (needle.length === 0) {
        return 0;
    }
    
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        if (haystack.substring(i, i + needle.length) === needle) {
            return i;
        }
    }
    return -1;
}

console.log(strStr("sadbutsad", "sad"));    // 0
console.log(strStr("leetcode", "leeto"));   // -1