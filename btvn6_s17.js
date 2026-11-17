const display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function clearDisplay () {
    display.value = '';
}
function calculate () {
    try{
        let expression = display.value.split("x").join("*").split("➗").join("/");
            if ( expression.includes ('/0')) {
                alert('Lỗi: không thể chia cho 0!');
                clearDisplay();
                return;
            }
            let result = eval(expression);
            if (isNaN(result) || !isFinite(result)) {
                alert('Lỗi: biểu thức không hợp lệ!');
                clearDisplay();
    }else {
        display.value = result;
    }
    }catch (error) {
        alert('Lỗi: biểu thức không hợp lệ!');
        clearDisplay();
    }
}