/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// var reorderList = function(head) {
//     let dummy = new ListNode(0,head)
//     let slow = dummy ,fast = dummy  ;

//     while(fast.next != null){
//         slow = slow.next
//         fast = slow.next.next
//     }
//     console.log("slow")
//     console.log(JSON.stringify(slow))
//     console.log("fast")
//     console.log(JSON.stringify(fast))

//     // Step 2: Reverse the second half of the list
//     let prev = null, curr = slow, next;
//     while (curr) {
//         next = curr.next; // Store the next node
//         curr.next = prev; // Reverse the current node's pointer
//         prev = curr;      // Move `prev` to the current node
//         curr = next;      // Move `curr` to the next node
//     }
//     // Now, `prev` is the head of the reversed second half
//     console.log(" ")
//     console.log("after reversal")
//     console.log(JSON.stringify(prev))


//     // Step 3: Merge the two halves
//     let first = head, second = prev;
//     while (second.next) {
//         let temp1 = first.next;  // Store the next node of the first half
//         let temp2 = second.next; // Store the next node of the second half
//         first.next = second;     // Link current node of the first half to the current node of the second half
//         second.next = temp1;     // Link current node of the second half to the next node of the first half
//         first = temp1;           // Move `first` pointer one step forward
//         second = temp2;          // Move `second` pointer one step forward
//     }

//     console.log(" ")
//     console.log("remapping completed")
//     console.log(JSON.stringify(head))

//     return dummy.next
// };

var reorderList = function(head) {
    if (!head || !head.next) return;

    let dummy = new ListNode(0, head);
    let slow = dummy, fast = dummy;

    // Step 1: Find the middle of the list
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // console.log("slow")
    // console.log(JSON.stringify(slow))
    // console.log("fast")
    // console.log(JSON.stringify(fast))

    // Step 2: Reverse the second half of the list
    let prev = null, curr = slow.next, next;
    slow.next = null; // Split the list into two halves
    while (curr) {
        next = curr.next; // Store the next node
        curr.next = prev; // Reverse the current node's pointer
        prev = curr;      // Move `prev` to the current node
        curr = next;      // Move `curr` to the next node
    }
    // Now, `prev` is the head of the reversed second half
    // console.log(" ")
    // console.log("after reversal")
    // console.log(JSON.stringify(prev))

    // Step 3: Merge the two halves
    let first = head, second = prev;
    while (second) {
        let temp1 = first.next;  // Store the next node of the first half
        let temp2 = second.next; // Store the next node of the second half
        first.next = second;     // Link current node of the first half to the current node of the second half
        if (!temp1) break;       // Break if the first half is exhausted
        second.next = temp1;     // Link current node of the second half to the next node of the first half
        first = temp1;           // Move `first` pointer one step forward
        second = temp2;          // Move `second` pointer one step forward
    }

    // console.log(" ")
    // console.log("remapping completed")
    // console.log(JSON.stringify(head))

    return dummy.next;
};
