/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
    let p1 = l1;
    let p2 = l2;

    const list = {};
    let node = list;

    let carry = 0;
    while (p1 || p2) {
        const v1 = p1?.val ?? 0;
        const v2 = p2?.val ?? 0;

        const sum = v1 + v2 + carry;
        const val = sum % 10;
        carry = Math.floor(sum / 10);

        node.val = val;
        node.next = {};

        if (p1) {
            p1 = p1.next;
        }
        if (p2) {
            p2 = p2.next;
        }

        if (p1 || p2 || carry) {
            node = node.next;
        }
    }

    if (carry) {
        node.val = carry;
    }
    node.next = null;

    return list;
};

module.exports = { addTwoNumbers };
