class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function getIntersectionNode(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (!l1 || !l2) return null;
    let l1_head: ListNode | null = l1, l2_head: ListNode | null = l2;
    while (l1_head !== l2_head) {
        l1_head = l1_head ? l1_head.next : l2;
        l2_head = l2_head ? l2_head.next : l1;
    }
    return l1_head;
};