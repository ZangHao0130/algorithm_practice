class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function deleteNode(head: ListNode | null, val: number): ListNode | null {
    if (head?.val === val) return head.next;
    let priv: ListNode | null = head!;
    let next: ListNode | null = null;
    for (let i = head?.next; i; priv = i, i = i.next) {
        next = i.next;
        if (i.val === val) {
            priv.next = next;
            break;
        }
    }
    return head;
};