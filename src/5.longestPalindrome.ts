/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start
function longestPalindrome(s: string): string {
    let r: string = '';
    for (let i = 0; i < s.length; i++) {
        let m1 = getLongestPalindromeByIndex(i, i, s);
        let m2 = getLongestPalindromeByIndex(i, i + 1, s);
        let nr = m1.length >= m2.length ? m1 : m2;
        r = nr.length > r.length ? nr : r;
    }
    return r;
};

function getLongestPalindromeByIndex(l: number, r: number, s: string): string {
    let res = '';
    while (l >= 0 && r <= s.length - 1 && s.charAt(l) === s.charAt(r)) {
        res = s.substring(l--, r++ + 1);
    }
    return res;
}

// @lc code=end

