/*
using System;

class Program
{
    static void Main()
    {
        int[] numbers = new int[6];
        int sum = 0;

        for (int i = 0; i < numbers.Length; i++)
        {
            Console.Write($"Enter integer no.{i + 1}: ");
            numbers[i] = int.Parse(Console.ReadLine());

            if (numbers[i] % 2 == 0)
            {
                sum += numbers[i];
            }
        }

        Console.WriteLine($"The result is: {sum}");
    }
}
*/
/*
using System;

class Program
{
    static void Main()
    {
        string[] studentsG1 = { "Nikola", "Ilija", "Petranka", "Janko", "Filip" };
        string[] studentsG2 = { "Sofija", "Dimitrij", "Jakov", "Sara", "Riste" };

        Console.Write("Vnesi go brojot na grupata (1 ili 2): ");
        int group = int.Parse(Console.ReadLine());

        if (group == 1)
        {
            Console.WriteLine("Studentite od G1 se:");
            foreach (string student in studentsG1)
            {
                Console.WriteLine(student);
            }
        }
        else if (group == 2)
        {
            Console.WriteLine("Studentite od G2 se:");
            foreach (string student in studentsG2)
            {
                Console.WriteLine(student);
            }
        }
        else
        {
            Console.WriteLine("Nepostoechka Grupa!");
        }
    }
}
*/