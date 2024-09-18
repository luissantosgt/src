
using System.Runtime.CompilerServices;

class Algorithms {
public string name;
public string type;

public List<int> ints = [5,1,10];

public Algorithms(string algorithmName, string typeName){
    name = algorithmName;
    type = typeName;

}
public  void Method(){
Console.WriteLine("test");
}

public void MyList(){
 ints.Sort();
 foreach(int element in ints){
 Console.WriteLine($"Element: {element}" );
 
 }
}
}

