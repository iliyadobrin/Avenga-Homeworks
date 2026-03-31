using System;

class Driver
{
    public string Name;
    public int Skill;

    public Driver(string name, int skill)
    {
        Name = name;
        Skill = skill;
    }
}

class Car
{
    public string Model;
    public int Speed;
    public Driver Driver;

    public Car(string model, int speed)
    {
        Model = model;
        Speed = speed;
    }

    public int CalculateSpeed()
    {
        return Speed * Driver.Skill;
    }
}

class Program
{
    static int GetValidChoice(int max, string message)
    {
        int choice;

        while (true)
        {
            Console.WriteLine(message);
            string input = Console.ReadLine();

            bool isNumber = int.TryParse(input, out choice);

            if (isNumber && choice >= 0 && choice < max)
            {
                return choice;
            }

            Console.WriteLine("Ve molime vnesete od ponudenite broevi!\n");
        }
    }

    static void RaceCars(Car car1, Car car2)
    {
        int speed1 = car1.CalculateSpeed();
        int speed2 = car2.CalculateSpeed();

        if (speed1 > speed2)
        {
            Console.WriteLine($"Pobednik: {car1.Model} vozac {car1.Driver.Name} so brzina {speed1}");
        }
        else if (speed2 > speed1)
        {
            Console.WriteLine($"Pobednik: {car2.Model} vozac {car2.Driver.Name} so brzina {speed2}");
        }
        else
        {
            Console.WriteLine("Nere6eno!");
        }
    }

    static void Main()
    {
        Driver[] drivers = new Driver[]
        {
            new Driver("Bob", 5),
            new Driver("Greg", 7),
            new Driver("Jill", 6),
            new Driver("Anne", 8)
        };

        Car[] cars = new Car[]
        {
            new Car("Hyundai", 120),
            new Car("Mazda", 130),
            new Car("Ferrari", 200),
            new Car("Porsche", 180)
        };

        Console.WriteLine("Avtomobili:");
        for (int i = 0; i < cars.Length; i++)
        {
            Console.WriteLine($"{i}. {cars[i].Model}");
        }

        int car1Index = GetValidChoice(cars.Length, "Odberi avtomobil 1:");

        Console.WriteLine("Voza4i:");
        for (int i = 0; i < drivers.Length; i++)
        {
            Console.WriteLine($"{i}. {drivers[i].Name}");
        }

        int driver1Index = GetValidChoice(drivers.Length, "Odberi vozac za avtomobil 1:");

        cars[car1Index].Driver = drivers[driver1Index];

        int car2Index;
        while (true)
        {
            car2Index = GetValidChoice(cars.Length, "Odberi avtomobil 2:");

            if (car2Index != car1Index)
                break;

            Console.WriteLine("Vekje go odbra toj avtomobil, obidi se povtorno.\n");
        }

        int driver2Index = GetValidChoice(drivers.Length, "Odberi vozac za avtomobil 2:");

        cars[car2Index].Driver = drivers[driver2Index];

        RaceCars(cars[car1Index], cars[car2Index]);

        Console.WriteLine("Trkaj se povtorno? (y/n)");
        string answer = Console.ReadLine();

        if (answer.ToLower() == "y")
        {
            Main();
        }
    }
}