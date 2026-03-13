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

console.log(beginning() + middle() + end());