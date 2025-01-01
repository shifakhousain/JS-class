// console.log(document);
// console.dir(document);

// console.dir(document.childNodes[1]);
// console.dir(document.childNodes[1].children[1]);
// console.dir(document.childNodes[1].children[1].children[0].textContent);

// document.childNodes[1].children[1].children[0].textContent =
//   "This is a changed text";

//   Accessing elements in DOM

console.log(document.querySelector(".heading"));

const h1Ele = document.querySelector(".heading");
const imgEle = document.querySelector("#img-id1");

console.log(h1Ele.textContent);
console.log(h1Ele.style.color);

h1Ele.textContent = "Changed text";
h1Ele.style.color = "yellow";

// Accessing DOM elements

const paras = document.querySelectorAll(".para");
// const para = document.querySelector(".para");

// console.log(paras);
// console.log(para);

// 


// const para1 = document.getElementById('para-id1')
// const para2 = document.getElementsByClassName('para2')
// // console.log(para1.textContent);
// // console.log(para2[0].textContent);

// // const paras = document.getElementsByTagName('p')
// console.log(paras);

function changeImage() {
    const img = document.getElementById(".myImage");
    if (img.src=("https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRW67N0551nYJxyp4H0ooSSKWqd9C3UzE7-NiaXTZCDmzneP8EEMnhKq08PiRVRONkdmwjAvgp62U3NwfFvyc1-X_qMBwisJDvmDcQhih3R")) {
        img.src = "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTNnyTEfh0oNXR0iIdRJg4S-gqxo2PcV2QnDedPqlWXjmb8Fo53_7r9JIqbKJ9QrqBDOgKHjgAYc-1weSZJgJerS8FO8fZ_"; // New image URL
    } else {
        img.src = "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRW67N0551nYJxyp4H0ooSSKWqd9C3UzE7-NiaXTZCDmzneP8EEMnhKq08PiRVRONkdmwjAvgp62U3NwfFvyc1-X_qMBwisJDvmDcQhih3R"; // Original image URL
    }
}
