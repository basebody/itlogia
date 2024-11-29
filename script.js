const select = document.querySelector("select#lesson-picker");
const iframe = document.querySelector("iframe");
const downloadBtn = document.querySelector(".wrapper > a");

const lessonMaterials = {
    "2": { text: "lesson 2", href: "Архив_для_урока_2.zip" },
    "3": { text: "lesson 3", href: "Макет_для_урока_3.zip" },
    "Бонус": { text: "bonus lesson", href: "Макет_для_урока_3.zip" }
};

select.addEventListener("change", () => {
    const selectedValue = select.value;
    iframe.setAttribute("src", getLesson(selectedValue));

    if (lessonMaterials[selectedValue]) {
        downloadBtn.style.display = "block";
        downloadBtn.innerHTML = "Download materials for " + lessonMaterials[selectedValue].text;
        downloadBtn.setAttribute("href", "materials/" + lessonMaterials[selectedValue].href);
    } else {
        downloadBtn.style.display = "none";
    }
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
        case "Бонус": return "https://www.youtube.com/embed/lDk-1etgVr8"
    }
}
