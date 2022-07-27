#include <bits/stdc++.h>
using namespace std;
/// A struct for the example
struct AStruct
{
    vector<int> listt; ///< an listt
};

/// \param size size
/// \param a struct a struct
/// \param sizex sizex
/// \param list a list of structs
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
            cout << i[j] << (j < i.size() - 1 ? " " : "\n");
        if (i.size() == 0)
            cout << endl;
    }
    return 0;
}