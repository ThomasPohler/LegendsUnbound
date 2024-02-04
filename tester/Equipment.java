import java.util.ArrayList;
import java.util.Collections;

public class Equipment {

      /*********/
     /* ENUMS */
    /*********/
    
    public enum EquipmentType {
        WEAPON,
        ARMOR,
        SHIELD
    }

    public enum EquipmentSize {
        LIGHT,
        MEDIUM,
        HEAVY
    }

    public enum MaterialRarity {
        COMMON,
        RARE,
        UNIQUE,
        EPIC,
        LEGENDARY
    }





      /******************/
     /* STATIC METHODS */
    /******************/


    /* GENERATE RANDOM EQUIPMENT */

    public static Equipment genRan_commonArmor(){
        return new Equipment(EquipmentType.ARMOR, getRandomEquipmentSize(), MaterialRarity.COMMON, Rules.DamageTypes.RANDOM, Rules.DamageTypes.RANDOM);
    }

    public static Equipment genRan_commonShield(){
        return new Equipment(EquipmentType.ARMOR, getRandomEquipmentSize(), MaterialRarity.COMMON, Rules.DamageTypes.RANDOM, Rules.DamageTypes.RANDOM);
    }

    public static EquipmentSize getRandomEquipmentSize(){
        EquipmentSize result;
        switch(Rules.roll(1, 3)){
            case 1:
                result = EquipmentSize.LIGHT; break;
            case 2:
                result = EquipmentSize.MEDIUM; break;
            case 3:
                result = EquipmentSize.HEAVY; break;
            default: throw new IllegalStateException("Rules.roll returned invalid value");
        }
        return result;
    }





      /*************/
     /* VARIABLES */
    /*************/

    private final EquipmentType equipmentType;
    private final EquipmentSize equipmentSize;
    private final MaterialRarity materialRarity;

    private final Rules.DamageTypes toleranceType;
    private final int toleranceAmount;
    private final Rules.DamageTypes weaknessType;
    private final int weaknessAmount;





      /*********************/
     /* GETTERS / SETTERS */
    /*********************/

    public EquipmentType getEquipmentType(){
        return equipmentType;
    }

    public EquipmentSize getEquipmentSize(){
        return equipmentSize;
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





      /****************/
     /* CONSTRUCTORS */
    /****************/


    /* ARMOR/SHIELD CONSTRUCTOR */

    public Equipment(EquipmentType equipmentType, EquipmentSize equipmentSize, MaterialRarity materialRarity, Rules.DamageTypes toleranceType, Rules.DamageTypes weaknessType){
        if(equipmentType != EquipmentType.ARMOR && equipmentType != EquipmentType.SHIELD){
            throw new IllegalArgumentException("Equipment armor/shield constructor passed = " + equipmentType);
        }

        this.equipmentType = equipmentType;

        this.equipmentSize = equipmentSize;
        this.materialRarity = materialRarity;

        switch (equipmentSize) {
            case LIGHT:
                switch (materialRarity) {
                    case COMMON:
                        toleranceAmount = 0;
                        weaknessAmount = 3;
                        break;
                    default: throw new IllegalArgumentException("Equipment armor/shield constructor passed material rarity that hasn't been coded yet: " + materialRarity);
                }
                break;
            
            case MEDIUM:
                switch (materialRarity) {
                    case COMMON:
                        toleranceAmount = 1;
                        weaknessAmount = 2;
                        break;
                    default: throw new IllegalArgumentException("Equipment armor/shield constructor passed material rarity that hasn't been coded yet: " + materialRarity);
                }
                break;
            
            case HEAVY:
                switch (materialRarity) {
                    case COMMON:
                        toleranceAmount = 1;
                        weaknessAmount = 0;
                        break;
                    default: throw new IllegalArgumentException("Equipment armor/shield constructor passed material rarity that hasn't been coded yet: " + materialRarity);
                }
                break;

            default: throw new IllegalArgumentException("Equipment armor/shield constructor passed invalid equipment size: " + equipmentSize);
        }

        /* Gets two random non-true damage types for the tolerance/weaknesses */
        ArrayList<Rules.DamageTypes> damageTypeArray = new ArrayList<Rules.DamageTypes>();
        if(toleranceType != Rules.DamageTypes.RANDOM || weaknessType != Rules.DamageTypes.RANDOM){
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
