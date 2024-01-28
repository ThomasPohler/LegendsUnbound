public class Creature {
      /*********/
     /* ENUMS */
    /*********/
    public enum CreatureType {
        PLAYER,
        FODDER,
        ELITE,
        BOSS
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

    private int healthCurrent;
    private int healthMax;

    private int manaCurrent;
    private int manaMax;

      /*********************/
     /* GETTERS / SETTERS */
    /*********************/
    public int getLevel(){
        return level;
    }

    public int getHealthCurrent(){
        return healthCurrent;
    }
    private void setHealthCurrent(int healthCurrent){
        if(healthCurrent <= 0){
            throw new IllegalArgumentException("Creature.setLevel(level = " + healthCurrent + ")");
        }
        this.healthCurrent = healthCurrent;
    }

    /* */
    public Creature(int level){
        this.level = level;
    }
}