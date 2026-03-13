const beginning = () => {
    const noun = ['You', 'You and your friends', 'Your family'];
    return `${noun[Math.floor(Math.random() * noun.length)]} will `;
}

const middle = () => {
    const decision = ['', 'not '];
    const verb = ['be', 'miss'];
    return `${decision[Math.floor(Math.random() * decision.length)]}${verb[Math.floor(Math.random() * verb.length)]} `;
}

const end = () => {
    const object = ['traveling', 'eating alone', 'creating memorable experiences'];
    const when = ['soon', 'in the near future', 'in the next few days'];
    return `${object[Math.floor(Math.random() * object.length)]} ${when[Math.floor(Math.random() * when.length)]}.`;
}

const fortune = () => {
    const fortune = beginning() + middle() + end();
    let textarea = document.getElementById('fortune-output');
    textarea.value = fortune;
    document.getElementById('fortune-button').style.display = 'none';
    textarea.style.display = 'block';
}

document.getElementById('fortune-button').addEventListener('click', fortune);