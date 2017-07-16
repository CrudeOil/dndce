enum Race {
    Dragonborn = "Dragonborn",
    HillDwarf = "Hill Dwarf",
    Elf = "Elf",
    Gnome = "Gnome",
    HalfElf = "Half-Elf",
    HalfOrc = "Half-Orc",
    Halfling = "Halfling",
    Human = "Human",
    Tiefling = "Tiefling"
}

enum Class {
    Barbrian = "Barbarian",
    Bard = "Bard",
    Cleric = "Cleric",
    Druid = "Druid",
    Fighter = "Fighter",
    Monk = "Monk",
    Paladin = "Paladin",
    Ranger = "Ranger",
    Rogue = "Rogue",
    Sorcerer = "Sorcerer",
    Warlock = "Warlock",
    Wizard = "Wizard"
}

interface IPlayer {
    name: string,
    race: Race,
    class: Class
}