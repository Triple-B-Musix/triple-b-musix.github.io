// Navbar

var dropdownButton = document.getElementById("dropdown")
var dropdownShit = document.getElementById("dropdown-shit")

function dropdown() {
    dropdownButton.style.borderStyle = dropdownButton.style.borderStyle === "inset" ? "outset" : "inset";
    dropdownShit.style.display = dropdownShit.style.display === "block" ? "none" : "block";
}

// Footer

lastModified = new Date(document.lastModified);
month = lastModified.getMonth() + 1; // +1 because months go from 0-11
day = lastModified.getDate();

// Add leading zeros
month = month < 10 ? "0" + month : month;
day = day < 10 ? "0" + day : day;

// https://stackoverflow.com/a/23352499
function timeSince() {
    timeElapsed = (new Date().getTime() - lastModified.getTime() ) / 1000;

    if (timeElapsed < 60) {
        return timeElapsed + " seconds ago";
    }
    if (timeElapsed < 3600) {
        return parseInt(timeElapsed/60) + " minutes ago";
    }
    if (timeElapsed <= 86400) {
        return parseInt(timeElapsed/3600) + " hours ago";
    }
    if (timeElapsed <= 2628000) {
        return parseInt(timeElapsed/86400) + " days ago";
    }
    if (timeElapsed <= 31536000) {
        return parseInt(timeElapsed/2628000) + " months ago";
    }
    if (timeElapsed > 31536000) {
        return parseInt(timeElapsed/31536000) + " years ago";
    }
}

document.getElementById("last-modified-date").innerHTML = lastModified.getFullYear() + "/" + month + "/" + day; // Write the last modified date
document.getElementById("last-modified-date").setAttribute("title", timeSince(lastModified)); // Add title attribute with the relative time

document.getElementById("copyright-year").innerHTML = new Date().getFullYear(); // Write with the current year


// 404

async function rotate(element) {
    element.removeAttribute("onclick", "rotate");
    element.removeAttribute("class");
    element.setAttribute("class", "rotate");
    await new Promise(r => setTimeout(r, 1500));
    element.removeAttribute("class");
    element.setAttribute("class", "interactive");
    element.setAttribute("onclick", "rotate(this);");
}

// Home

function scratch() {
    document.getElementById("scratch").play();
}
