class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function swapPairs(head: ListNode | null): ListNode | null {
    const h = new ListNode(0, head);
    let h_node = h;
    for (let node = h_node.next, node_next = node?.next; node && node_next; node = h_node.next, node_next = node?.next) {
        node.next = node_next.next;
        node_next.next = node;
        h_node.next = node_next;
        if (!h_node.next.next) break;
        h_node = h_node.next.next;
    }
    return h.next;
};