/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head){
        return null;
    }  
    let dummy = {val: 0, next: null};
    let heady = dummy;
    dummy.next = head;
    
    while(dummy !== null){
        console.log(dummy.val)
        if(dummy.next !== null && dummy.next.val === val){
            dummy.next = dummy.next.next
            continue;
        }
        dummy = dummy.next;
    }
    
    return heady.next;
};

/* 
0 [2,2,1,2]
     d  | 

*/