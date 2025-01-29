import handle from "./handle.js";
import chalk from "chalk";

async function createPasswords() {
    console.log(chalk.green("Password"));
    const password = await handle();
    console.log(password)
}

export default createPasswords;