import prompt from "prompt";
import prompQRCode from "../../prompt-schema/prompt-schema-qrcode.js";
import handle from "./handle.js";

async function createQRCode() {
    prompt.get(prompQRCode, handle);

    prompt.start();
};

export default createQRCode;