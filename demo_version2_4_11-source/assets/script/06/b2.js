

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    setLabelString(){
        this.node.getComponent(cc.Label).string="call B function to change label content"
    },
    // update (dt) {},
});
