import os
import serial
from pyembedded.rfid_module.rfid import RFID
nom = input("Entrez votre nom :")
print("Vous vous appelez ", str(nom))
rfid = RFID(port='COM3', baud_rate=9600)
#ser = serial.Serial('LPT1',baudrate=9600,timeout=1)
if rfid != "":
    print(rfid.get_id())
else :
    print("Pas de donnees lues")
#print(ser.read(10))
fin = input("Tapez une touche pour continuer")
os.system('pause')