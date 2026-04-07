using System;

class Program
{
    static void Main()
    {
        Console.Write("Vnesi go datumot na ragjanje (yyyy-mm-dd): ");
        if (DateTime.TryParse(Console.ReadLine(), out DateTime birthday))
        {
            int age = AgeCalculator(birthday);
            Console.WriteLine($"Imash {age} godini");
        }
        else
        {
            Console.WriteLine("Nevaliden format.Koristi yyyy-mm-dd.");
        }
    }

    static int AgeCalculator(DateTime birthday)
    {
        DateTime today = DateTime.Today;
        int age = today.Year - birthday.Year;

        if (birthday.Date > today.AddYears(-age))
            age--;

        return age;
    }
}