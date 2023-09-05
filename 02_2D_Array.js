/* var arr =   [
            [2, 4, 4],
            [0, 2, 0],
            [1, 2, 4]
                    ] */

// จะเขียนแบบนี้ก็ได้แต่เข้าใจยาก
// var arr =   [[2, 4, 4],[0, 2, 0],[1, 2, 4]]
// index ตัวแรกที่ต่อจาก array จะแสดงแถว (row)
/* console.log(arr[0]) // Outputs: [2, 4, 4]
console.log(arr[1]) // Outputs: [0, 2, 0]
console.log(arr[2]) // Outputs: [1, 2, 4]

// index ตัวสองที่ต่อจาก array จะแสดง column (แถวแนวตั้ง)
console.log(arr[0][0]) // Outputs: 2
console.log(arr[0][1]) // Outputs: 4
console.log(arr[0][2]) // Outputs: 4 */

/* var hoursglassSum = arr[0][0] + arr[0][1] + arr[0][2] 
                              + arr[1][1] +
                    arr[2][0] + arr[2][1] + arr[2][2] 

console.log(hoursglassSum) */

/* var i = 0
var j = 0
var hoursglassSum = arr[i]  [j] + arr[i]  [j+1] + arr[i]  [j+2] 
                                + arr[i+1][j+1] +
                    arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
                    
console.log(hoursglassSum) */

/* var arr =   [
            [1, 1, 1, 0, 0, 0],
            [0, 1, 0, 0, 0, 0],
            [1, 1, 1, 0, 0, 0],
            [0, 0, 2, 4, 4, 0],
            [0, 0, 0, 2, 0, 0],
            [0, 0, 1, 2, 4, 0],
                             ] */
var arr = [
          [-1, -1,  0, -9, -2, -2],
          [-2, -1, -6, -8, -2, -5],
          [-1, -1, -1, -2, -3, -4],
          [-1, -9, -2, -4, -4, -5],
          [-7, -3, -3, -2, -9, -9],
          [-1, -3, -1, -2, -4, -5]
                                 ]
var i = 0
var sumOFArrayAllRow = -Infinity
for (i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
        var hoursglassSum = arr[i]  [j] + arr[i]  [j+1] + arr[i]  [j+2] 
                                        + arr[i+1][j+1] +
                            arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
        console.log(hoursglassSum)
        if (hoursglassSum > sumOFArrayAllRow) { 
            sumOFArrayAllRow = hoursglassSum
        }
    }
}
console.log(sumOFArrayAllRow) // Output : 0