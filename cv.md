<b>Имя и фамилия:</b> Владислав Шаболда     
<b>Контакты для связи:</b> https://t.me/gadza_devstvenik    
<b>Краткая информация о себе:</b> Цель жизни - жить и не в чем не нуждаться. Хочу стать разработчиком компьютерных игр. Мои сильные стороны - самостоятельность, стрессоустойчивость, усидчиваость, креативность, пунктуальность, трудолюбие, повышенная работоспособность. Опыта работы нет, стремление учиться безгранично, ради своей цели.    
<b>Навыки:</b> Опыт в языке программирования - С#.    
<b>Примеры кода:</b> 
<p>
    
    using System;
    using System.IO;
    using System.Xml.Linq;
    class Program
    {
    static void Main(string[] args)
    {
        MainMenu();
    }
    static int SelectMenu(List<string> menu)
    {
        ConsoleKeyInfo key;
        (int left, int top) = Console.GetCursorPosition();
        int option = 1;
        bool show = true;
        string color = "\u001b[38;5;240m";
        while (show)
        {
            Console.SetCursorPosition(left, top);
            Console.WriteLine();
            for (int i = 0; i < menu.Count; i++)
            {
                Console.WriteLine($"{(option == i ? $" - {color}{menu[i]}\u001b[0m - " : $"   {menu[i]}   ")}");
                if (i == 0 || i == menu.Count - 2)
                {
                    Console.WriteLine();
                }
                Console.CursorVisible = false;
            }
            key = Console.ReadKey(true);
            switch (key.Key)
            {
                case ConsoleKey.DownArrow:
                    option = (option == menu.Count - 2 ? 1 : option + 1);
                    break;
                case ConsoleKey.UpArrow:
                    option = (option == 1 ? menu.Count - 2 : option - 1);
                    break;
                case ConsoleKey.Enter:
                    show = false;
                    return option;
                case ConsoleKey.Escape:
                    break;
                default:
                    break;
            }
        }
        return option;
    }
    static void MainMenu()
    {
        string pathc = @"Data\CaesarCipher";
        string paths = @"Data\SimpleCipher";
        bool show = true;
        List<string> menu = new List<string>() { "Выберите строку меню...", "Шифр Цезаря", "Простой заменяющий шифр", "Выход", "Нажмите Enter, чтобы продолжить..." };
        while (show)
        {
            int option = SelectMenu(menu);
            Console.Clear();
            show = (option == 1 ? CaesarCipher(pathc) :
                option == 2 ? SimpleReplacementCipher(paths) : Exit());
            Console.Clear();
        }
    }
    static bool CaesarCipher(string path) //65-90AAA 97-122aaaa
    {
        bool show = true;
        List<string> menu = new List<string>() { "Выберите строку меню...", "Напиши шифр Цезаря", "Просмотр шифра Цезаря", "Назад", "Нажмите Enter, чтобы продолжить..." };
        while (show)
        {
            int option = SelectMenu(menu);
            Console.Clear();
            show = (option == 1 ? WriteCaesarCipher(path) :
                option == 2 ? ViewingCaesarCipher(path) : false);
            Console.Clear();
        }
        return true;
    }
    static bool WriteCaesarCipher(string path)
    {
        Console.WriteLine("\n   Введите имя для зашифрованного текста: ");
        Console.WriteLine("\n   Введите текст, который вы хотите зашифровать: ");
        Console.SetCursorPosition(40, 1);
        string name = Console.ReadLine();
        Console.SetCursorPosition(39, 3);
        string text = Console.ReadLine();
        string newtext = "";
        for (int i = 0; i < text.Length; i++)
        {
            if ((int)text[i] != 32)
            {
                char temp = ' ';
                if ((int)text[i] >= 97 && (int)text[i] <= 122)
                {
                    temp = (char)((((int)text[i] + 15 - 97) % 26) + 65);
                }
                if ((int)text[i] >= 65 && (int)text[i] <= 90)
                {
                    temp = (char)((((int)text[i] + 15 - 65) % 26) + 97);
                }
                newtext += temp;
            }
            else
            {
                newtext += (char)32;
            }
        }
        string pathnew = path + $@"\{name}.txt";
        File.Create(pathnew).Close();
        using (StreamWriter sw = new StreamWriter(pathnew))
        {
            sw.WriteLine(newtext);
        }
        return true;
    }
    static bool ViewingCaesarCipher(string path)
    {
        bool show = true;
        List<string> menu = AddMenu(path);
        while (show)
        {
            int option = SelectMenu(menu);
            Console.Clear();
            show = (option == menu.Count - 2 ? false : ViewingCaesarCipher(path, menu[option]));
            Console.Clear();
        }
        return true;
    }
    static List<string> AddMenu(string path)
    {
        string[] file = Directory.GetFiles(path);
        List<string> menu = new List<string>() { "Выберите текст, который вы хотите расшифровать..." };
        foreach (string name in file)
        {
            string s = name.Substring(name.LastIndexOf(@"\") + 1);
            s = s.Replace(".txt", "");
            menu.Add(s);
        }
        menu.Add("Назад");
        menu.Add("Нажмите Enter, чтобы продолжить...");
        return menu;
    }
    static bool ViewingCaesarCipher(string path, string name)
    {
        string text = "";
        using (StreamReader sr = new StreamReader(path + @"\" + name + ".txt"))
        {
            text = sr.ReadLine();
        }
        Console.WriteLine("\n   Зашифрованный текст: " + text);
        string newtext = "";
        for (int i = 0; i < text.Length; i++)//65-90AAA 97-122aaaa
        {
            Console.WriteLine((int)text[i] + " " + text[i]);
            if ((int)text[i] != 32)
            {
                char temp = ' ';
                if ((int)text[i] >= 97 && (int)text[i] <= 122)
                {
                    int num = (int)text[i] - 15 - 97;
                    if (num < 0)
                    {
                        temp = (char)(26 - Math.Abs(num) + 65);
                    }
                    else
                    {
                        temp = (char)(num + 65);
                    }
                }
                if ((int)text[i] >= 65 && (int)text[i] <= 90)
                {
                    int num = (int)text[i] - 15 - 65;
                    if (num < 0)
                    {
                        temp = (char)(26 - Math.Abs(num) + 97);
                    }
                    else
                    {
                        temp = (char)(num + 97);
                    }
                }
                newtext += temp;
            }
            else
            {
                newtext += (char)32;
            }
        }
        Console.WriteLine("\n   Расшифрованный текст: " + newtext);
        return EnterMenu();
    }
    static bool SimpleReplacementCipher(string path)
    {
        bool show = true;
        List<string> menu = new List<string>() { "Выберите строку меню...", "Напишите простой заменяющий шифр", "Просмотр простого заменяющего шифра", "Назад", "Нажмите Enter, чтобы продолжить..." };
        while (show)
        {
            int option = SelectMenu(menu);
            Console.Clear();
            show = (option == 1 ? WriteSimpleReplacementCipher(path) :
                option == 2 ? ViewingSimpleReplacementCipher(path) : false);
            Console.Clear();
        }
        return true;
    }
    static bool WriteSimpleReplacementCipher(string path)
    {
        Console.WriteLine("\n   Введите имя для зашифрованного текста: ");
        Console.WriteLine("\n   Введите текст, который вы хотите зашифровать: ");
        Console.SetCursorPosition(40, 1);
        string name = Console.ReadLine();
        Console.SetCursorPosition(39, 3);
        string text = Console.ReadLine();
        List<int> num = new List<int>();
        for (int i = 0; i < text.Length; i++)
        {
            num.Add((int)text[i]);
        }
        string pathnew = path + $@"\{name}.txt";
        File.Create(pathnew).Close();
        using (StreamWriter sw = new StreamWriter(pathnew))
        {
            foreach (int i in num)
            {
                sw.Write(i + " ");
            }
        }
        return true;
    }
    static bool ViewingSimpleReplacementCipher(string path)
    {
        bool show = true;
        List<string> menu = AddMenu(path);
        while (show)
        {
            int option = SelectMenu(menu);
            Console.Clear();
            show = (option == menu.Count - 2 ? false : ViewingSimpleReplacementCipher(path, menu[option]));
            Console.Clear();
        }
        return true;
    }
    static bool ViewingSimpleReplacementCipher(string path, string name)
    {
        string text = "";
        List<int> num = new List<int>();
        using (StreamReader sr = new StreamReader(path + @"\" + name + ".txt"))
        {
            text = sr.ReadLine();
        }
        string[] nums = text.Split(' ');
        for (int i = 0; i < nums.Length - 1; i++)
        {
            num.Add(int.Parse(nums[i]));
        }
        Console.WriteLine("\n   Зашифрованный текст: " + text);
        string newtext = "";
        for (int i = 0; i < num.Count; i++)
        {
            newtext += (char)num[i];
        }
        Console.WriteLine("\n   Расшифрованный текст: " + newtext);
        return EnterMenu();
    }
    static bool EnterMenu()
    {
        Console.CursorVisible = false;
        bool show = true;
        while (show)
        {
            switch (Console.ReadKey(true).Key)
            {
                case ConsoleKey.Enter:
                    show = false;
                    return true;
                default:
                    break;
            }
        }
        return true;
    }
    static bool Exit()
    {
        List<string> menu = new List<string>() { "Вы хотите выйти из программы? Выберите строку меню...", "Да", "Нет", "Нажмите Enter, чтобы продолжить..." };
        bool show;
        return show = (SelectMenu(menu) == 1 ? false : true);
    }
    }
</p>
<b>Опыт работы:</b> нет    
<b>Образование:</b> Законченное среднее общее образование, сейчас являюсь студентом БРУ.    
<b>Английский язык:</b> Я считаю самый низший, я начал учить английский только в этом году. Все 11 классов учил немецкий.
