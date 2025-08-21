package main

func findTheDifference(s string, t string) byte {
	cnt := [26]int{}
	for _, ch := range s {
		cnt[ch-'a']++
	}

	for i := 0; ; i++ {
		ch := t[i]
		cnt[ch-'a']--
		if cnt[ch-'a'] < 0 {
			return ch
		}
	}
}

//   2. ch-'a' 的作用

//   - 将字符转换为数组索引：
//     - 'a' - 'a' = 0
//     - 'b' - 'a' = 1
//     - 'c' - 'a' = 2
// 初始化: cnt = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

// 处理 s = "abcd":
//   'a': cnt[0]++ → cnt[0] = 1
//   'b': cnt[1]++ → cnt[1] = 1
//   'c': cnt[2]++ → cnt[2] = 1
//   'd': cnt[3]++ → cnt[3] = 1
// 结果: cnt = [1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

// 处理 t = "abcde":
//   'a': cnt[0]-- → cnt[0] = 0, 不小于0
//   'b': cnt[1]-- → cnt[1] = 0, 不小于0
//   'c': cnt[2]-- → cnt[2] = 0, 不小于0
//   'd': cnt[3]-- → cnt[3] = 0, 不小于0
//   'e': cnt[4]-- → cnt[4] = -1, 小于0 → 返回 'e'
