class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const head = new ListNode();
    let l1_head = l1, l2_head = l2, h = head;
    for (; l1_head && l2_head && h; h = h.next) {
        if (l1_head.val <= l2_head.val) {
            h.next = l1_head;
            l1_head = l1_head.next;
        } else {
            h.next = l2_head;
            l2_head = l2_head.next;
        }
    }
    while (l1_head) {
        h.next = l1_head;
        l1_head = l1_head.next;
        h = h.next;
    }
    while (l2_head) {
        h.next = l2_head;
        l2_head = l2_head.next;
        h = h.next;
    }
    return head.next;
};