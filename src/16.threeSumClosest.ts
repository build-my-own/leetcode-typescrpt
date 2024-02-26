/*
 * @lc app=leetcode.cn id=16 lang=typescript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * 1. 这里只讨论最坏情况下的复杂度
 * 2. 忽略排序算法本身造成的复杂度
 * ---
 * 时间复杂度
 * 1. for 循环是 O(n)
 * 2. while 循环是 O(n)
 * 3. 所以最终是 O(n2)
 * ---
 * 空间复杂度
 * 1. nums 消耗 O(n) 的空间
 * O(n)
 */
function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let res = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < n - 2; i++) {
        /**
         * 剪枝：跳过迭代重复的数字
         */
        if (nums[i] === nums[i - 1]) {
            continue;
        }
        let l = i + 1;
        let r = n - 1;
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            /**
             * 剪枝：直接返回差集为 0 的数字
             */
            if (sum === target) {
                return target;
            }
            if (Math.abs(res - target) > Math.abs(sum - target)) {
                res = sum;
            } else if (sum < target) {
                /**
                 * 剪枝：左指针跳过重复的数字
                 */
                while (l < r && nums[l] === nums[l + 1]) {
                    l += 1;
                }
                l += 1;
            } else if (sum > target) {
                /**
                 * 剪枝：右指针跳过重复的数字
                 */
                while (l < r && nums[r] === nums[r - 1]) {
                    r -= 1;
                }
                r -= 1;
            }
        }
    }
    return res;
};

// @lc code=end

