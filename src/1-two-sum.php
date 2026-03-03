<?php

/**
 * @param int[] $nums
 * @param int $target
 * @return int[]
 */
function twoSum($nums, $target) {
    $numsLength = count($nums);
    $pairs = [];

    for ($index = 0; $index < $numsLength; $index++) {
        $diff = $target - $nums[$index];

        // Store pair number -> current index
        if (!isset($pairs[$diff])) {
            $pairs[$diff] = $index;
        }

        // Pair found (not self)
        if (isset($pairs[$nums[$index]]) && $pairs[$nums[$index]] !== $index) {
            return [$pairs[$nums[$index]], $index];
        }
    }

    return [-1, -1];
}
