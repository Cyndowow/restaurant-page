import image from "../assets/restaurant-location.png"

function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = '📞 Very real Phone Number';

    const address = document.createElement("p");
    address.textContent = "Very Real Address 42, McMurdo Station, Antarctica";

    const restaurantLocation = document.createElement("img");
    restaurantLocation.src = image;
    restaurantLocation.alt = "Location of real Restaurant";

    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(restaurantLocation);

    return contact;

}

function loadContact() {
    const content = document.getElementById("content");
    content.textContent = "";
    content.appendChild(createContact());
}

export default loadContact;