//task1
/*
using System;

class Program
{
    static void Main()
    {
        while (true)
        {
            Console.Write("Vnesi broj: ");
            string input = Console.ReadLine();

            // dali e validen broj
            if (!double.TryParse(input, out double number))
            {
                Console.WriteLine("Nevaliden broj, povtorno vnesete broj.\n");
                continue;
            }

            NumberStats(number);

            // exit or continue
            Console.WriteLine("\nPritisnete X za da prekinete ili druga bukva za da prodolzite...");
            string choice = Console.ReadLine();

            if (choice.ToLower() == "x")
                break;

            Console.WriteLine();
        }
    }

    static void NumberStats(double number)
    {
        Console.WriteLine($"\nSvojstva na brojot: {number}");

        // proverue dali e negativen ili pozitiven
        if (number >= 0)
            Console.WriteLine("Positive");
        else
            Console.WriteLine("Negative");

        // proverue dali e cel broj ili decimalen
        if (number % 1 == 0)
            Console.WriteLine("Cel");
        else
            Console.WriteLine("Decimalen");

        // proverue dali e paren ili neparen (samo za cel broj)
        if (number % 1 == 0)
        {
            if ((int)number % 2 == 0)
                Console.WriteLine("Paren");
            else
                Console.WriteLine("Neparen");
        }
        else
        {
            Console.WriteLine("Decimal Number");
        }
    }
}
*/

//task2

/*
using System;

class User
{
    public int Id;
    public string Username;
    public string Password;
    public string[] Messages;

    public User(int id, string username, string password, string[] messages)
    {
        Id = id;
        Username = username;
        Password = password;
        Messages = messages;
    }
}

class Program
{
    static void Main()
    {
        User[] users = new User[]
        {
            new User(1, "ilija", "123", new string[] { "Hello", "Welcome back" }),
            new User(2, "marko", "456", new string[] { "Hi there", "New message" }),
            new User(3, "rozana", "789", new string[] { "Good day", "Check this out" })
        };

        while (true)
        {
            Console.WriteLine("\n1. Login");
            Console.WriteLine("2. Register");
            Console.Write("Choose: ");
            string choice = Console.ReadLine();

            // LOGIN
            if (choice == "1")
            {
                Console.Write("Username: ");
                string username = Console.ReadLine();

                Console.Write("Password: ");
                string password = Console.ReadLine();

                User foundUser = null;

                foreach (User u in users)
                {
                    if (u.Username == username && u.Password == password)
                    {
                        foundUser = u;
                        break;
                    }
                }

                if (foundUser != null)
                {
                    Console.WriteLine($"\nWelcome {foundUser.Username}. Here are your messages:");
                    foreach (string msg in foundUser.Messages)
                    {
                        Console.WriteLine($"- {msg}");
                    }
                }
                else
                {
                    Console.WriteLine("User not found!");
                }
            }

            // REGISTER
            else if (choice == "2")
            {
                Console.Write("Enter username: ");
                string newUsername = Console.ReadLine();

                Console.Write("Enter password: ");
                string newPassword = Console.ReadLine();

                // Check if username exists
                bool exists = false;
                foreach (User u in users)
                {
                    if (u.Username == newUsername)
                    {
                        exists = true;
                        break;
                    }
                }

                if (exists)
                {
                    Console.WriteLine("User already exists!");
                }
                else
                {
                    // Generate ID (simple: last + 1)
                    int newId = users.Length + 1;

                    // Create new array (since arrays can't resize)
                    User[] newUsers = new User[users.Length + 1];

                    for (int i = 0; i < users.Length; i++)
                    {
                        newUsers[i] = users[i];
                    }

                    newUsers[newUsers.Length - 1] =
                        new User(newId, newUsername, newPassword, new string[] { "No messages yet" });

                    users = newUsers;

                    Console.WriteLine("\nRegistration complete! Users:");
                    foreach (User u in users)
                    {
                        Console.WriteLine($"{u.Id} {u.Username}");
                    }
                }
            }
            else
            {
                Console.WriteLine("Invalid choice!");
            }
        }
    }
}
*/
/*
//task 3
using System;

class Customer
{
    public string FullName;
    public string CardNumber;

    private int Pin;
    private double Balance;

    public Customer(string name, string card, int pin, double balance)
    {
        FullName = name;
        CardNumber = card;
        Pin = pin;
        Balance = balance;
    }

    public bool CheckPin(int pin)
    {
        return Pin == pin;
    }

    public double GetBalance()
    {
        return Balance;
    }

    public void Deposit(double amount)
    {
        Balance += amount;
    }

    public void Withdraw(double amount)
    {
        if (amount <= Balance)
        {
            Balance -= amount;
            Console.WriteLine("Uspe6na transakcija.");
        }
        else
        {
            Console.WriteLine("Nedovolni sredstva.");
        }
    }
}

class Program
{
    static void Main()
    {
        Customer[] customers = new Customer[]
        {
            new Customer("Ilija Dobrinov", "1111", 1234, 500),
            new Customer("Marko Petrov", "2222", 5678, 1000)
        };

        while (true)
        {
            Console.Write("\nVnesi broj na karti4ka: ");
            string card = Console.ReadLine();

            Console.Write("Vnesi  PIN: ");
            int pin = int.Parse(Console.ReadLine());

            Customer current = null;

            foreach (Customer c in customers)
            {
                if (c.CardNumber == card && c.CheckPin(pin))
                {
                    current = c;
                    break;
                }
            }

            if (current == null)
            {
                Console.WriteLine("Gre6ka pin ili broj na kartichka!");
                continue;
            }

            Console.WriteLine($"\nDobredojdovte {current.FullName}!");

            bool running = true;

            while (running)
            {
                Console.WriteLine("\n1. Balance");
                Console.WriteLine("2. Withdraw");
                Console.WriteLine("3. Deposit");
                Console.WriteLine("4. Register new card");
                Console.Write("Choose: ");
                string choice = Console.ReadLine();

                if (choice == "1")
                {
                    Console.WriteLine($"Balance: {current.GetBalance()}");
                }
                else if (choice == "2")
                {
                    Console.Write("Enter amount: ");
                    double amount = double.Parse(Console.ReadLine());
                    current.Withdraw(amount);
                }
                else if (choice == "3")
                {
                    Console.Write("Enter amount: ");
                    double amount = double.Parse(Console.ReadLine());
                    current.Deposit(amount);
                    Console.WriteLine("Deposit successful.");
                }
                else if (choice == "4")
                {
                    Console.Write("Ime i rezime: ");
                    string name = Console.ReadLine();

                    Console.Write("Broj na karti4ka: ");
                    string newCard = Console.ReadLine();

                    Console.Write("PIN: ");
                    int newPin = int.Parse(Console.ReadLine());

                    Customer[] newCustomers = new Customer[customers.Length + 1];

                    for (int i = 0; i < customers.Length; i++)
                    {
                        newCustomers[i] = customers[i];
                    }

                    newCustomers[newCustomers.Length - 1] =
                        new Customer(name, newCard, newPin, 0);

                    customers = newCustomers;

                    Console.WriteLine("Nova kartichka registrirana!");
                }
                else
                {
                    Console.WriteLine("Nevalidna opcija!");
                }

                Console.Write("\nDali sakate da prodolzhite ?(y/n): ");
                string again = Console.ReadLine();

                if (again.ToLower() != "y")
                    running = false;
            }
        }
    }
}
*/

