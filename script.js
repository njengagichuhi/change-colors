var index = 0
function color() {
    let colors = [
        "red ", "blue", "yellow", "green", "red", "orange","black","brown","gray"

    ]
    document.getElementsByTagName("body")[0].style.background=colors[index++]
    if (index > colors.length - 1)
        index = 0
}