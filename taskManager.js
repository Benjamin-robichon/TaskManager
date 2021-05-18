const data = require("./taskManager.json");
const io = require("console-read-write");
const { setegid } = require("process");
const fs = require("fs");
/*const readline = require('readline');

const rl = readline.createInterface(
    process.stdin, process.stdout);

rl.setPrompt(`"Welcome to your task manager, Press:
1. to see all your tasks
2. to add a task
3. to delete a task
4. to mark a task as done
5. to Exit the task manager"`);
rl.prompt();*/
async function main() {
    io.write("Welcome to your task manager, Press:");
    io.write("1. to see all your tasks");
    io.write("2. to add a task");
    io.write("3. to delete a task");
    io.write("4. to mark a task as done");
    io.write("5. to Exit the task manager");

    let input = await io.read();

    if (input == "1") {
        seeTask(data);
    }

    if (input == "2") {
        let input2 = await io.read();
        writeTask(data, input2);
    }

    if (input == "3") {
        let input3 = await io.read();
        deleteTask(data, input3);
    }

    if (input == "4") {
        console.log("j'ai appuyé sur 4");
    }

    if (input == "5") {
        console.log("j'ai appuyé sur 5");
    }
}
/*
  // Simple question scenario
  io.write(`hello ${await io.ask('Who are you?')}!`);

  // Since you are not blocking the IO, you can go wild with while loops!
  let saidHi = false;
  while (!saidHi) {
    io.write('Say hi or I will repeat...');
    saidHi = await io.read() === 'hi';
  }

  io.write('Thanks! Now you may leave.');
*/

const seeTask = (tasks) => {
    for (let i = 0; i < tasks.length; i++) {
        console.log(tasks[i]);
    }
};

const writeTask = (tasks, input) => {
    let newtask = {
        id: tasks.length + 1,
        message: input,
    };
    tasks.push(newtask); // le .push permet de rajouter l'élément dans le tableau
    let dataToString = JSON.stringify(tasks); // commande pour transformer les données JS en JSON
    fs.writeFileSync("taskManager.json", dataToString); // permet d'enregistrer sur JSON en écrasant l'actuel
    console.log(tasks);
};
/**
 *
 * @param {*} arrayData correspond au tableau dont on souhaite supprimer une donnée
 * @param {*} id correspond à l'id de la valeur que l'on veut supprimer dans la tableau
 */
const deleteTask = (arrayData, id) => {
    for (let i = 0; i < arrayData.length; i++) {
        if (arrayData[i].id == id) {
            // console.log("On veut supprimer cet element")
            arrayData.splice(i, 1);
            let dataToString = JSON.stringify(arrayData);
            fs.writeFileSync("taskManager.json", dataToString);
            console.log(arrayData[i]);
        }
    }
};

main();
