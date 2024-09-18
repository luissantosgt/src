
Music musicArtist = new Music("Avicii", "Electro");
musicArtist.printArtist();
musicArtist.printDate();

Algorithms test = new Algorithms("binary","search");
Console.WriteLine($"name : {test.name} type: {test.type}");
test.Method();
test.MyList();


int age;
while(!int.TryParse(Console.ReadLine(), out age)||age < 0){
        Console.WriteLine("Enter valid number:");
}

public class Music {
    string name ;
    string artist;

    public Music(string artistName, string genreName ){
        name = genreName;
        artist = artistName;
          
    }

    public void printArtist(){
        Console.WriteLine($"{name} : {artist}");
    }

    public void printDate(){
        string date = DateTime.Now.ToString();
        Console.WriteLine($"Date is:{date} ");
    }

}

