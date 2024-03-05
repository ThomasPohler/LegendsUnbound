/*const _collapseFunction = (view, sheetOpened) => {
        getAttrs([view + "_storage"], function(values) {
            let tempVal = parseInt(values[view + "_storage"]);

            if(!sheetOpened){
                setAttrs({
                    [view + "_storage"]: (tempVal === 1 ? 0 : 1)
                });
            }
            return ((tempVal === 1 && !sheetOpened) || (tempVal === 0 && sheetOpened) ? 1 : 0);
        });
    }


    on('clicked:left_sidebar_view', (info) => { //TPTODO singular sheet-opened
        console.log(info);
        let x = await _collapseFunction("left_sidebar_view", false);
        if(x){
            $20("#left_sidebar").addClass("collapsed");
            $20("#left_sidebar_view").addClass("checked");
        } else {
            $20("#left_sidebar").removeClass("collapsed");
            $20("#left_sidebar_view").removeClass("checked");
        }
    });
    


    /* Turn this shit into a function TPTODO */

    /* Handles the left sidebar collapsible button */
    /*on('clicked:left_sidebar_view sheet:opened', (info) => { //TPTODO
        getAttrs(["left_sidebar_view_storage"], function(values) {
            let val = parseInt(values.left_sidebar_view_storage);
            if((val === 1 && info.triggerName !== "sheet:opened") || (val === 0 && info.triggerName == "sheet:opened")){
                $20("#left_sidebar").addClass("collapsed");
                $20("#left_sidebar_view").addClass("checked");
            } else {
                $20("#left_sidebar").removeClass("collapsed");
                $20("#left_sidebar_view").removeClass("checked");
            }
            if(info.triggerName !== "sheet:opened"){
                setAttrs({
                    left_sidebar_view_storage: (parseInt(values.left_sidebar_view_storage) === 1 ? 0 : 1)
                });
            }
        });
    });*/

    /* Handles the character box collapsible button */
    on('clicked:character_box_view_col sheet:opened', (info) => {
        getAttrs(["character_box_view_storage"], function(values) {
            let val = parseInt(values.character_box_view_storage);
            if((val === 1 && info.triggerName !== "sheet:opened") || (val === 0 && info.triggerName == "sheet:opened")){
                $20("#character_box").addClass("invis");
                $20("#character_box_checkbox").addClass("checked");
                $20("#character_box_collapsed").addClass("checked");
            } else {
                $20("#character_box").removeClass("invis");
                $20("#character_box_checkbox").removeClass("checked");
                $20("#character_box_collapsed").removeClass("checked");
            }
            if(info.triggerName !== "sheet:opened"){
                setAttrs({
                    character_box_view_storage: (parseInt(values.character_box_view_storage) === 1 ? 0 : 1)
                });
            }
        });
    });

    /* Handles the character box collapsible button */
    on('clicked:loadout_view sheet:opened', (info) => {
        getAttrs(["loadout_view_storage"], function(values) {
            let val = parseInt(values.loadout_view_storage);
            console.log(val);
            if((val === 1 && info.triggerName !== "sheet:opened") || (val === 0 && info.triggerName == "sheet:opened")){
                $20("#advan_and_mod_box").addClass("invis");
                $20("#loadout_checkbox").addClass("checked");
            } else {
                $20("#advan_and_mod_box").removeClass("invis");
                $20("#loadout_checkbox").removeClass("checked");
            }
            if(info.triggerName !== "sheet:opened"){
                setAttrs({
                    loadout_view_storage: (parseInt(values.loadout_view_storage) === 1 ? 0 : 1)
                });
            }
        });
    });
    



    
    




    on("change:advan_and_mod_loadout sheet:opened", function() {
        getAttrs(["advan_and_mod_loadout"], function(values) {
            let val = parseInt(values.advan_and_mod_loadout);
            setAttrs({
                advmodLoadout: val
            });
        });
    });
    
    on("change:level sheet:opened", function() {  
        getAttrs(["level"], function(values) {
            let val = Math.ceil(1 + parseInt(values.level)/5);
            setAttrs({                            
                "maxessence": val
            });
        });
    });
    
    /* Controls the ability to hide the description in the ability trackers */
    on('clicked:repeating_ability:abilitytrackertextbutton', function() {
        getAttrs(["repeating_ability_abilityTextToggle"], function(values) {
            let val = (values.repeating_ability_abilityTextToggle == "1" ? "0" : "1");
            setAttrs({
                repeating_ability_abilityTextToggle: val
            });
        });
    });












    
    on("change:tolerance2 change:tolerance_armor_caustic change:tolerance_shield_caustic change:armor_tolerance_apply change:shield_tolerance_apply sheet:opened", function() {  
        getAttrs(["tolerance2","tolerance_armor_caustic","tolerance_shield_caustic","armor_tolerance_apply","shield_tolerance_apply"], function(values) {
            let val = (parseInt(values.tolerance2) || 0) + (parseInt(values.tolerance_armor_caustic) * (values.armor_tolerance_apply === "on") || 0) + (parseInt(values.tolerance_shield_caustic) * (values.shield_tolerance_apply === "on") || 0)
            setAttrs({
                "tolerance_total_caustic": val
            });
        });
    });
    
    on("change:tolerance3 change:tolerance_armor_cold change:tolerance_shield_cold change:armor_tolerance_apply change:shield_tolerance_apply sheet:opened", function() {  
        getAttrs(["tolerance3","tolerance_armor_cold","tolerance_shield_cold","armor_tolerance_apply","shield_tolerance_apply"], function(values) {
            let val = (parseInt(values.tolerance3) || 0) + (parseInt(values.tolerance_armor_cold) * (values.armor_tolerance_apply === "on")  || 0) + (parseInt(values.tolerance_shield_cold) * (values.shield_tolerance_apply === "on") || 0)
            setAttrs({
                "tolerance_total_cold": val
            });
        });
    });
    
    on("change:tolerance4 change:tolerance_armor_electric change:tolerance_shield_electric change:armor_tolerance_apply change:shield_tolerance_apply sheet:opened", function() {  
        getAttrs(["tolerance4","tolerance_armor_electric","tolerance_shield_electric","armor_tolerance_apply","shield_tolerance_apply"], function(values) {
            let val = (parseInt(values.tolerance4) || 0) + (parseInt(values.tolerance_armor_electric) * (values.armor_tolerance_apply === "on")  || 0) + (parseInt(values.tolerance_shield_electric) * (values.shield_tolerance_apply === "on") || 0)
            setAttrs({
                "tolerance_total_electric": val
            });
        });
    });
    
    on("change:tolerance5 change:tolerance_armor_death change:tolerance_shield_death change:armor_tolerance_apply change:shield_tolerance_apply sheet:opened", function() {  
        getAttrs(["tolerance5","tolerance_armor_death","tolerance_shield_death","armor_tolerance_apply","shield_tolerance_apply"], function(values) {
            let val = (parseInt(values.tolerance5) || 0) + (parseInt(values.tolerance_armor_death) * (values.armor_tolerance_apply === "on")  || 0) + (parseInt(values.tolerance_shield_death) * (values.shield_tolerance_apply === "on") || 0)
            setAttrs({
                "tolerance_total_death": val
            });
        });
    });
    
    on("change:tolerance6 change:tolerance_armor_heat change:tolerance_shield_heat change:armor_tolerance_apply change:shield_tolerance_apply sheet:opened", function() {  
        getAttrs(["tolerance6","tolerance_armor_heat","tolerance_shield_heat","armor_tolerance_apply","shield_tolerance_apply"], function(values) {
            let val = (parseInt(values.tolerance6) || 0) + (parseInt(values.tolerance_armor_heat) * (values.armor_tolerance_apply === "on")  || 0) + (parseInt(values.tolerance_shield_heat) * (values.shield_tolerance_apply === "on") || 0)
            setAttrs({
                "tolerance_total_heat": val
            });
        });
    });
    
    on("change:tolerance7 change:tolerance_armor_light change:tolerance_shield_light change:armor_tolerance_apply change:shield_tolerance_apply sheet:opened", function() {  
        getAttrs(["tolerance7","tolerance_armor_light","tolerance_shield_light","armor_tolerance_apply","shield_tolerance_apply"], function(values) {
            let val = (parseInt(values.tolerance7) || 0) + (parseInt(values.tolerance_armor_light) * (values.armor_tolerance_apply === "on")  || 0) + (parseInt(values.tolerance_shield_light) * (values.shield_tolerance_apply === "on") || 0)
            setAttrs({
                "tolerance_total_light": val
            });
        });
    });
    
    on("change:tolerance9 change:tolerance_armor_poison change:tolerance_shield_poison change:armor_tolerance_apply change:shield_tolerance_apply sheet:opened", function() {  
        getAttrs(["tolerance9","tolerance_armor_poison","tolerance_shield_poison","armor_tolerance_apply","shield_tolerance_apply"], function(values) {
            let val = (parseInt(values.tolerance9) || 0) + (parseInt(values.tolerance_armor_poison) * (values.armor_tolerance_apply === "on")  || 0) + (parseInt(values.tolerance_shield_poison) * (values.shield_tolerance_apply === "on") || 0)
            setAttrs({
                "tolerance_total_poison": val
            });
        });
    });
    
    on("change:tolerance_physical change:tolerance_armor_physical change:tolerance_shield_physical change:armor_tolerance_apply change:shield_tolerance_apply sheet:opened", function() {  
        getAttrs(["tolerance_physical","tolerance_armor_physical","tolerance_shield_physical","armor_tolerance_apply","shield_tolerance_apply"], function(values) {
            let val = (parseInt(values.tolerance_physical) || 0) + (parseInt(values.tolerance_armor_physical) * (values.armor_tolerance_apply === "on")  || 0) + (parseInt(values.tolerance_shield_physical) * (values.shield_tolerance_apply === "on") || 0)
            setAttrs({
                "tolerance_total_physical": val
            });
        });
    });
    
    on("change:tolerance10 change:tolerance_armor_psychic change:tolerance_shield_psychic change:armor_tolerance_apply change:shield_tolerance_apply sheet:opened", function() {  
        getAttrs(["tolerance10","tolerance_armor_psychic","tolerance_shield_psychic","armor_tolerance_apply","shield_tolerance_apply"], function(values) {
            let val = (parseInt(values.tolerance10) || 0) + (parseInt(values.tolerance_armor_psychic) || 0) * (values.armor_tolerance_apply === "on")  + (parseInt(values.tolerance_shield_psychic) * (values.shield_tolerance_apply === "on") || 0)
            setAttrs({
                "tolerance_total_psychic": val
            });
        });
    });
    
    on("change:tolerance13 change:tolerance_armor_sound change:tolerance_shield_sound change:armor_tolerance_apply change:shield_tolerance_apply sheet:opened", function() {  
        getAttrs(["tolerance13","tolerance_armor_sound","tolerance_shield_sound","armor_tolerance_apply","shield_tolerance_apply"], function(values) {
            let val = (parseInt(values.tolerance13) || 0) + (parseInt(values.tolerance_armor_sound) || 0) * (values.armor_tolerance_apply === "on")  + (parseInt(values.tolerance_shield_sound) * (values.shield_tolerance_apply === "on") || 0)
            setAttrs({
                "tolerance_total_sound": val
            });
        });
    });
    
    
    
    
    
    on("change:detection_mod change:intuition_mod change:wilderness_mod change:convince_mod change:flair_mod change:performance_mod change:agility_mod change:dexterity_mod change:stealth_mod change:constitution_mod change:persistence_mod change:toughness_mod change:engineering_mod change:knowledge_mod change:magic_mod change:grip_mod change:physicality_mod change:presence_mod change:faith_mod change:interaction_mod change:willpower_mod sheet:opened", function() {  
        getAttrs(["detection_mod","intuition_mod","wilderness_mod","convince_mod","flair_mod","performance_mod","agility_mod","dexterity_mod","stealth_mod","constitution_mod","persistence_mod","toughness_mod","engineering_mod","knowledge_mod","magic_mod","grip_mod","physicality_mod","presence_mod","faith_mod","interaction_mod","willpower_mod"], function(values) {
            let val = parseInt(values.detection_mod) + parseInt(values.intuition_mod) + parseInt(values.wilderness_mod) + parseInt(values.convince_mod) + parseInt(values.flair_mod) + parseInt(values.performance_mod) + parseInt(values.agility_mod) + parseInt(values.dexterity_mod) + parseInt(values.stealth_mod) + parseInt(values.constitution_mod) + parseInt(values.persistence_mod) + parseInt(values.toughness_mod) + parseInt(values.engineering_mod) + parseInt(values.knowledge_mod) + parseInt(values.magic_mod) + parseInt(values.grip_mod) + parseInt(values.physicality_mod) + parseInt(values.presence_mod) + parseInt(values.faith_mod) + parseInt(values.interaction_mod) + parseInt(values.willpower_mod)
            setAttrs({                            
                "totaltrait": val
            });
        });
    });
    
    
    
    
    
    on("change:reflex_check_lu change:strength_check_lu change:toughness_check_lu change:heart_check_lu change:mind_check_lu change:soul_check_lu change:level change:rest_lu change:tolerance2 change:tolerance3 change:tolerance4 change:tolerance5 change:tolerance6 change:tolerance7 change:tolerance9 change:tolerance_physical change:tolerance10 change:tolerance13 change:equipslots_lu change:melee_mod_lu change:ranged_mod_lu change:thrown_mod_lu change:spell_mod_lu change:block_mod change:dodge_mod change:parry_mod sheet:opened", function() {  
        getAttrs(["reflex_check_lu","strength_check_lu","toughness_check_lu","heart_check_lu","mind_check_lu","soul_check_lu","level","rest_lu","tolerance2","tolerance3","tolerance4","tolerance5","tolerance6","tolerance7","tolerance9","tolerance_physical","tolerance10","tolerance13","equipslots_lu","melee_mod_lu","ranged_mod_lu","thrown_mod_lu","spell_mod_lu","block_mod","dodge_mod","parry_mod"], function(values) {
            let val = parseInt(values.reflex_check_lu) + parseInt(values.strength_check_lu) + parseInt(values.toughness_check_lu) + parseInt(values.heart_check_lu) + parseInt(values.mind_check_lu) + parseInt(values.soul_check_lu) + parseInt(values.rest_lu) + parseInt(values.tolerance2) + parseInt(values.tolerance3) + parseInt(values.tolerance4) + parseInt(values.tolerance5) + parseInt(values.tolerance6) + parseInt(values.tolerance7) + parseInt(values.tolerance9) + parseInt(values.tolerance_physical) + parseInt(values.tolerance10) + parseInt(values.tolerance13) + parseInt(values.equipslots_lu) + parseInt(values.melee_mod_lu) + parseInt(values.ranged_mod_lu) + parseInt(values.thrown_mod_lu) + parseInt(values.spell_mod_lu) + parseInt(values.block_mod) + parseInt(values.dodge_mod) + parseInt(values.parry_mod)
            setAttrs({                            
                "totalessence_combat": (10 + 2 * parseInt(values.level)) - val
            });
        });
    });
    
    on("change:language_lu change:level change:rest_lu change:equipslots_lu change:detection_mod_lu change:intuition_mod_lu change:wilderness_mod_lu change:convince_mod_lu change:flair_mod_lu change:performance_mod_lu change:agility_mod_lu change:dexterity_mod_lu change:stealth_mod_lu change:constitution_mod_lu change:persistence_mod_lu change:toughness_mod_lu change:engineering_mod_lu change:knowledge_mod_lu change:magic_mod_lu change:grip_mod_lu change:physicality_mod_lu change:presence_mod_lu change:faith_mod_lu change:interaction_mod_lu change:willpower_mod_lu sheet:opened", function() {  
        getAttrs(["language_lu","level","rest_lu","equipslots_lu","detection_mod_lu","intuition_mod_lu","wilderness_mod_lu","convince_mod_lu","flair_mod_lu","performance_mod_lu","agility_mod_lu","dexterity_mod_lu","stealth_mod_lu","constitution_mod_lu","persistence_mod_lu","toughness_mod_lu","engineering_mod_lu","knowledge_mod_lu","magic_mod_lu","grip_mod_lu","physicality_mod_lu","presence_mod_lu","faith_mod_lu","interaction_mod_lu","willpower_mod_lu"], function(values) {
            let val = parseInt(values.language_lu) + parseInt(values.equipslots_lu) + parseInt(values.detection_mod_lu) + parseInt(values.intuition_mod_lu) + parseInt(values.wilderness_mod_lu) + parseInt(values.convince_mod_lu) + parseInt(values.flair_mod_lu) + parseInt(values.performance_mod_lu) + parseInt(values.agility_mod_lu) + parseInt(values.dexterity_mod_lu) + parseInt(values.stealth_mod_lu) + parseInt(values.constitution_mod_lu) + parseInt(values.persistence_mod_lu) + parseInt(values.toughness_mod_lu) + parseInt(values.engineering_mod_lu) + parseInt(values.knowledge_mod_lu) + parseInt(values.magic_mod_lu) + parseInt(values.grip_mod_lu) + parseInt(values.physicality_mod_lu) + parseInt(values.presence_mod_lu) + parseInt(values.faith_mod_lu) + parseInt(values.interaction_mod_lu) + parseInt(values.willpower_mod_lu)
            setAttrs({                            
                "totalessence_roleplay": (10 + 2 * parseInt(values.level)) - val
            });
        });
    });
    
    
    
    
    
    on("change:detection_mod change:detection_mod_lu sheet:opened", function() {  
        getAttrs(["detection_mod","detection_mod_lu"], function(values) {
            setAttrs({                            
                "detection_mod_ui": parseInt(values.detection_mod_lu)
            });
            if(parseInt(values.detection_mod) === 1){
                $20(".detection").addClass("advantaged-trait");
                $20(".detection").removeClass("disadvantaged-trait");
            }
            else if(parseInt(values.detection_mod) === -1){
                $20(".detection").addClass("disadvantaged-trait");
                $20(".detection").removeClass("advantaged-trait");
            }
        });
    });
    
    on("change:intuition_mod change:intuition_mod_lu sheet:opened", function() {  
        getAttrs(["intuition_mod","intuition_mod_lu"], function(values) {
            setAttrs({                            
                "intuition_mod_ui": parseInt(values.intuition_mod_lu)
            });
            $20(".intuition").removeClass("advantaged-trait");
            $20(".intuition").removeClass("disadvantaged-trait");
            if(parseInt(values.intuition_mod) === 1){
                $20(".intuition").addClass("advantaged-trait");
            }
            else if(parseInt(values.intuition_mod) === -1){
                $20(".intuition").addClass("disadvantaged-trait");
            }
        });
    });
    
    on("change:wilderness_mod change:wilderness_mod_lu sheet:opened", function() {  
        getAttrs(["wilderness_mod","wilderness_mod_lu"], function(values) {
            setAttrs({                            
                "wilderness_mod_ui": parseInt(values.wilderness_mod_lu)
            });
            $20(".wilderness").removeClass("advantaged-trait");
            $20(".wilderness").removeClass("disadvantaged-trait");
            if(parseInt(values.wilderness_mod) === 1){
                $20(".wilderness").addClass("advantaged-trait");
            }
            else if(parseInt(values.wilderness_mod) === -1){
                $20(".wilderness").addClass("disadvantaged-trait");
            }
        });
    });
    
    on("change:convince_mod change:convince_mod_lu sheet:opened", function() {  
        getAttrs(["convince_mod","convince_mod_lu"], function(values) {
            setAttrs({                            
                "convince_mod_ui": parseInt(values.convince_mod_lu)
            });
            $20(".convince").removeClass("advantaged-trait");
            $20(".convince").removeClass("disadvantaged-trait");
            if(parseInt(values.convince_mod) === 1){
                $20(".convince").addClass("advantaged-trait");
            }
            else if(parseInt(values.convince_mod) === -1){
                $20(".convince").addClass("disadvantaged-trait");
            }
        });
    });
    
    on("change:flair_mod change:flair_mod_lu sheet:opened", function() {  
        getAttrs(["flair_mod","flair_mod_lu"], function(values) {
            setAttrs({                            
                "flair_mod_ui": parseInt(values.flair_mod_lu)
            });
            $20(".flair").removeClass("advantaged-trait");
            $20(".flair").removeClass("disadvantaged-trait");
            if(parseInt(values.flair_mod) === 1){
                $20(".flair").addClass("advantaged-trait");
            }
            else if(parseInt(values.flair_mod) === -1){
                $20(".flair").addClass("disadvantaged-trait");
            }
        });
    });
    
    on("change:performance_mod change:performance_mod_lu sheet:opened", function() {  
        getAttrs(["performance_mod","performance_mod_lu"], function(values) {
            setAttrs({                            
                "performance_mod_ui": parseInt(values.performance_mod_lu)
            });
            $20(".performance").removeClass("advantaged-trait");
            $20(".performance").removeClass("disadvantaged-trait");
            if(parseInt(values.performance_mod) === 1){
                $20(".performance").addClass("advantaged-trait");
            }
            else if(parseInt(values.performance_mod) === -1){
                $20(".performance").addClass("disadvantaged-trait");
            }
        });
    });
    
    on("change:agility_mod change:agility_mod_lu sheet:opened", function() {  
        getAttrs(["agility_mod","agility_mod_lu"], function(values) {
            setAttrs({                            
                "agility_mod_ui": parseInt(values.agility_mod_lu)
            });
            $20(".agility").removeClass("advantaged-trait");
            $20(".agility").removeClass("disadvantaged-trait");
            if(parseInt(values.agility_mod) === 1){
                $20(".agility").addClass("advantaged-trait");
            }
            else if(parseInt(values.agility_mod) === -1){
                $20(".agility").addClass("disadvantaged-trait");
            }
        });
    });
    
    on("change:dexterity_mod change:dexterity_mod_lu sheet:opened", function() {  
        getAttrs(["dexterity_mod","dexterity_mod_lu"], function(values) {
            setAttrs({
                "dexterity_mod_ui": parseInt(values.dexterity_mod_lu)
            });
            $20(".dexterity").removeClass("advantaged-trait");
            $20(".dexterity").removeClass("disadvantaged-trait");
            if(parseInt(values.dexterity_mod) === 1){
                $20(".dexterity").addClass("advantaged-trait");
            }
            else if(parseInt(values.dexterity_mod) === -1){
                $20(".dexterity").addClass("disadvantaged-trait");
            }
        });
    });
    
    on("change:stealth_mod change:stealth_mod_lu sheet:opened", function() {  
        getAttrs(["stealth_mod","stealth_mod_lu"], function(values) {
            setAttrs({
                "stealth_mod_ui": parseInt(values.stealth_mod_lu)
            });
            $20(".stealth").removeClass("advantaged-trait");
            $20(".stealth").removeClass("disadvantaged-trait");
            if(parseInt(values.stealth_mod) === 1){
                $20(".stealth").addClass("advantaged-trait");
            }
            else if(parseInt(values.stealth_mod) === -1){
                $20(".stealth").addClass("disadvantaged-trait");
            }
        });
    });
    
    on("change:constitution_mod change:constitution_mod_lu sheet:opened", function() {  
        getAttrs(["constitution_mod","constitution_mod_lu"], function(values) {
            setAttrs({
                "constitution_mod_ui": parseInt(values.constitution_mod_lu)
            });
            $20(".constitution").removeClass("advantaged-trait");
            $20(".constitution").removeClass("disadvantaged-trait");
            if(parseInt(values.constitution_mod) === 1){
                $20(".constitution").addClass("advantaged-trait");
            }
            else if(parseInt(values.constitution_mod) === -1){
                $20(".constitution").addClass("disadvantaged-trait");
            }
        });
    });
    
    on("change:persistence_mod change:persistence_mod_lu sheet:opened", function() {  
        getAttrs(["persistence_mod","persistence_mod_lu"], function(values) {
            setAttrs({
                "persistence_mod_ui": parseInt(values.persistence_mod_lu)
            });
            $20(".persistence").removeClass("advantaged-trait");
            $20(".persistence").removeClass("disadvantaged-trait");
            if(parseInt(values.persistence_mod) === 1){
                $20(".persistence").addClass("advantaged-trait");
            }
            else if(parseInt(values.persistence_mod) === -1){
                $20(".persistence").addClass("disadvantaged-trait");
            }
        });
    });
    
    on("change:toughness_mod change:toughness_mod_lu sheet:opened", function() {  
        getAttrs(["toughness_mod","toughness_mod_lu"], function(values) {
            setAttrs({
                "toughness_mod_ui": parseInt(values.toughness_mod_lu)
            });
            $20(".toughness").removeClass("advantaged-trait");
            $20(".toughness").removeClass("disadvantaged-trait");
            if(parseInt(values.toughness_mod) === 1){
                $20(".toughness").addClass("advantaged-trait");
            }
            else if(parseInt(values.toughness_mod) === -1){
                $20(".toughness").addClass("disadvantaged-trait");
            }
        });
    });
    
    on("change:engineering_mod change:engineering_mod_lu sheet:opened", function() {  
        getAttrs(["engineering_mod","engineering_mod_lu"], function(values) {
            setAttrs({
                "engineering_mod_ui": parseInt(values.engineering_mod_lu)
            });
            $20(".engineering").removeClass("advantaged-trait");
            $20(".engineering").removeClass("disadvantaged-trait");
            if(parseInt(values.engineering_mod) === 1){
                $20(".engineering").addClass("advantaged-trait");
            }
            else if(parseInt(values.engineering_mod) === -1){
                $20(".engineering").addClass("disadvantaged-trait");
            }
        });
    });
    
    on("change:knowledge_mod change:knowledge_mod_lu sheet:opened", function() {  
        getAttrs(["knowledge_mod","knowledge_mod_lu"], function(values) {
            setAttrs({
                "knowledge_mod_ui": parseInt(values.knowledge_mod_lu)
            });
            $20(".knowledge").removeClass("advantaged-trait");
            $20(".knowledge").removeClass("disadvantaged-trait");
            if(parseInt(values.knowledge_mod) === 1){
                $20(".knowledge").addClass("advantaged-trait");
            }
            else if(parseInt(values.knowledge_mod) === -1){
                $20(".knowledge").addClass("disadvantaged-trait");
            }
        });
    });
    
    on("change:magic_mod change:magic_mod_lu sheet:opened", function() {  
        getAttrs(["magic_mod","magic_mod_lu"], function(values) {
            setAttrs({
                "magic_mod_ui": parseInt(values.magic_mod_lu)
            });
            $20(".magic").removeClass("advantaged-trait");
            $20(".magic").removeClass("disadvantaged-trait");
            if(parseInt(values.magic_mod) === 1){
                $20(".magic").addClass("advantaged-trait");
            }
            else if(parseInt(values.magic_mod) === -1){
                $20(".magic").addClass("disadvantaged-trait");
            }
        });
    });
    
    on("change:grip_mod change:grip_mod_lu sheet:opened", function() {  
        getAttrs(["grip_mod","grip_mod_lu"], function(values) {
            setAttrs({
                "grip_mod_ui": parseInt(values.grip_mod_lu)
            });
            $20(".grip").removeClass("advantaged-trait");
            $20(".grip").removeClass("disadvantaged-trait");
            if(parseInt(values.grip_mod) === 1){
                $20(".grip").addClass("advantaged-trait");
            }
            else if(parseInt(values.grip_mod) === -1){
                $20(".grip").addClass("disadvantaged-trait");
            }
        });
    });
    
    on("change:physicality_mod change:physicality_mod_lu sheet:opened", function() {  
        getAttrs(["physicality_mod","physicality_mod_lu"], function(values) {
            setAttrs({
                "physicality_mod_ui": parseInt(values.physicality_mod_lu)
            });
            $20(".physicality").removeClass("advantaged-trait");
            $20(".physicality").removeClass("disadvantaged-trait");
            if(parseInt(values.physicality_mod) === 1){
                $20(".physicality").addClass("advantaged-trait");
            }
            else if(parseInt(values.physicality_mod) === -1){
                $20(".physicality").addClass("disadvantaged-trait");
            }
        });
    });
    
    on("change:presence_mod change:presence_mod_lu sheet:opened", function() {  
        getAttrs(["presence_mod","presence_mod_lu"], function(values) {
            setAttrs({
                "presence_mod_ui": parseInt(values.presence_mod_lu)
            });
            $20(".presence").removeClass("advantaged-trait");
            $20(".presence").removeClass("disadvantaged-trait");
            if(parseInt(values.presence_mod) === 1){
                $20(".presence").addClass("advantaged-trait");
            }
            else if(parseInt(values.presence_mod) === -1){
                $20(".presence").addClass("disadvantaged-trait");
            }
        });
    });
    
    on("change:faith_mod change:faith_mod_lu sheet:opened", function() {  
        getAttrs(["faith_mod","faith_mod_lu"], function(values) {
            setAttrs({
                "faith_mod_ui": parseInt(values.faith_mod_lu)
            });
            $20(".faith").removeClass("advantaged-trait");
            $20(".faith").removeClass("disadvantaged-trait");
            if(parseInt(values.faith_mod) === 1){
                $20(".faith").addClass("advantaged-trait");
            }
            else if(parseInt(values.faith_mod) === -1){
                $20(".faith").addClass("disadvantaged-trait");
            }
        });
    });
    
    on("change:interaction_mod change:interaction_mod_lu sheet:opened", function() {  
        getAttrs(["interaction_mod","interaction_mod_lu"], function(values) {
            setAttrs({
                "interaction_mod_ui": parseInt(values.interaction_mod_lu)
            });
            $20(".interaction").removeClass("advantaged-trait");
            $20(".interaction").removeClass("disadvantaged-trait");
            if(parseInt(values.interaction_mod) === 1){
                $20(".interaction").addClass("advantaged-trait");
            }
            else if(parseInt(values.interaction_mod) === -1){
                $20(".interaction").addClass("disadvantaged-trait");
            }
        });
    });
    
    on("change:willpower_mod change:willpower_mod_lu sheet:opened", function() {  
        getAttrs(["willpower_mod","willpower_mod_lu"], function(values) {
            setAttrs({
                "willpower_mod_ui": parseInt(values.willpower_mod_lu)
            });
            $20(".willpower").removeClass("advantaged-trait");
            $20(".willpower").removeClass("disadvantaged-trait");
            if(parseInt(values.willpower_mod) === 1){
                $20(".willpower").addClass("advantaged-trait");
            }
            else if(parseInt(values.willpower_mod) === -1){
                $20(".willpower").addClass("disadvantaged-trait");
            }
        });
    });
    
    on("change:equipslots_lu change:advan_and_mod_loadout change:equipmod_0 change:equipmod_1 change:equipmod_2 change:equipmod_3 change:equipmod_4 sheet:opened", function() {
        getAttrs(["advan_and_mod_loadout"], function(loadout) {
	        let L = loadout.advan_and_mod_loadout;
            getAttrs(["equipslots_lu","equipmod_" + L], function(values) {
                let val = parseInt(values.equipslots_lu) + parseInt(values["equipmod_" + L]) + 5;
                setAttrs({
                    "equipslots_max": val
                });
            });
        });
    });
    
    on("change:rest_lu change:level change:advan_and_mod_loadout change:restmod_0 change:restmod_1 change:restmod_2 change:restmod_3 change:restmod_4 sheet:opened", function() {
        getAttrs(["advan_and_mod_loadout"], function(loadout) {
	        let L = loadout.advan_and_mod_loadout;
            getAttrs(["rest_lu","level","restmod_" + L], function(values) {
                let val = parseInt(values.rest_lu) + parseInt(values["restmod_" + L]) + Math.ceil(parseInt(values.level)/2);
                setAttrs({
                    "rest_max": val
                });
            });
        });
    });
    
    on("change:advan_and_mod_loadout change:deathmod_0 change:deathmod_1 change:deathmod_2 change:deathmod_3 change:deathmod_4 sheet:opened", function() {
        getAttrs(["advan_and_mod_loadout"], function(loadout) {
	        let L = loadout.advan_and_mod_loadout;
            getAttrs(["deathmod_" + L], function(values) {
                let val = parseInt(values["deathmod_" + L]) + 3;
                setAttrs({
                    "deathstacks_max": val
                });
            });
        });
    });
    
    on("change:reflex_check_lu change:advan_and_mod_loadout change:reflexmod_0 change:reflexmod_1 change:reflexmod_2 change:reflexmod_3 change:reflexmod_4 sheet:opened", function() {
        getAttrs(["advan_and_mod_loadout"], function(loadout) {
	        let L = loadout.advan_and_mod_loadout;
            getAttrs(["reflex_check_lu","reflexmod_" + L], function(values) {
                let val = parseInt(values["reflexmod_" + L]) + parseInt(values.reflex_check_lu);
                setAttrs({
                    "reflex_check": val
                });
            });
        });
    });
    
    on("change:strength_check_lu change:advan_and_mod_loadout change:strengthmod_0 change:strengthmod_1 change:strengthmod_2 change:strengthmod_3 change:strengthmod_4 sheet:opened", function() {
        getAttrs(["advan_and_mod_loadout"], function(loadout) {
	        let L = loadout.advan_and_mod_loadout;
            getAttrs(["strength_check_lu","strengthmod_" + L], function(values) {
                let val = parseInt(values["strengthmod_" + L]) + parseInt(values.strength_check_lu);
                setAttrs({
                    "strength_check": val
                });
            });
        });
    });
    
    on("change:toughness_check_lu change:advan_and_mod_loadout change:toughnessmod_0 change:toughnessmod_1 change:toughnessmod_2 change:toughnessmod_3 change:toughnessmod_4 sheet:opened", function() {
        getAttrs(["advan_and_mod_loadout"], function(loadout) {
	        let L = loadout.advan_and_mod_loadout;
            getAttrs(["toughness_check_lu","toughnessmod_" + L], function(values) {
                let val = parseInt(values["toughnessmod_" + L]) + parseInt(values.toughness_check_lu);
                setAttrs({
                    "toughness_check": val
                });
            });
        });
    });
    
    on("change:heart_check_lu change:advan_and_mod_loadout change:heartmod_0 change:heartmod_1 change:heartmod_2 change:heartmod_3 change:heartmod_4 sheet:opened", function() {
        getAttrs(["advan_and_mod_loadout"], function(loadout) {
	        let L = loadout.advan_and_mod_loadout;
            getAttrs(["heart_check_lu","heartmod_" + L], function(values) {
                let val = parseInt(values["heartmod_" + L]) + parseInt(values.heart_check_lu);
                setAttrs({
                    "heart_check": val
                });
            });
        });
    });
    
    on("change:mind_check_lu change:advan_and_mod_loadout change:mindmod_0 change:mindmod_1 change:mindmod_2 change:mindmod_3 change:mindmod_4 sheet:opened", function() {
        getAttrs(["advan_and_mod_loadout"], function(loadout) {
	        let L = loadout.advan_and_mod_loadout;
            getAttrs(["mind_check_lu","mindmod_" + L], function(values) {
                let val = parseInt(values["mindmod_" + L]) + parseInt(values.mind_check_lu);
                setAttrs({
                    "mind_check": val
                });
            });
        });
    });
    
    on("change:soul_check_lu change:advan_and_mod_loadout change:soulmod_0 change:soulmod_1 change:soulmod_2 change:soulmod_3 change:soulmod_4 sheet:opened", function() {
        getAttrs(["advan_and_mod_loadout"], function(loadout) {
	        let L = loadout.advan_and_mod_loadout;
            getAttrs(["soul_check_lu","soulmod_" + L], function(values) {
                let val = parseInt(values["soulmod_" + L]) + parseInt(values.soul_check_lu);
                setAttrs({
                    "soul_check": val
                });
            });
        });
    });
    
    on("change:melee_mod_lu sheet:opened", function() {  
        getAttrs(["melee_mod_lu"], function(values) {
            let val = parseInt(values.melee_mod_lu) + 3;
            setAttrs({
                "melee_mod": val
            });
        });
    });
    
    on("change:ranged_mod_lu sheet:opened", function() {  
        getAttrs(["ranged_mod_lu"], function(values) {
            let val = parseInt(values.ranged_mod_lu) + 3;
            setAttrs({
                "ranged_mod": val
            });
        });
    });
    
    on("change:thrown_mod_lu sheet:opened", function() {  
        getAttrs(["thrown_mod_lu"], function(values) {
            let val = parseInt(values.thrown_mod_lu) + 3;
            setAttrs({
                "thrown_mod": val
            });
        });
    });
    
    on("change:spell_mod_lu sheet:opened", function() {  
        getAttrs(["spell_mod_lu"], function(values) {
            let val = parseInt(values.spell_mod_lu) + 3;
            setAttrs({
                "spell_mod": val
            });
        });
    });
    
    on("change:block_mod_lu change:shield_mod change:shield_tolerance_apply sheet:opened", function() {  
        getAttrs(["block_mod_lu","shield_mod","shield_tolerance_apply"], function(values) {
            let val = parseInt(values.block_mod_lu) + parseInt(values.shield_mod) * (values.shield_tolerance_apply === "on");
            setAttrs({
                "block_mod": val
            });
        });
    });
    
    on("change:dodge_mod_lu change:shield_mod change:shield_tolerance_apply sheet:opened", function() {  
        getAttrs(["dodge_mod_lu","shield_mod","shield_tolerance_apply"], function(values) {
            let val = parseInt(values.dodge_mod_lu) + parseInt(values.shield_mod) * (values.shield_tolerance_apply === "on");
            setAttrs({
                "dodge_mod": val
            });
        });
    });
    
    on("change:parry_mod_lu change:shield_mod change:shield_tolerance_apply sheet:opened", function() {  
        getAttrs(["parry_mod_lu","shield_mod","shield_tolerance_apply"], function(values) {
            let val = parseInt(values.parry_mod_lu) + parseInt(values.shield_mod) * (values.shield_tolerance_apply === "on");
            setAttrs({
                "parry_mod": val
            });
        });
    });
    


      /*********/
     /* ROLLS */
    /*********/
    
    //Function to make a difficulty check
    const _makeDifficultyCheck = (difficultyCheck) => {
        getAttrs([difficultyCheck + "_check"], function(values) {
            /* rollType, rollName, bonus, advantage, attackName, damageType, damage, critDamage */
            _makeRoll("difficulty", difficultyCheck.charAt(0).toUpperCase() + difficultyCheck.slice(1) + " Check", parseInt(values[difficultyCheck + "_check"]), 0);
        });
    }
    on('clicked:reflexroll', (info) => {
        _makeDifficultyCheck("reflex");
    });
    on('clicked:strengthroll', (info) => {
        _makeDifficultyCheck("strength");
    });
    on('clicked:toughnessroll', (info) => {
        _makeDifficultyCheck("toughness");
    });
    on('clicked:heartroll', (info) => {
        _makeDifficultyCheck("heart");
    });
    on('clicked:mindroll', (info) => {
        _makeDifficultyCheck("mind");
    });
    on('clicked:soulroll', (info) => {
        _makeDifficultyCheck("soul");
    });
    
    //Function to make a trait roll
    const _makeTraitRoll = (traitName) => {
        getAttrs([traitName + "_mod", traitName + "_mod_lu"], function(values) {
            //Can't change the attribute names without deleting data out of the character sheets currently in-use
            //Thus, the workaround is to change the roll names manually here
            let fixedTraitName;
            if(traitName === "toughness"){
                fixedTraitName = "Durable";
            }
            else if(traitName === "willpower"){
                fixedTraitName = "Motivation";
            }
            else{
                fixedTraitName = traitName.charAt(0).toUpperCase() + traitName.slice(1);
            }
            /* rollType, rollName, bonus, advantage, attackName, damageType, damage, critDamage */
            _makeRoll("trait", fixedTraitName, values[traitName + "_mod_lu"], values[traitName + "_mod"]);
        })
    }
    on('clicked:detection', (info) => {
        _makeTraitRoll("detection");
    });
    on('clicked:intuition', (info) => {
        _makeTraitRoll("intuition");
    });
    on('clicked:wilderness', (info) => {
        _makeTraitRoll("wilderness");
    });
    on('clicked:convince', (info) => {
        _makeTraitRoll("convince");
    });
    on('clicked:flair', (info) => {
        _makeTraitRoll("flair");
    });
    on('clicked:performance', (info) => {
        _makeTraitRoll("performance");
    });
    on('clicked:agility', (info) => {
        _makeTraitRoll("agility");
    });
    on('clicked:dexterity', (info) => {
        _makeTraitRoll("dexterity");
    });
    on('clicked:stealth', (info) => {
        _makeTraitRoll("stealth");
    });
    on('clicked:constitution', (info) => {
        _makeTraitRoll("constitution");
    });
    on('clicked:persistence', (info) => {
        _makeTraitRoll("persistence");
    });
    on('clicked:toughness', (info) => {
        _makeTraitRoll("toughness");
    });
    on('clicked:engineering', (info) => {
        _makeTraitRoll("engineering");
    });
    on('clicked:knowledge', (info) => {
        _makeTraitRoll("knowledge");
    });
    on('clicked:magic', (info) => {
        _makeTraitRoll("magic");
    });
    on('clicked:grip', (info) => {
        _makeTraitRoll("grip");
    });
    on('clicked:physicality', (info) => {
        _makeTraitRoll("physicality");
    });
    on('clicked:presence', (info) => {
        _makeTraitRoll("presence");
    });
    on('clicked:faith', (info) => {
        _makeTraitRoll("faith");
    });
    on('clicked:interaction', (info) => {
        _makeTraitRoll("interaction");
    });
    on('clicked:willpower', (info) => {
        _makeTraitRoll("willpower");
    });
    
    //Function to make a defense roll
    const _makeDefenseRoll = (defenseType) => {
        getAttrs([defenseType + "_mod"], function(values) {
            /* rollType, rollName, bonus, advantage, attackName, damageType, damage, critDamage */
            _makeRoll("defense", defenseType.charAt(0).toUpperCase() + defenseType.slice(1), parseInt(values[defenseType + "_mod"]), 0);
        });
    }
    on('clicked:block', (info) => {
        _makeDefenseRoll("block");
    });
    on('clicked:dodge', (info) => {
        _makeDefenseRoll("dodge");
    });
    on('clicked:parry', (info) => {
        _makeDefenseRoll("parry");
    });
    
    //Function to make an attack roll
    const _makeAttackRoll = (attackType) => {
        getAttrs([attackType + "_mod", "repeating_attack_attack_name", "repeating_attack_attack_damage", "repeating_attack_attack_crit", "repeating_attack_attack_damagetypes", "repeating_attack_attack_range"], function(values) {
            /* rollType, rollName, bonus, advantage, attackName, damageType, damage, critDamage */
            _makeRoll("attack", values.repeating_attack_attack_name, values[attackType + "_mod"], 0, attackType.charAt(0).toUpperCase() + attackType.slice(1) + " " + values.repeating_attack_attack_range, values.repeating_attack_attack_damagetypes, values.repeating_attack_attack_damage, values.repeating_attack_attack_crit);
        })
    }
    on('clicked:repeating_attacks:melee', function() {
        _makeAttackRoll("melee");
    });
    on('clicked:repeating_attacks:ranged', function() {
        _makeAttackRoll("ranged");
    });
    on('clicked:repeating_attacks:thrown', function() {
        _makeAttackRoll("thrown");
    });
    on('clicked:repeating_attacks:spell', function() {
        _makeAttackRoll("spell");
    });
    
    

      /*************/
     /* MAKE ROLL */
    /*************/

    //Function to make a dice roll
	const _makeRoll = (rollType, rollName, bonus, advantage, attackName = null, damageType = null, damage = null, critDamage = null) => {
	    getAttrs(["advan_and_mod_loadout"], function(loadout) { //TPTODO put this into a variable
	        let L = loadout.advan_and_mod_loadout;
    	    getAttrs(["traitadvan_" + L, "traitmod_" + L, "attackadvan_" + L, "attackmod_" + L, "defenseadvan_" + L, "defensemod_" + L, "difficultyadvan_" + L, "difficultymod_" + L, "damageadvan_" + L, "damagemod_" + L, "critmin_" + L, "gm_roll", "character_name"], function(values) {
    	        
    	        //Get global values
                let hiddenRoll = parseInt(values.gm_roll);
    			let charName = values.character_name;
                let critMin = parseInt(values["critmin_" + L]);
                
                //We'll need to define these now even if we don't end up using them
                let damageText = "0"
                let critText = "0"
                
                if(rollType === "attack"){
                    damageText = `${damage}`;
                    critText = `${critDamage}`;
                    rollType = "1";
                    advantage = parseInt(advantage) + parseInt(values["attackadvan_" + L]);
                    bonus = parseInt(bonus) + parseInt(values["attackmod_" + L]);
                }
                else if(rollType === "trait"){
                    advantage = parseInt(advantage) + parseInt(values["traitadvan_" + L]);
                    bonus = parseInt(bonus) + parseInt(values["traitmod_" + L]);
                    rollType = "0"
                    if(rollName === "Intuition"){
                        hiddenRoll = 1;
                    }
                }
                else if(rollType === "difficulty"){
                    advantage = parseInt(advantage) + parseInt(values["difficultyadvan_" + L]);
                    bonus = parseInt(bonus) + parseInt(values["difficultymod_" + L]);
                    rollType = "0"
                }
                else if(rollType === "defense"){
                    advantage = parseInt(advantage) + parseInt(values["defenseadvan_" + L]);
                    bonus = parseInt(bonus) + parseInt(values["defensemod_" + L]);
                    rollType = "0"
                }
                else {
                    console.error("Unsupported roll type: " + rollType);
                }
    			
                console.log(bonus);
                
    			//determine dice roll
                let rollText;
                if(advantage >= 0){
                    //If player has advantage, take highest
                    rollText = `[[2 + ${advantage}]]d10kh2cs>21cf<0 + ${bonus}`;
                } else {
                    //If player has disadvanatage, take lowest
                    //I have no idea why "2 + ${advan} * -1" works, but "2 - ${advan}" doesn't
                    rollText = `[[2 + ${advantage} * -1]]d10kl2cs>21cf<0 + ${bonus}`;
                }
    
    			//TODO: Roll parameters::
    			//>Name of roll
    			//>Name of roll's instigator
    			//>Type of roll (whether should do damage, whether thrown or spellcast, etc.)
    			//>Bonus to the roll
    			//>Amount of advantage on the roll
    			//>Type of dice to roll
    			//>Damage required
    			//??Extra damage on a crit
    			//>Whether the roll should be hidden
    			//??Can you decompose rolls? Because if so, then it'd be great to show every roll immediately with advantage
    			//??In fact, whether the roll's internals should be shown at all is a legitimate question
    			
    			if(false){
    			    console.log(hiddenRoll);
        			console.log(rollName);
        			console.log(charName);
        			console.log(rollText);
        			console.log(attackName);
        			console.log(damageType);
        			console.log(damageText);
        			console.log(critDamage);
    			}
    			
    			
        	    startRoll(`&{template:r_template} {{hide=[[${hiddenRoll}d1]]}} {{name=${rollName}}} {{character=${charName}}} {{roll=[[${rollText}]]}} {{rolltype=[[${rollType}d1]]}} {{atktype=${attackName}}} {{dmgtype=${damageType}}} {{damage=[[${damageText}]]}} {{crit=${critDamage}}}`, (results) => {
                    let original = results.results.roll.result;
                    let computed = original - bonus;
                    
                    //Determines if the number is a crit
                    //computed cannot be directly compared to an integer using "==", so comparisons are instead made using ">"
                    if(computed > (rollType === "1" ? critMin - 1 : 19)){
                        computed  = original * 2;
                    }else if(computed < 3) {
                        computed = Math.ceil(original / 2);
                    } else {
                        computed = original;
                    }
        
                    finishRoll(
                        results.rollId,
                        {
                            roll: computed
                        }
                    );
                });
    	    });
	    });
	}*/