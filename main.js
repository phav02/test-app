let content = document.querySelector('h1');
let pom = false;

const action = () => {
    if (pom === false) {
        content.setAttribute('style','color: red;');
        document.getElementById('list').setAttribute('style','list-style-type: none;');
        pom = true;
    } else if (pom === true) {
        content.setAttribute('style','color: black;');
        pom = false;
    }
}