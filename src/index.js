import prompt from "prompt";
import mainPrompt from "./prompt/prompt-main.js";
import chalk from "chalk";
import createQRCode from "./services/qr-code/create.js";
import createPasswords from "./services/password/create.js";

async function main(params) {
    prompt.get(mainPrompt, async (err, choose) => {
        if(choose.select == 1) await createQRCode();
        if(choose.select == 2) await createPasswords();
    });

    prompt.start();
}

main();