#!/usr/bin/env node

import { getAnswers } from "./utils/request.js";
import download from "download-git-repo";

const answers = await getAnswers();

console.log(answers);

download('github:Polaris-6625/apiknight-cli-t1', `./${answers?.projectName}`, function (err) {
    console.log(err ? err : 'Success')
})
