/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {

    // edge case
    if(head === null){
        return false;
    }
    
    if(!head.next){
        return false;
    }
    if(!head.next.next){
        return false;
    }
    
    let slow = head;
    let fast = head.next.next;
    
    while(fast && fast.next && fast.next.next){
        if(fast.val === slow.val){
            return true;            
        }
        
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return false;
};