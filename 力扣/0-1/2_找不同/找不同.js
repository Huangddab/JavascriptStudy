// 计数器方法
function findTheDifference(s, t) {
    const charCount = {};

    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    // s="abcd" 
    // charCount = {a:1,b:1,c:1,d:1} 
    for (let char of t) {
        if (!charCount[char] || charCount[char] === 0) {
            return char;
        }
        charCount[char]--;
    }
    //  t = "abcde" 
    // charCount = {a:0,b:0,c:0,d:0,e:undefined}

    return "";
}