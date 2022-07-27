const { parentPort } = require('worker_threads');

function getTransformOutput({ outputs, path }) {
  console.log(
    '🚀 ~ file: transform-worker.js ~ line 4 ~ getTransformOutput ~ path',
    path,
  );
  try {
    const transformOutput = require(path + '/output');
    outputs.forEach((output, index) => {
      outputs[index].value = transformOutput.main(output.value);
    });
    return outputs;
  } catch (error) {
    console.log('err', error);
  }
}

parentPort.on('message', async (output) =>
  parentPort.postMessage(getTransformOutput(output)),
);
