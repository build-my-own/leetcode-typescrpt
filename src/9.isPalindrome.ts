/*
 * @lc app=leetcode.cn id=9 lang=typescript
 *
 * [9] 回文数
 * 
 * 时间复杂度：O(log(n)) n 是数字的大小
 * 空间复杂度：O(1)
 */

// @lc code=start
function isPalindrome(x: number): boolean {
    if (x >= 0 && x < 10) {
        return true;
    }
    if (x < 0 || x % 10 === 0) {
        return false;
    }
    let r = 0;
    let l = x;
    while (r < l) {
        r = r * 10 + l % 10;
        l = Math.floor(l / 10);
    }
    return l === r || l === Math.floor(r / 10);
};
// @lc code=end

/**
 * 时间复杂度 O(n) n 是数字的位数
 * 空间复杂度 O(1)
 */
function isPalindrome1(x: number): boolean {
    if (x < 0) {
        return false;
    }
    if (x < 10) {
        return true;
    }
    let r = 0;
    let n = x;
    while (n > 0) {
        r = r * 10 + n % 10;
        n = Math.floor(n / 10);
    }
    return r === x;
};