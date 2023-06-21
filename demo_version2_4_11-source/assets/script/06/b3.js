

cc.Class({
    extends: cc.Component,

    properties: {
        buttonEvent:{
            type:cc.Button,
            default:null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.buttonEvent.node.on("click", this.setLabelString, this);

    },
    setLabelString(){
        this.node.getComponent(cc.Label).string="Listener event a button"
    },

    // update (dt) {},
});
