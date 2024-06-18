/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// var mergeTwoLists = function(list1, list2) {
//     let dummy = new ListNode();
//     let cur = dummy;

//     while (list1 && list2) {
//         if (list1.val > list2.val) {
//             cur.next = list2;
//             list2 = list2.next;
//         } else {
//             cur.next = list1;
//             list1 = list1.next;
//         }
//         cur = cur.next;
//     }

//     cur.next = list1 || list2;

//     return dummy.next;    
// };

// var mergeTwoLists2 = function(list1, list2) {
//     if(list1 == null && list2 == null)
//         return null
//     if(list1 == null && list2 != null)
//         return list2
//     if(list1 != null && list2 == null)
//         return list1
    
//     let mList = new ListNode(-1, null);
//     let newHead = mList;

//     while(list1 != null && list2 != null){
//         //if the 1st list value is less than the second list
//         if (list1.val <= list2.val) {
//             //put the smallest 1st
//             mList.next = list1;
//             //move the item in the list up
//             list1 = list1.next;
//         } else {
//             //it has to be the second its not the 1st
//             mList.next = list2;
//             //move to the next value in the sceond list
//             list2 = list2.next;
//         }
//         mList = mList.next;
//     }

//     //find the last value to add
//     if(list1 == null){
//         mList.next = list2
//     }
//     else{
//         mList.next = list1
//     }

//     //because of the intialization you need to move up
//     return newHead.next
// };

var mergeTwoLists = function (list1, list2) {
    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2)
        return list1;
    }
    else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
}
