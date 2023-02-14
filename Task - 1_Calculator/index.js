let string = "";
const buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == 'AC') {
            string = "";
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'DE') {
            string = document.querySelector('input').value;
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                document.querySelector('input').value = string;
            } catch (error) {
                string = ""
                document.querySelector('input').style.fontSize = "20px";
                document.querySelector('input').value = "Error ＼（〇_ｏ）／ ";
            }
        }
        else {
            string += e.target.innerHTML;
            document.querySelector('input').style.fontSize = "36px";
            document.querySelector('input').value = string;
        }

    })
})