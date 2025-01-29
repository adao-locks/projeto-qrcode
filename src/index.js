import prompt from "prompt";
import promptSchemaMain from "./prompt-schema/prompt-schema-main.js";
import createQRCode from "./services/qr-code/create.js";
import createPasswords from "./services/password/create.js";

async function main(params) {
    prompt.get(promptSchemaMain, async (err, choose) => {
        if(err) console.log(err);

        if(choose.select == 1) await createQRCode();
        if(choose.select == 2) await createPasswords();
    });

    prompt.start();
}

main();