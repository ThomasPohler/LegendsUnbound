import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class Creature {

      /*********/
     /* STATS */
    /*********/

    public enum CreatureStats {
        /* BASIC */
        ID,
        NAME,
        LEVEL,

        ROUNDS_SURVIVED,
        POSITION_IN_ROUND,
        TURNS_STARTED,
        TURNS_ENDED,

        /* EQUIPMENT */
        ARMOR_WORN,
        LEFT_HAND_CONTAINS,
        RIGHT_HAND_CONTAINS,

        /* ROLLS */
        TOTAL_ROLLS_MADE,

        ROLLS_MADE_WITH_ADV,
        ROLLS_MADE_WITH_DISADV,

        COMPETING_ROLLS_MADE,
        REROLLS_MADE,
        REROLL_RATE,
        ATTACKS_REROLLED,
        ATTACK_REROLL_RATE,
        DEFENSES_REROLLED,
        DEFENSE_REROLL_RATE,
        LONGEST_REROLL_CHAIN,

        /* HEALTH */
        CURRENT_HEALTH,
        MAX_HEALTH,

        DAMAGE_TAKEN_BEFORE_TOLWEAK,
        DAMAGE_TAKEN_AFTER_TOLWEAK,
        TOLERANCES_REDUCED,
        WEAKNESSES_INCREASED,

        HEALING_RECEIVED,

        /* MANA */
        MANA_SPENT,

        /* ACTIONS */
        ATTACK_SUCCESS_RATE,
        ATTACKS_MADE,
        ATTACKS_MADE_PERCENT_MAIN,
        ATTACKS_MADE_PERCENT_TACT,
        ATTACKS_HIT,
        ATTACKS_HIT_PERCENT_MAIN,
        ATTACKS_HIT_PERCENT_TACT,
        ATTACKS_MISS,
        ATTACKS_MISS_PERCENT_MAIN,
        ATTACKS_MISS_PERCENT_TACT,

        DEFENSE_SUCCESS_RATE,
        DEFENSES_MADE,
        DEFENSES_SUCCEEDED,
        DEFENSES_FAILED,

        DAMAGE_DEALT,
        HEALING_GIVEN,
    }

    private final Map<CreatureStats, Object> stats;

    public Map<CreatureStats, Object> getStats(){
        return stats;
    }

    public void inc_DAMAGE_RECEIVED(int damageBeforeTolWeak, int damageAfterTolWeak, int toleranceAmount, int weaknessAmount){
        if(stats.containsValue(CreatureStats.DAMAGE_TAKEN_BEFORE_TOLWEAK)){ //If contains any, will contain all

            int total = (int) stats.get(CreatureStats.DAMAGE_TAKEN_BEFORE_TOLWEAK) + damageBeforeTolWeak;
            stats.put(CreatureStats.DAMAGE_TAKEN_BEFORE_TOLWEAK, total);

            total = (int) stats.get(CreatureStats.DAMAGE_TAKEN_AFTER_TOLWEAK) + damageAfterTolWeak;
            stats.put(CreatureStats.DAMAGE_TAKEN_AFTER_TOLWEAK, total);

            total = (int) stats.get(CreatureStats.TOLERANCES_REDUCED) + toleranceAmount;
            stats.put(CreatureStats.TOLERANCES_REDUCED, total);

            total = (int) stats.get(CreatureStats.WEAKNESSES_INCREASED) + weaknessAmount;
            stats.put(CreatureStats.WEAKNESSES_INCREASED, weaknessAmount);

        } else {
            stats.put(CreatureStats.DAMAGE_TAKEN_BEFORE_TOLWEAK, damageBeforeTolWeak);
            stats.put(CreatureStats.DAMAGE_TAKEN_AFTER_TOLWEAK, damageAfterTolWeak);
        }
    }


    public void inc_HEALING_RECEIVED(int healing){
        if(stats.containsValue(CreatureStats.HEALING_RECEIVED)){
            int total = (int) stats.get(CreatureStats.HEALING_RECEIVED) + healing;
            stats.put(CreatureStats.HEALING_RECEIVED, total);
        } else {
            stats.put(CreatureStats.HEALING_RECEIVED, healing);
        }
    }


    public void inc_DAMAGE_DEALT(int damage){
        if(stats.containsValue(CreatureStats.DAMAGE_DEALT)){
            int total = (int) stats.get(CreatureStats.DAMAGE_DEALT) + damage;
            stats.put(CreatureStats.DAMAGE_DEALT, total);
        } else {
            stats.put(CreatureStats.DAMAGE_DEALT, damage);
        }
    }

    public void inc_HEALING_GIVEN(int healing){
        if(stats.containsValue(CreatureStats.HEALING_GIVEN)){
            int total = (int) stats.get(CreatureStats.HEALING_GIVEN) + healing;
            stats.put(CreatureStats.HEALING_GIVEN, total);
        } else {
            stats.put(CreatureStats.HEALING_GIVEN, healing);
        }
    }





      /*********/
     /* ENUMS */
    /*********/

    public enum CreatureType {
        PLAYER,
        FODDER,
        ELITE,
        BOSS,
        DUMMY
    }

    public enum HealthState {
        HEALTHY,
        DYING,
        DEAD
    }





      /*************/
     /* VARIABLES */
    /*************/
    
    private final int level;
    private final CreatureType creatureType;

    private int healthCurrent;
    private int healthMax;
    private HealthState healthState;

    private int manaCurrent;
    private int manaMax;

    private int actionsMain;
    private int actionsTactical;

    private int critMin_attack;
    private int critMin_defense;





      /*********************/
     /* GETTERS / SETTERS */
    /*********************/

    /* FINAL VARIABLES */

    public int getLevel(){
        return level;
    }

    public CreatureType getCreatureType(){
        return creatureType;
    }


    /* HEALTH */

    public int getHealthCurrent(){
        return healthCurrent;
    }
    private void setHealthCurrent(int newHealthCurrent){
        if(newHealthCurrent <= 0){
            Log.error("Creature.setHealthCurrent(newHealthCurrent = " + newHealthCurrent + ")");
        }
        if(newHealthCurrent > getHealthMax()){
            Log.error("Creature.setHealthCurrent(newHealthCurrent = " + newHealthCurrent + "), healthMax = " + getHealthMax());
        }
        healthCurrent = newHealthCurrent;
    }

    public int getHealthMax(){
        return healthMax;
    }
    private void setHealthMax(int newHealthMax){
        if(newHealthMax <= 0){
            Log.error("Creature.setHealthMax(newHealthMax = " + healthMax + ")");
        }
        int healthDiff = newHealthMax - healthMax;
        healthMax = newHealthMax;
        if(healthDiff >= 0){ // If our new max health is larger than the old max health
            setHealthCurrent(getHealthCurrent() + healthDiff);
        } else {
            if(getHealthCurrent() > newHealthMax){
                setHealthCurrent(newHealthMax);
            }
        }
    }

    public HealthState getHealthState(){
        return healthState;
    }
    private void setHealthState(HealthState newHealthState){
        if((newHealthState == HealthState.DYING || newHealthState == HealthState.DEAD) && getHealthCurrent() > 0){
            Log.error("Creature.setHealthState(newHealthState = " + newHealthState + ")");
        }
        healthState = newHealthState;
    }


    /* MANA */

    public int getManaCurrent(){
        return manaCurrent;
    }
    private void setManaCurrent(int newManaCurrent){
        if(newManaCurrent <= 0){
            Log.error("Creature.setManaCurrent(newManaCurrent = " + newManaCurrent + ")");
        }
        if(newManaCurrent > getManaMax()){
            Log.error("Creature.setManaCurrent(newManaCurrent = " + newManaCurrent + "), manaMax = " + getManaMax());
        }
        manaCurrent = newManaCurrent;
    }

    public int getManaMax(){
        return manaMax;
    }
    private void setManaMax(int newManaMax){
        if(newManaMax <= 0){
            Log.error("Creature.setManaMax(newManaMax = " + newManaMax + ")");
        }
        int manaDiff = newManaMax - manaMax;
        manaMax = newManaMax;
        if(manaDiff >= 0){ // If our new max mana is larger than the old max mana
            setManaCurrent(getManaCurrent() + manaDiff);
        } else {
            if(getManaCurrent() > newManaMax){
                setManaCurrent(newManaMax);
            }
        }
    }

    /* ACTIONS */

    public int getRemainingMainActions(){
        return actionsMain;
    }
    private void setMainActions(int newActionsMain){
        if(newActionsMain < 0){
            Log.error("Creature.setMainActions(newActionsMain = " + newActionsMain + ")");
        }
        if(newActionsMain > getMaxMainActions()){
            Log.error("Creature.setMainActions(newActionsMain = " + newActionsMain + "), maxMainActions = " + getMaxMainActions());
        }
        actionsMain = newActionsMain;
    }
    public int getMaxMainActions(){
        switch (getCreatureType()) {
            case PLAYER: return 2;
            case FODDER: return 1;
            case ELITE: return 2;
            case BOSS: return 4;
            case DUMMY: return 0;
            default: return -1;
        }
    }

    public int getRemainingTacticalActions(){
        return actionsTactical;
    }
    private void setTacticalActions(int newActionsTactical){
        if(newActionsTactical < 0){
            Log.error("Creature.setTacticalActions(newActionsTactical = " + newActionsTactical + ")");
        }
        if(newActionsTactical > getMaxMainActions()){
            Log.error("Creature.setTacticalActions(newActionsTactical = " + newActionsTactical + "), maxTacticalActions = " + getMaxTacticalActions());
        }
        actionsTactical = newActionsTactical;
    }
    public int getMaxTacticalActions(){
        switch (getCreatureType()) {
            case PLAYER: return 2;
            case FODDER: return 0;
            case ELITE: return 0;
            case BOSS: return 0;
            case DUMMY: return 0;
            default: return -1;
        }
    }


    /* CRIT MINIMUMS */

    public int getAttackCritMinimum(){
        return critMin_attack;
    }
    private void setAttackCritMinimum(int newCritMin_attack){
        if(newCritMin_attack < 17 || newCritMin_attack > 20){
            Log.error("Creature.setAttackCritMinimum(newCritMin_attack = " + newCritMin_attack + ")");
        }
        critMin_attack = newCritMin_attack;
    }

    public int getDefenseCritMinimum(){
        return critMin_defense;
    }
    private void setDefenseCritMinimum(int newCritMin_defense){
        if(newCritMin_defense < 17 || newCritMin_defense > 20){
            Log.error("Creature.setDefenseCritMinimum(newCritMin_defense = " + newCritMin_defense + ")");
        }
        critMin_defense = newCritMin_defense;
    }





      /****************/
     /* CONSTRUCTORS */
    /****************/
    
    public Creature(int level, CreatureType creatureType){
        this.level = level;
        this.creatureType = creatureType;
        this.stats = new HashMap<>();

        setHealthMax(4 * level);
        setHealthState(HealthState.HEALTHY);
        setManaMax(4 * level);

        setMainActions(getMaxMainActions());
        setTacticalActions(getMaxTacticalActions());

        setAttackCritMinimum(20);
        setDefenseCritMinimum(20);
    }





      /***********/
     /* METHODS */
    /***********/


    /* HEALTH-BASED METHODS */

    public int heal(int healingAmount){
        if(healingAmount <= 0){
            Log.error("Creature.heal(healingAmount = " + healingAmount + ")");
        }
        if(getHealthState() == HealthState.DEAD){
            Log.error("Creature.heal() failed: creature is dead");
        }
        int potentialHealth = getHealthCurrent() + healingAmount;
        if(potentialHealth > getHealthMax()){
            potentialHealth = getHealthMax();
        }
        if(potentialHealth > 0 && getHealthState() == HealthState.DYING){
            setHealthState(HealthState.HEALTHY);
        }
        setHealthCurrent(potentialHealth);
        return getHealthCurrent();
    }

    //TODO add tolerances and death stacks
    public int damage(int damageAmount){
        if(damageAmount <= 0){
            Log.error("Creature.damage(damageAmount = " + damageAmount + ")");
        }
        setHealthCurrent(getHealthCurrent() - damageAmount);
        if(getHealthCurrent() <= 0){
            if(getCreatureType() == CreatureType.PLAYER){
                setHealthState(HealthState.DYING);
            } else {
                setHealthState(HealthState.DEAD);
            }
        }
        return getHealthCurrent();
    }


    /* ACTION ECONOMY */

    public void actionReset(){
        setMainActions(getMaxMainActions());
        setTacticalActions(getMaxTacticalActions());
    }


    /* PERFORM ACTIONS */

    public int makeAttackRoll(){
        //TODO: give proper arguments
        return makeGenericRoll(0, 3, getAttackCritMinimum());
    }

    public int makeDefenseRoll(){
        //TODO: give proper arguments
        return makeGenericRoll(0, 0, getDefenseCritMinimum());
    }

    private int makeGenericRoll(int advantage, int modifier, int critMinimum){
        int rollVal = 0;

        if(advantage == 0){ // If no (dis)advantage, just roll 2d10
            rollVal = Rules.roll(2, 10);

        } else {
            /* If we're rolling with (dis)advantage, create an array of appropriate size,
             * fill it with d10 rolls, sort it, and then pick the highest/lowest two */
            int[] d10Array = new int[Math.abs(advantage) + 2];
			for(int i = 0; i < d10Array.length; i++) {
				d10Array[i] = Rules.roll(1, 10);
			}
			Arrays.sort(d10Array);

			//If disadvantage, take smallest two dice
			if(advantage < 0) {
				rollVal = d10Array[0] + d10Array[1];
			} else{ //If advantage, take highest two dice
				rollVal = d10Array[Math.abs(advantage)] + d10Array[Math.abs(advantage) + 1];
			}
        }

        if(rollVal < 2 || rollVal > 20){
            Log.error("Creature.makeGenericRoll() failed: rollVal = " + rollVal);
        }

        //TODO: move this to its own function and unit test
        int result = rollVal + modifier;
		
		//Calculate crits
		if(rollVal >= critMinimum) {
            result *= 2;
		}
		else if(rollVal == 2) {
			result = Rules.divUp(result, 2);
		}
		
		return result;
    }
}