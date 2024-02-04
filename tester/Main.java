public class Main {
    public static void main(String[] args) {
        Creature char1 = new Creature(1, Creature.CreatureType.PLAYER);
        Creature char2 = new Creature(1, Creature.CreatureType.PLAYER);

        System.out.println(char1.makeAttackRoll());
        System.out.println(char2.makeDefenseRoll());
    }
}
