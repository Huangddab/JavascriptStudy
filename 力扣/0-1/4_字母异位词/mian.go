package main

import (
	"fmt"
	"sort"
)

func isAnagram(s, t string) bool {
	s1, s2 := []byte(s), []byte(t)
	sort.Slice(s1, func(i, j int) bool { return s1[i] < s1[j] })
	sort.Slice(s2, func(i, j int) bool { return s2[i] < s2[j] })
	return string(s1) == string(s2)
}

func main() {
	fmt.Println(isAnagram("anagram", "sanagram"))

	s := []byte("234567")

	// 方案1：非稳定排序（快速排序）
	sort.Slice(s, func(i, j int) bool { return s[i] < s[j] })
	fmt.Println("非稳定排序结果:", string(s)) // 输出: "234567"（顺序可能因相等元素变化）

	// 方案2：稳定排序（保留原始顺序）
	s = []byte("234567") // 重置切片
	sort.SliceStable(s, func(i, j int) bool { return s[i] < s[j] })
	fmt.Println("稳定排序结果:", string(s)) // 输出: "234567"（相等元素顺序不变）
}

// func Slice(slice interface{}, less func(i, j int) bool)
// slice​​: 待排序的切片（支持任意类型，如 []int、[]string或自定义结构体切片）。
// ​​less​​: 比较函数，接收两个索引 i和 j，返回 true时表示 slice[i]应排在 slice[j]前。
