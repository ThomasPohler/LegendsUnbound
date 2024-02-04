import java.util.ArrayList;
import java.util.Random;

public class Rules {

    public static final Random rand = new Random();

    public enum DamageTypes {
        ACID,
        COLD,
        DEATH,
        ELECTRIC,
        FIRE,
        LUMINOUS,
        PHYSICAL,
        POISON,
        PSYCHIC,
        SONIC,
        TRUE,
        RANDOM
    }



      /***********/
     /* METHODS */
    /***********/

    /* Divides the first number by the second number, rounding up.
	 * This is common enough for a full method to be practical. */
	public static int divUp(int divident, int divisor) {
		return (int) Math.ceil(((double) divident)/((double) divisor));
	}

    
    /* Makes an XdY roll, where X is "numberOfDice" and Y is "sizeOfDice" */
    public static int roll(int numberOfDice, int sizeOfDice){
        int result = 0;
  
        for(int i = 0; i < numberOfDice; i++){
           result += rand.nextInt(sizeOfDice) + 1;
        }
        
        return result;
     }


     /* Gets an array of all the damage types */
     public static ArrayList<DamageTypes> getDamageTypes() {
        ArrayList<DamageTypes> result = new ArrayList<DamageTypes>();
        for (DamageTypes type : DamageTypes.values()){
            result.add(type);
        }
        result.remove(DamageTypes.RANDOM);
        return result;
     }

     /* Gets an array of all the damage types except for true damage */
     public static ArrayList<DamageTypes> getNonTrueDamageTypes() {
        ArrayList<DamageTypes> result = getDamageTypes();
        result.remove(DamageTypes.TRUE);
        return result;
     }
}
