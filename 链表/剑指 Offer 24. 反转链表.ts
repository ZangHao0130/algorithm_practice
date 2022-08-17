
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function reverseList(head: ListNode | null): ListNode | null {
    const reverseList = new ListNode();
    while(head) {
        const tempList = new ListNode(head.val);
        tempList.next = reverseList.next;
        reverseList.next = tempList;
        head = head.next;
    }
    return reverseList.next;
};