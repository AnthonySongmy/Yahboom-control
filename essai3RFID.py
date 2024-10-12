import serial, binascii
import time

ser = serial.Serial(
    port = 'COM4',
    baudrate = 9600,
    timeout = 1
)

ser.close()
ser.open()

while 1:
    data = binascii.hexlify(ser.readline())
    if data != "":
        print("Tag : {}".format(data[6:22]))
    else :
        print("Pas de tag detecte")

time.sleep(1)



