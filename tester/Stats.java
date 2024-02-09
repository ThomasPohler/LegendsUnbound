public class Stats {

    private class CreatureStats {
        int healingReceived;
        int damageReceived;

        CreatureStats() {
            healingReceived = 0;
            damageReceived = 0;
        }
    }

    public String toString() { 
        return "stats";
    } 
}
