import java.util.ArrayList;
import java.util.Collections;

public class Equipment {


      /*********/
     /* ENUMS */
    /*********/
    
    public enum EquipmentDifficulty {
        EFFORTLESS,
        EASY,
        TEDIOUS,
        HARD,
        CHALLENGING
    }

    public enum MaterialRarity {
        COMMON,
        RARE,
        UNIQUE,
        EPIC,
        LEGENDARY
    }





      /*********************/
     /* ARMOR AND SHIELDS */
    /*********************/
    
    public static class ArmorAndShield {

        /* ENUMS */

        public enum ArmorAndShieldSize {
            LIGHT,
            MEDIUM,
            HEAVY
        }


        /* STATIC METHODS */

        public static ArmorAndShieldSize getRandomSize(){
            switch(Rules.roll(1, 3)){
                case 1: return ArmorAndShieldSize.LIGHT;
                case 2: return ArmorAndShieldSize.MEDIUM;
                case 3: return ArmorAndShieldSize.HEAVY;
                default: Log.error("Rules.roll returned invalid value"); throw new IllegalStateException();
            }
        }


        /* VARIABLES */

        private final boolean isShield;

        private final ArmorAndShieldSize armorAndShieldSize;
        private final EquipmentDifficulty equipmentDifficulty;
        private final MaterialRarity materialRarity;

        private final Rules.DamageTypes toleranceType;
        private final int toleranceAmount;
        private final Rules.DamageTypes weaknessType;
        private final int weaknessAmount;

        private final int weight;


        /* GETTERS / SETTERS */

        public boolean isShield(){
            return isShield;
        }
    
        public ArmorAndShieldSize getSize(){
            return armorAndShieldSize;
        }
    
        public EquipmentDifficulty getDifficulty(){
            return equipmentDifficulty;
        }
    
        public MaterialRarity getMaterialRarity(){
            return materialRarity;
        }
    
        public Rules.DamageTypes getToleranceType(){
            return toleranceType;
        }
    
        public int getToleranceAmount(){
            return toleranceAmount;
        }
    
        public Rules.DamageTypes getWeaknessType(){
            return weaknessType;
        }
    
        public int getWeaknessAmount(){
            return weaknessAmount;
        }

        public int getWeight(){
            return weight;
        }


        /* CONSTRUCTOR */
        public ArmorAndShield(boolean isShield, ArmorAndShieldSize armorAndShieldSize, MaterialRarity materialRarity, Rules.DamageTypes toleranceType, Rules.DamageTypes weaknessType){
            this.isShield = isShield;
    
            this.armorAndShieldSize = armorAndShieldSize;
            this.materialRarity = materialRarity;

            //TODO add the other material rarities
            switch (armorAndShieldSize) {
                case LIGHT:
                    equipmentDifficulty = EquipmentDifficulty.TEDIOUS;
                    weight = 1;
                    switch (materialRarity) {
                        case COMMON:
                            toleranceAmount = 0;
                            weaknessAmount = 3;
                            break;
                        default: Log.error("ArmorAndShield.constructor: passed materialRarity that hasn't been coded yet: " + materialRarity); throw new IllegalStateException();
                    }
                    break;
                
                case MEDIUM:
                    equipmentDifficulty = EquipmentDifficulty.HARD;
                    weight = 2;
                    switch (materialRarity) {
                        case COMMON:
                            toleranceAmount = 1;
                            weaknessAmount = 2;
                            break;
                        default: Log.error("ArmorAndShield.constructor: passed materialRarity that hasn't been coded yet: " + materialRarity); throw new IllegalStateException();
                    }
                    break;
                
                case HEAVY:
                    equipmentDifficulty = EquipmentDifficulty.CHALLENGING;
                    weight = 3;
                    switch (materialRarity) {
                        case COMMON:
                            toleranceAmount = 1;
                            weaknessAmount = 0;
                            break;
                        default: Log.error("ArmorAndShield.constructor: passed materialRarity that hasn't been coded yet: " + materialRarity); throw new IllegalStateException();
                    }
                    break;
    
                default:
                    Log.error("ArmorAndShield.constructor: passed invalid armorAndShieldSize: " + armorAndShieldSize); throw new IllegalStateException();
            }
    
            ArrayList<Rules.DamageTypes> damageTypeArray = new ArrayList<Rules.DamageTypes>();
            if(toleranceType == Rules.DamageTypes.RANDOM || weaknessType == Rules.DamageTypes.RANDOM){
                damageTypeArray = Rules.getNonTrueDamageTypes();
                Collections.shuffle(damageTypeArray);
            }
            if(toleranceType != Rules.DamageTypes.RANDOM){
                this.toleranceType = toleranceType;
            } else {
                this.toleranceType = damageTypeArray.get(0);
            }
            if(weaknessType != Rules.DamageTypes.RANDOM){
                this.weaknessType = weaknessType;
            } else {
                this.weaknessType = damageTypeArray.get(1);
            }
        }
    }





      /***********/
     /* WEAPONS */
    /***********/
    
    public static class Weapon {

        /* ENUMS */

        public enum WeaponType {
            DUMMY,
            CLUB,
            MACE,
            SCIMITAR
        }

        public enum WeaponRange {
            MELEE,
            RANGED,
            THROWN,
            SPELL,
            SPECIAL
        }

        public enum Handedness {
            ONE_HANDED,
            TWO_HANDED,
            VERSATILE
        }

        public enum ReloadState {
            LOADED,
            UNLOADED,
            NOT_LOADABLE
        }


        /* STATIC METHODS */

        // Gets a random non-dummy weapon type
        public static WeaponType getRandomWeaponType(){
            return WeaponType.values()[Rules.roll(1,WeaponType.values().length - 1)];
        }


        /* VARIABLES */

        private final WeaponType weaponType;
        private final Handedness handedness;
        private ReloadState reloadState;
        private boolean isCharged;

        private final int baseDamage;
        private final EquipmentDifficulty equipmentDifficulty;
        private final MaterialRarity materialRarity;
        private final Rules.DamageTypes damageType;
        
        private final int meleeRange;
        private final int rangedRange;
        private final int thrownRange;
        private final boolean isSpellcasting;

        private final int weight;


        /* GETTERS / SETTERS */

        public WeaponType getType(){
            return weaponType;
        }
    
        public Handedness getHandedness(){
            return handedness;
        }

        public ReloadState getReloadState(){
            return reloadState;
        }
        private void setReloadState(ReloadState newReloadState){
            if(newReloadState == ReloadState.NOT_LOADABLE && (getReloadState() == ReloadState.LOADED || getReloadState() == ReloadState.UNLOADED)){
                Log.error("Weapon.setReloadState: trying to make " + getReloadState() + " weapon into NOT_LOADABLE");
            }
            if((newReloadState == ReloadState.LOADED || newReloadState == ReloadState.UNLOADED) && getReloadState() == ReloadState.NOT_LOADABLE){
                Log.error("Weapon.setReloadState: trying to make NOT_LOADABLE weapon into " + getReloadState());
            }
            reloadState = newReloadState;
        }

        public boolean isCharged(){
            return isCharged;
        }
        private void setCharge(boolean newCharge){
            isCharged = newCharge;
        }

        public int getDamage(){
            return baseDamage;
        }

        public EquipmentDifficulty getDifficulty(){
            return equipmentDifficulty;
        }
    
        public MaterialRarity getMaterialRarity(){
            return materialRarity;
        }
    
        public Rules.DamageTypes getDamageType(){
            return damageType;
        }

        public int getMeleeRange(){
            return meleeRange;
        }

        public int getRangedRange(){
            return rangedRange;
        }

        public int getThrownRange(){
            return thrownRange;
        }

        public boolean isSpellcasting(){
            return isSpellcasting;
        }

        public int getWeight(){
            return weight;
        }


        /* CONSTRUCTOR */

        public Weapon(WeaponType weaponType, MaterialRarity materialRarity, Rules.DamageTypes damageType){
            this.weaponType = weaponType;
            this.materialRarity = materialRarity;
            this.isCharged = false;

            switch (materialRarity) {
                case COMMON: baseDamage = 2; break;
                case RARE: baseDamage = 4; break;
                default: Log.error("Weapon.constructor: passed material rarity that hasn't been coded yet: " + materialRarity); throw new IllegalStateException();
            }

            WeaponRange weaponRange;
            switch (weaponType) {
                case CLUB:
                    handedness = Handedness.ONE_HANDED;
                    equipmentDifficulty = EquipmentDifficulty.EASY;
                    weaponRange = WeaponRange.MELEE;
                    weight = 1;
                    break;

                case MACE:
                case SCIMITAR:
                    handedness = Handedness.VERSATILE;
                    equipmentDifficulty = EquipmentDifficulty.EASY;
                    weaponRange = WeaponRange.MELEE;
                    weight = 1;
                    break;
                    
                default:
                    Log.error("Weapon.constructor: passed invalid weapon type: " + weaponType); throw new IllegalStateException();
            }

            switch (weaponRange) {
                case MELEE:
                    reloadState = ReloadState.NOT_LOADABLE;
                    meleeRange = 1;
                    rangedRange = 0;
                    thrownRange = 5;
                    isSpellcasting = false;
                    break;

                case RANGED:
                    reloadState = ReloadState.LOADED;
                    meleeRange = 0;
                    rangedRange = 10;
                    thrownRange = 0;
                    isSpellcasting = false;
                    break;

                case THROWN:
                    reloadState = ReloadState.NOT_LOADABLE;
                    meleeRange = 0;
                    rangedRange = 0;
                    thrownRange = 5;
                    isSpellcasting = false;
                    break;

                case SPELL:
                    reloadState = ReloadState.NOT_LOADABLE;
                    meleeRange = 1;
                    rangedRange = 0;
                    thrownRange = 0;
                    isSpellcasting = true;
                    break;
                    
                default:
                    Log.error("Weapon.constructor: passed invalid weapon type: " + weaponType); throw new IllegalStateException();
            }
    
            if(damageType == Rules.DamageTypes.RANDOM){
                ArrayList<Rules.DamageTypes> damageTypeArray = Rules.getNonTrueDamageTypes();
                Collections.shuffle(damageTypeArray);
                this.damageType = damageTypeArray.get(0);
            } else {
                this.damageType = damageType;
            }
        }

        /* METHODS */

        public void reload(){
            if (getReloadState() == ReloadState.UNLOADED) {
                setReloadState(ReloadState.LOADED);
            } else {
                Log.error("Weapon.reload: trying to load weapon that is " + getReloadState());
            }
        }

        public void charge(){
            if (isCharged() == true) {
                Log.error("Weapon.charge: trying to charge weapon that is already charged");
            } else {
                setCharge(true);
            }
        }

        public void performAttack(WeaponRange attackRange, boolean removeCharge){
            // Error checking
            if (attackRange == WeaponRange.MELEE && getMeleeRange() <= 0) {
                Log.error("Weapon.performAttack: attempting to make melee attack with a melee range of " + getMeleeRange());
            }
            else if (attackRange == WeaponRange.RANGED && getRangedRange() <= 0) {
                Log.error("Weapon.performAttack: attempting to make ranged attack with a ranged range of " + getRangedRange());
            }
            else if (attackRange == WeaponRange.THROWN && getThrownRange() <= 0) {
                Log.error("Weapon.performAttack: attempting to make thrown attack with a thrown range of " + getThrownRange());
            }
            else if (attackRange == WeaponRange.SPELL && isSpellcasting() != true) {
                Log.error("Weapon.performAttack: attempting to make spell attack with a non-spellcasting weapon");
            }

            // Unload weapon
            if (attackRange == WeaponRange.RANGED && getReloadState() == ReloadState.UNLOADED) {
                Log.error("Weapon.performAttack: attempting to make ranged attack with unloaded weapon");
            }
            else if (attackRange == WeaponRange.RANGED && getReloadState() == ReloadState.NOT_LOADABLE) {
                Log.error("Weapon.performAttack: attempting to make ranged attack with a weapon that is not loadable");
            }
            else if (attackRange == WeaponRange.RANGED && getReloadState() == ReloadState.LOADED) {
                setReloadState(ReloadState.UNLOADED);
            }

            // Handle charge
            if (removeCharge && isCharged()) {
                setCharge(false);
            }
            else if (removeCharge && !isCharged()) {
                Log.error("Weapon.performAttack: used weapon charge when weapon was uncharged");
            }
        }
    }





      /******************/
     /* STATIC METHODS */
    /******************/


    /* GENERATE RANDOM EQUIPMENT */

    public static ArmorAndShield genRan_commonArmor(){
        return new ArmorAndShield(false, ArmorAndShield.getRandomSize(), MaterialRarity.COMMON, Rules.DamageTypes.RANDOM, Rules.DamageTypes.RANDOM);
    }

    public static ArmorAndShield genRan_commonShield(){
        return new ArmorAndShield(true, ArmorAndShield.getRandomSize(), MaterialRarity.COMMON, Rules.DamageTypes.RANDOM, Rules.DamageTypes.RANDOM);
    }

    public static Weapon genRan_commonDummyWeapon(){
        return new Weapon(Weapon.WeaponType.DUMMY, MaterialRarity.COMMON, Rules.DamageTypes.RANDOM);
    }
}
