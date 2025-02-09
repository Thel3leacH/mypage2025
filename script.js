let count = 0 //เก็บค่าไว้สำหรับนับคะแนนที่กดถูก

function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'a') {
        result.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result.style.color = 'green';
        count = 1; // count = count + 1
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
 }

 function checkAnswer2(answer) {
    const result = document.getElementById('result2');
    const result3 = document.getElementById('result3');
    if (answer === 'c') {
        result.textContent = "Correct this is my career path :)";
        result.style.color = 'green';
        count++; //กดถูกต้องจะได้คะแนนเพิ่ม +1 คะแนน
    } else {
        result.textContent = "Incorrect! Try again.";
        result.style.color = 'red';
    }
    result3.textContent = "Total score: " + count + " Points"
    count = 0; 
 }