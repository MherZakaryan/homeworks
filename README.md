//Given a string, must be printed one letter from the beginning to the end. 
function string(str){
    for (let i = 0; i < Math.ceil(str.length / 2); i++) {
        console.log(str[i]);
        if (i !== str.length - i - 1) {
            console.log(str[str.length - i - 1]);
        }
    }
}
