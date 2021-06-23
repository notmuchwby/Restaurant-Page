export default function tagandshoutouts() {
    const content = document.querySelector('#content');

    const tagAndSo = document.createElement('div');
    tagAndSo.id = "tag-and-shoutouts";

    const shoutOut = document.createElement('a');
    shoutOut.id = "shout-out";
    shoutOut.innerHTML = "Icons made by Good Ware on flaticon.com";
    shoutOut.href = "https://www.flaticon.com/authors/good-ware";


    const madeBy = document.createElement('p');
    madeBy.id = "made-by"
    madeBy.innerHTML = "Made by notmuchwby, 2021"

    tagAndSo.appendChild(shoutOut);
    tagAndSo.appendChild(madeBy);

    content.appendChild(tagAndSo);
}