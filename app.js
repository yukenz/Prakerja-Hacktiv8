const menu = document.getElementById("menu");

// <li><a href="#about">About</a></li>
// <li><a href="#pengalaman">Experience</a></li>
// <li><a href="#pendidikan">Education</a></li>
// <li><a href="#kemampuan">Skill</a></li>
// <li><a href="#ketertarikan">Interest</a></li>

function listLinkBuilder(innerTag, link = "#") {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.innerHTML = innerTag
    a.href = link
    li.appendChild(a)
    return li
}

const ul = document.createElement("ul");

// <!--                <li><a href="#about">About</a></li>-->
// <!--                <li><a href="#pengalaman">Experience</a></li>-->
// <!--                <li><a href="#pendidikan">Education</a></li>-->
// <!--                <li><a href="#kemampuan">Skill</a></li>-->
// <!--                <li><a href="#ketertarikan">Interest</a></li>-->

ul.appendChild(listLinkBuilder("About", "#about"))
ul.appendChild(listLinkBuilder("Experience", "#pengalaman"))
ul.appendChild(listLinkBuilder("Education", "#pendidikan"))
ul.appendChild(listLinkBuilder("Interest", "#ketertarikan"))
ul.appendChild(listLinkBuilder("Awards", "#penghargaan"))

menu.appendChild(ul)