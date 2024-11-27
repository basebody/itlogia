const select = document.querySelector("select#lesson-picker");
const iframe = document.querySelector("iframe");
const downloadBtn = document.querySelector(".wrapper > a");

select.addEventListener("change", () => {
    iframe.setAttribute("src", getLesson(select.value));
    // if (select.value === 2) {downloadBtn.innerHTML = "Download materials for lesson 2";};
});

function getLesson(value) {
    switch (value) {
        case "1": return "https://www.youtube.com/embed/JsjkQH1snEE";
        case "2": return "https://www.youtube.com/embed/RW4I2rJFMNw";
        case "3": return "https://www.youtube.com/embed/SowZ3cyd6So";
        case "4": return "https://www.youtube.com/embed/cfZpoT2tvsY";
        case "5": return "https://www.youtube.com/embed/jaMkWpfymOc";
        case "6": return "https://www.youtube.com/embed/nXa9aexl6AI";
        case "7": return "https://www.youtube.com/embed/BCCX9mCVWEE";
        case "Бонус": return "https://www.youtube.com/embed/lDk-1etgVr8";
    }
}