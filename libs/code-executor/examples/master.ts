/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-console */
import { performance } from 'perf_hooks';
import CodeExecutor from '../src/CodeExecutor';
import logger from '../src/utils/logger';

const codeExecutor = new CodeExecutor('oj-executor', 'redis://127.0.0.1:6379');

/**
 * base64: true is also an option if input,
 * output and code are encoded in base64,
 * default is false
 * */

const pythonCode = `

import json
from dataclasses import dataclass
from typing import List

@dataclass
class AStruct:
    """A struct for the example"""
    listt: List[int]  # an listt
def custom(size: int, a_struct: AStruct, sizex: int, list: List[List[int]]) -> None:
    return a_struct
    # dfd
    pass

if __name__ == "__main__":
    size = int(input())
    a_struct = AStruct(
        list(map(int, input().split())),
    )
    sizex = int(input())
    list = [list(map(int, input().split())) for _ in range(int(input()))]
    output = custom(size, a_struct, sizex, list)
    print('@result@')
    print(json.dumps(output, separators=(',', ':'), default=lambda o: o.__dict__))

`;

const cplusplusCode1 = `
#include <bits/stdc++.h>
using namespace std;
/// A struct for the example
struct AStruct
{
    vector<int> listt; ///< an listt
};

/// \\param size size
/// \\param a struct a struct
/// \\param sizex sizex
/// \\param list a list of structs
vector<vector<int>> custom(int size, const AStruct &a_struct, int sizex, const vector<vector<int>> &list)
{
    return list;
}

int main()
{
    string buffer;
    int size; ///< size
    cin >> size;
    AStruct a_struct; ///< a struct
    int i;
    cin >> ws;
    getline(cin, buffer);
    istringstream i_cin(buffer);
    while (i_cin >> i)
    {
        a_struct.listt.push_back(i);
    }
    int sizex; ///< sizex
    cin >> sizex;
    vector<vector<int>> list; ///< a list of structs
    int list_size;
    cin >> list_size;
    list.resize(list_size);
    for (vector<int> &i : list)
    {
        int j;
        cin >> ws;
        getline(cin, buffer);
        istringstream j_cin(buffer);
        while (j_cin >> j)
        {
            i.push_back(j);
        }
    }
    vector<vector<int>> output = custom(size, a_struct, sizex, list);
    cout << "@result@" << endl;
    cout << output.size() << endl;
    for (const vector<int> &i : output)
    {
        for (size_t j = 0; j < i.size(); ++j)
            cout << i[j] << (j < i.size() - 1 ? " " : "\\n");
        if (i.size() == 0)
            cout << endl;
    }
    return 0;
}
`;
const cplusplusCode = `#include <bits/stdc++.h>
using namespace std;
/// A struct for the example
struct AStruct {
    vector<int> listt; ///< an listt
};

/// \\param size size
/// \\param a struct a struct
/// \\param sizex sizex
/// \\param list a list of structs
AStruct custom(int size, const AStruct& a_struct, int sizex, const vector<vector<int>>& list) {
  return a_struct;
}

int main() {
    string buffer;
    int size; ///< size
    cin >> size;
    AStruct a_struct; ///< a struct
    int i;
    cin >> ws;
    getline(cin, buffer);
    istringstream i_cin(buffer);
    while (i_cin >> i){
        a_struct.listt.push_back(i);
    }
    int sizex; ///< sizex
    cin >> sizex;
    vector<vector<int>> list; ///< a list of structs
    int list_size;
    cin >> list_size;
    list.resize(list_size);
    for (vector<int>& i : list) {
    int j;
        cin >> ws;
        getline(cin, buffer);
        istringstream j_cin(buffer);
        while (j_cin >> j){
            i.push_back(j);
        }
    }
    AStruct output = custom(size, a_struct, sizex, list);
    cout << "@result@" << endl;
    for (size_t i = 0; i < output.listt.size(); ++i)
        cout << output.listt[i] << (i < output.listt.size() - 1 ? " " : "\\n");
    if (output.listt.size() == 0) cout << endl;
}`;
const inputs = [
  // {
  //   language: 'Python',
  //   code: pythonCode,
  //   testCases: [
  //     {
  //       input: '',
  //       output: '[[1, 2, 3], [1, 4, 5]]',
  //     },
  //     {
  //       input: '',
  //       output: '[[1, 2, 3], [1, 4, 5]]',
  //     },
  //     {
  //       input: '',
  //       output: '[[1, 2, 3], [1, 4, 5]]',
  //     },
  //     {
  //       input: '',
  //       output: '[[1, 2, 3], [1, 4, 5]]',
  //     },
  //     {
  //       input: '',
  //       output: '[[1, 2, 3], [1, 4, 5]]',
  //     },
  //   ],
  //   timeout: 2,
  // },
  {
    language: 'Cplusplus',
    code: cplusplusCode,
    testCases: [
      {
        input: '',
        output: '[[1, 2, 3], [1, 4, 5]]'
      },
      {
        input: '',
        output: '[[1, 2, 3], [1, 4, 5]]'
      },
      {
        input: '',
        output: '[[1, 2, 3], [1, 4, 5]]'
      },
      {
        input: '',
        output: '[[1, 2, 3], [1, 4, 5]]'
      },
      {
        input: '',
        output: '[[1, 2, 3], [1, 4, 5]]'
      }
    ],
    timeout: 2
  }
  // {
  //   language: 'Bash',
  //   code: 'echo hello',
  //   testCases: [
  //     {
  //       input: '1',
  //       output: 'hello1\n',
  //     },
  //   ],
  //   timeout: 2,
  // },
  // {
  //   language: 'Bash',
  //   code: 'echo hello',
  //   testCases: [
  //     {
  //       input: '1',
  //       output: 'hello1\n',
  //     },
  //   ],
  //   timeout: 2,
  // },
  // {
  //   language: 'Bash',
  //   code: 'echo hello',
  //   testCases: [
  //     {
  //       input: '1',
  //       output: 'hello1\n',
  //     },
  //   ],
  //   timeout: 2,
  // },
];

async function main() {
  try {
    const time = performance.now();
    const results = await Promise.all(
      inputs.map((input) => codeExecutor.runCode(input))
    );
    logger.info(results);
    logger.info(`time take : ${(performance.now() - time) / 1000}s`);
    codeExecutor.stop();
  } catch (error) {
    console.log(error);
  }
}

main();
