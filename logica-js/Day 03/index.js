const readline = require('readline');

var pergunta = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

pergunta.question('Deseja seguir para a área de Front-End ou Back-End? ', (roadMap) => {
    if (roadMap == 'Front-End') {
        pergunta.question('Deseja aprender primeiro React ou Vue? ', (frontEnd) => {
            pergunta.question('Deseja seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? ', (caminhos) => {
                console.log(`Você escolheu Front-End, quer aprender ${frontEnd} e deseja ${caminhos}`);
                pergunta.close();
            });
        });
    } else {
        pergunta.question('Deseja aprender primeiro C# ou Java? ', (backEnd) => {
            pergunta.question('Deseja seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? ', (caminhos) => {
                console.log(`Você escolheu Back-End, quer aprender ${backEnd} e deseja ${caminhos}`);
                pergunta.close();
            });
        });
    }
});
