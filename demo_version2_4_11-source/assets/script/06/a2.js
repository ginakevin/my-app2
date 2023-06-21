

cc.Class({
    extends: cc.Component,

    properties: {
       b2Label:{
            type:cc.Label,
            default:null
       }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },
    callB2Function(){
        const callB2=this.b2Label.getComponent("b2");
        callB2.setLabelString();
    }

    // update (dt) {},
});
