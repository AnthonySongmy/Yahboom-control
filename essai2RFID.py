
import serial
import time
from threading import Thread

ser = serial.Serial(
        port ='COM7',
        baudrate = 9600,
        timeout = 1
    )
sortie = False
ser.close()
ser.open()
def essai():
    global sortie
    while not sortie:
        try:
            while True:
                #lire les donnees depuis le lecteur rfid
                rfid_data = ser.readline().strip()

                #verfifier si les donnes ont ete lues
                if rfid_data != "":
                    print("Donnees RFID lues :", rfid_data.decode("utf-8"))
                    time.sleep(1)
        except KeyboardInterrupt:
            print("Arret du programme")


t = Thread(target=essai)
t.start()
time.sleep(5)
sortie = True
t.join()
print("termine")
ser.close()


