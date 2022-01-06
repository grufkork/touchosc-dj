var TouchOSC = {};


TouchOSC.init = function(id, debugging){
    //engine.setValue("[Channel1]", "cue_gotoandplay", true);
}

TouchOSC.shutdown = function(id, debugging){

}

TouchOSC.nudge = function(ch, ctrl, val, stat, group){
    var deck = script.deckFromGroup(group);
    //engine.setValue("[Channel1]", "cue_gotoandplay", true);
    engine.setValue(group, "jog", (val - 64)/8.0);
}

TouchOSC.seek = function(ch, ctrl, val, stat, group){
    engine.setValue(group, "jog", (val - 64)*3.0);
}

TouchOSC.setLoopLength = function(ch, ctrl, val, stat, group){
    engine.setParameter(group, "beatloop_size", Math.pow(2, val - 16));
}

TouchOSC.startLoop = function(ch, ctrl, val, stat, group){
    engine.setParameter(group, "beatloop_activate", true);
}

TouchOSC.endLoop = function(ch, ctrl, val, stat, group){
    engine.setParameter(group, "reloop_toggle", true);
}

TouchOSC.cue = function(ch, ctrl, val, stat, group){

}

TouchOSC.resetTempo = function(ch, ctrl, val, stat, group){
    engine.beginTimer(100, function(){
        TouchOSC.decreaseTempoDiff(ch, ctrl, val, stat, group);
    }, true);

    //engine.setValue(group, "bpm", 100);
    /**/
}

TouchOSC.decreaseTempoDiff = function(ch, ctrl, val, stat, group){
    var target = engine.getValue(group, "file_bpm");
    var bpm = engine.getValue(group, "bpm");

    //engine.setValue(group, "bpm", target);

    if (Math.abs(target - bpm) < 0.1){
        engine.setValue(group, "bpm", target);
    }else{
        if (bpm > target){
            engine.setValue(group, "bpm", bpm - 0.05);
        }else{
            engine.setValue(group, "bpm", bpm + 0.05);
        }
        engine.beginTimer(100, function(){
            TouchOSC.decreaseTempoDiff(ch, ctrl, val, stat, group);
        }, true);
    }
}

TouchOSC.shift = function(ch, ctrl, val, stat, group){
    //engine.setValue(group, "cue_gotoandplay", true);
    TouchOSC.shiftHeld = val > 0;
}

TouchOSC.hotcue = function(ch, ctrl, val, stat, group){
    //engine.setValue(group, "cue_gotoandplay", true);
    if (group == "[Channel2]") ctrl -= 4;
    if (TouchOSC.shiftHeld){
        engine.setValue(group, "hotcue_" + (ctrl+1) + "_clear", true);
    }else{
        if(val > 0){
            engine.setValue(group, "hotcue_" + (ctrl + 1) + "_activate", 1);
        }else{
            engine.setValue(group, "hotcue_" + (ctrl + 1) + "_activate", 0);
        }
    }
}

TouchOSC.beatjump = function(ch, ctrl, val, stat, group){
    if(ctrl%2 == 0){
        engine.setValue(group, "beatjump", -4);
    }else{
        engine.setValue(group, "beatjump", -1);
    }

}