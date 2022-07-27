const { parentPort } = require('worker_threads');

function getTransformOutput({ outputs, path }) {
    try {
        const transformOutput = require(path);
        outputs.forEach((output, index) => {
            outputs[index].value = transformOutput.main(output.value);
        });
        return outputs;
    } catch (error) {
        console.log('err', error);
    }
}

parentPort.on('message', async (output) => parentPort.postMessage(getTransformOutput(output)));
