const fs = require("fs");
const path = require("path");
const spawn = require("cross-spawn");
const prompts = require("prompts");

const formatProblem = v =>
    `${v ?? ""}`
        .replace(/\W+/gi, " ")
        .replace(/ {2,}/g, " ")
        .replace(/^\s+|\s+$/g, "");
const formatFn = v => `${v ?? ""}`.replace(/\W+/gi, "");

const createTest = async (fileName, fnName, testName) => {
    fs.writeFileSync(
        path.join(__dirname, `${fileName}.test.js`),
        `const { ${fnName} } = require("../src/${fileName}.js");

describe(${JSON.stringify(testName)}, () => {
    const tests = [
        { args: [], res: false },
    ];

    for (const { args, res } of tests) {
        test(\`\${JSON.stringify(args)}: \${res}\`, () => {
            expect(${fnName}(...args)).toStrictEqual(res);
        });
    }
});\n`
    );
};

const createModule = async (fileName, fnName) => {
    fs.writeFileSync(
        path.join(path.dirname(__dirname), "src", `${fileName}.js`),
        `/**
 *
 */
const ${fnName} = () => {
    // 
};

module.exports = { ${fnName} };\n`
    );
};

(async () => {
    try {
        // Fetch problem name
        const problem = await prompts({
            type: "text",
            name: "name",
            message: "Problem name",
            format: formatProblem,
            validate: v => formatProblem(v).length > 0
        });
        if (!problem.name) {
            throw new Error("No problem name provided");
        }

        // Fetch function name
        const fn = await prompts({
            type: "text",
            name: "name",
            message: "Function name",
            format: formatFn,
            validate: v => formatFn(v).length > 0
        });
        if (!fn.name) {
            throw new Error("No function name provided");
        }

        // Prepare available numbers and the next ID
        let idNext = 0;
        const idList = fs
            .readdirSync(__dirname)
            .filter(n => n.match(/\.test\.js$/i))
            .map(n => parseInt(n.replace(/^(\d+)\-.*/g, "$1"), 10))
            .reduce((acc, v) => {
                if (v > idNext) {
                    idNext = v;
                }

                acc[v] = 1;
                return acc;
            }, {});
        idNext++;

        // Provided ID
        const idMatch = problem.name.match(/^(\d+)/);
        if (idMatch) {
            if (idList[idMatch[1]]) {
                throw new Error(`Problem #${idMatch[1]} already defined.`);
            }
            idNext = parseInt(idMatch[1]);
        }

        // Prepare file name
        const fileName = `${idNext}-${problem.name
            .replace(/^\d+\s/gi, "")
            .toLowerCase()
            .split(" ")
            .slice(0, 3)
            .join("-")}`;

        // Create test
        await createTest(
            fileName,
            fn.name,
            problem.name
                .replace(/^\d+\s/, "")
                .split(" ")
                .map(s => `${s[0].toUpperCase()}${s.substring(1)}`)
                .join(" ")
        );

        // Create module
        await createModule(fileName, fn.name);

        console.log(`\n✨ Created ${fileName}(.test).js\n`);
    } catch (e) {
        console.log(`\x1b[31m  ${e.message ?? e}\x1b[0m\n`);
        process.exit(1);
    }
})();
