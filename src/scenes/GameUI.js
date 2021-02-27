import Phaser from 'phaser'
import Button from "../sprites/button.js";
import mPickBtn from "../resources/mobile/interactivebutton.png";
import mPickBtnPressed from "../resources/mobile/interactivebuttonpressed.png";
import eventsCenter from "../events/EventsCenter";

export default class GameUI extends Phaser.Scene {
    constructor(config) {
        super(config)
    }

    preload() {
        this.load.image("mPickBtn", mPickBtn);
        this.load.image("mPickBtnPressed", mPickBtnPressed);
    }

    create() {
        var scale = 300/568;
        var x = 700;
        var y = 400;
        this.buttons = {};
        this.buttons["mPickBtn"] = new Button(this, x, y,'mPickBtn',scale,()=>{
            eventsCenter.emit('mPickItem', 'mPickItem');
        },'mPickBtnPressed')
    }
}