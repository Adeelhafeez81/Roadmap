const frontEndBtn = document.getElementById('frontEndBtn');
const backEndBtn = document.getElementById('backEndBtn');

const frontEndLanguages = document.getElementById('frontEndLanguages');
const backEndLanguages = document.getElementById('backEndLanguages');

frontEndBtn.addEventListener('click', ()=>{
    frontEndLanguages.innerHTML = getfrontEndLanguages();
    frontEndLanguages.classList.remove('hidden');
    frontEndContent.classList.remove('hidden');
    backEndLanguages.classList.add('hidden');
    backEndContent.classList.add('hidden');
});

backEndBtn.addEventListener('click', () => {
    backEndLanguages.innerHTML = getbackEndLanguages();
    backEndLanguages.classList.remove('hidden');
    backEndContent.classList.remove('hidden');
    frontEndLanguages.classList.add('hidden')
    frontEndContent.classList.add('hidden');
});

function getfrontEndLanguages(){
    return `
    <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
    <li>React.js</li>
    <li>TypeScript</li>
    <li>Angular</li>
    <li>Vue.js</li>
    <li>SASS</li>
    <li>Bootstrap</li>
    <li>jQuery</li>
    <!-- Add more front-end languages and framework -->
    </ul>
    `
};

function getbackEndLanguages(){
    return `
    <ul>
    <li>Node.js</li>
    <li>Python</li>
    <li>Java</li>
    <li>PHP</li>
    <li>Ruby</li>
    <li>SQL</li>
    <li>Express.js</li>
    <li>Django</li>
    <!-- Add more back-end languages and framework -->
    </ul>
    `
};





























