let str = prompt("Print text:");
str = str.toLowerCase();
let tmp = '';
let position = 0;
let count_a = 0;
let count_words = 0;
while (str.indexOf(' ', position) >= 0) {
    
    pos_pr = position;
    position = str.indexOf(' ', position) + 1;
    
    let tmp = str.substring(pos_pr, position);
    
    for (let i = 0; i < tmp.length; i++) {
        if (tmp[i] == 'a') {
            count_a++;
        }
    }
    if (count_a == 1) {
        count_words++;
        alert(tmp);
    }
    count_a = 0;
}

position = str.lastIndexOf(' ', position) + 1;
tmp = str.substring(position);
for (let i = 0; i < tmp.length; i++) {
        if (tmp[i] == 'a') {
            count_a++;
        }
    }
    if (count_a == 1) {
        count_words++;
        alert(tmp);
    }

alert(count_words);