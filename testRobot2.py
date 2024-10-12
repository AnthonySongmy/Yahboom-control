from flask import Flask, jsonify
from flask_cors import CORS
# -*- coding:utf-8 -*
#from packageRobot import Raspblock


#robot = Raspblock()
app = Flask(__name__)
CORS(app)
#app.run(host='0.0.0.0', port=5000)

global position
global leftrightpulse
leftrightpulse = 1500
global updownpulse
updownpulse = 1500

@app.route('/robot')
def login():
    data = {"position":10}
    return jsonify(data)

@app.route("/up")
def cameraUp():
    global updownpulse
    updownpulse+=10
    if updownpulse>2500:
        updownpulse=2500
    #robot.Servo_control(leftrightpulse, updownpulse)
    return "Votre caméra a bougé de {} dégré vers le haut".format(updownpulse)

@app.route("/down")
def cameraDown():
    global updownpulse
    updownpulse-=10
    if updownpulse<500:
        updownpulse=500
    #robot.Servo_control(leftrightpulse, updownpulse)
    return "Votre caméra a bougé de {} dégré vers le bas".format(updownpulse)

@app.route("/left")
def cameraLeft():
    global leftrightpulse
    leftrightpulse+=10
    if leftrightpulse>2500:
        leftrightpulse=2500
    #robot.Servo_control(leftrightpulse, updownpulse)
    return "Votre caméra a bougé de {} dégré vers la gauche".format(leftrightpulse)

@app.route("/right")
def cameraRight():
    global leftrightpulse
    leftrightpulse-=10
    if leftrightpulse<500:
        leftrightpulse=500
    #robot.Servo_control(leftrightpulse, updownpulse)
    return "Votre caméra a bougé de {} dégré vers la droite".format(leftrightpulse)

@app.route("/init")
def camera():
    global leftrightpulse, updownpulse
    leftrightpulse = 1500
    updownpulse = 1500
    #robot.Servo_control(leftrightpulse, updownpulse)
    return "Votre caméra est initialement a {} dégré horizontalement et a {} dégré verticalement".format(updownpulse,leftrightpulse)

@app.route("/advance")
def robotForward():
    #robot.Speed_axis_Yawhold_control(0, 4) 
    return "Votre robot avance verticalement avec un pas de 4"

@app.route("/back")
def robotBack():
    #robot.Speed_axis_Yawhold_control(0, -4) 
    return "Votre robot recule verticalement avec un pas de 4"

@app.route("/s1")
def robots1():
    for i in range(100):
        for j in range(140):
            #robot.Speed_axis_Yawhold_control(0, 4)
            print("Bonsoir")
    return "Votre robot avance du bras 1 vers le bras 2"

@app.route("/s2")
def robots2():
    for i in range(100):
        for j in range(140):
            #robot.Speed_axis_Yawhold_control(0, -4)
            print("Bonsoir")
    return "Votre robot avance du bras 1 vers le bras 2"