export function template(strings: ReadonlyArray<string>, ...keys) {
  return function (...values) {
    const dict: unknown = values[values.length - 1] || {};
    const result = [strings[0]];
    keys.forEach(function (key, i) {
      const value = Number.isInteger(key) ? values[key] : dict[key];
      result.push(value, strings[i + 1]);
    });
    return result.join("");
  };
}

export async function fulfillWithTimeLimit(timeLimit, task, failureValue) {
  let timeout;
  const timeoutPromise = new Promise((resolve, reject) => {
    timeout = setTimeout(() => {
      resolve(failureValue);
    }, timeLimit);
  });
  const response = await Promise.race([task, timeoutPromise]);
  if (timeout) {
    //the code works without this but let's be safe and clean up the timeout
    clearTimeout(timeout);
  }
  return response;
}

export function decodeBase64(data: string): string {
  return Buffer.from(data, "base64").toString("ascii");
}

export function encodeBase64(data: string): string {
  return Buffer.from(data).toString("base64");
}
