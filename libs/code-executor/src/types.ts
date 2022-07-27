export interface TestCase {
  input: string;
  output: string;
}

export interface CodeParams {
  code: string;
  language: string;
  base64?: boolean;
  testCases?: TestCase[];
  timeout?: number;
  challengePath?: string;
  userSolvePath?: string;
}

export interface RunnerOpts {
  id?: string;
  tag?: string;
  code?: string;
  type?: string;
  timeout?: number;
  base64?: boolean;
  language?: string;
  testCases?: TestCase[];
  userSolvePath?: string;
  challengePath?: string;
}

export interface Tests {
  input: string;
  expectedOutput: string;
  obtainedOutput: string;
  remarks: string;
  exitCode: number;
  runTime: number;
  error: string;
}

export interface Result {
  id: string;
  result?: Tests[];
  info?: any;
  error?: string;
}

export type ResponseData = {
  data: Result | { id: string };
  error?: any;
};
