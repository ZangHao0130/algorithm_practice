
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function reversePrint(head: ListNode | null): number[] {
    const result:number[] = [];
    const reverseList = new ListNode();
    while(head) {
        const tempList = new ListNode(head.val);
        tempList.next = reverseList.next;
        reverseList.next = tempList;
        head = head.next;
    }
    let finalList = reverseList.next;
    while(finalList) {
        result.push(finalList.val)
        finalList=finalList.next;
    }

    return result;
};