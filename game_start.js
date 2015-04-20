var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var GameStart = (function (_super) {
    __extends(GameStart, _super);
    function GameStart() {
        _super.apply(this, arguments);
    }
    GameStart.prototype.init = function () {
    };
    GameStart.prototype.preload = function () {
        this.load.spritesheet("start_button", "images/interface/start_button.png", 93, 51);
        this.load.image("book", "images/interface/book.png");
        this.load.audio("play-start", "sounds/play-button.mp3");
    };
    GameStart.prototype.create = function () {
        var _this = this;
        this.game.stage.backgroundColor = "#666";
        var centerX = this.world.width / 2;
        var centerY = this.world.height / 2;
        this.add.text(centerX, 120, "economic hitman", { font: "64px bitOperatorPlus", fill: "#ff6" }).anchor.set(0.5, 0.5);
        var quote = "No matter how many toys we amass we leave them\n" +
            "behind when we die, just as we leave a broken\n" +
            "environment, an economy that only benefits the\n" +
            "richest, and a legacy of empowering greed over\n" +
            "goodness.";
        this.add.text(centerX, 260, quote, { font: "26px bitOperatorPlus", fill: "white", align: "center" }).anchor.set(0.5, 0.5);
        var button = this.add.button(centerX, 500, "start_button", function () {
            var playAgain = _this.game.sound.add("play-start");
            playAgain.onStop.add(function () {
                _this.game.state.start("gameplay");
            });
            playAgain.play();
        }, this, 1, 0, 2);
        button.anchor.setTo(0.5, 0.5);
        this.add.text(800, 400, "inspired by:", { font: "26px bitOperatorPlus", fill: "white" }).anchor.set(0.5, 0.5);
        this.add.image(800, 500, "book").anchor.setTo(0.5, 0.5);
        this.add.text(centerX, 560, "a game by sentendo", { font: "26px bitOperatorPlus", fill: "white" }).anchor.set(0.5, 0.5);
    };
    return GameStart;
})(Phaser.State);
