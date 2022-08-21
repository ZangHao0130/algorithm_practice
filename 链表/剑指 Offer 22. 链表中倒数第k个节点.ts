class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
    let nodeCount = 0;
    for (let start = head; start; start = start.next) {
        nodeCount++;
    }
    while (nodeCount-- > k && head) {
        head = head?.next;
    }
    return head;
};