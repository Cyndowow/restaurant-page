import pic from "../assets/image.jpg";

function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const image = document.createElement("img");
    image.src = pic;

    home.appendChild(createParagraph("Visit this very real Restaurant!"));
    home.appendChild(createParagraph("Tradition since 1532!"));
    home.appendChild(image);
    home.appendChild(createParagraph("Definitely real!"));

    return home;
}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const content = document.getElementById("content");
    content.textContent = "";
    content.appendChild(createHome());
}

export default loadHome;