import prompt from "prompt";
import mainPrompt from "./prompt/prompt-main.js";
import chalk from "chalk";

async function main(params) {
    prompt.get(mainPrompt, async (err, choose) => {
        if(choose.select == 1) console.log(chalk.green("Escolheu o QRCode"));
        if(choose.select == 2) console.log(chalk.green("Escolheu o Password"));
    });

    prompt.start();
}

main();