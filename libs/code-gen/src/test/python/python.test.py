import json
from dataclasses import dataclass
from typing import List

@dataclass
class AStruct:
    """A struct for the example"""
    listt: List[int]  # an listt
def custom(size: int, a_struct: AStruct, sizex: int, list: List[List[int]]) -> None:
    return list
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
    print('@@result@@')
    print(output)