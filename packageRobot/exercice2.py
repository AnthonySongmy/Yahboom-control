#exercice 2

def saisie():
    while True:
        try:
            nbre = int(input("Saisir un nombre qui contient 3 chiffred au maximum : "))
        except:
            print("Erreur de type, la donnee saisie n'est pas un entier")
        else:
            if nbre<10**3:
                break
    return nbre

p = saisie()