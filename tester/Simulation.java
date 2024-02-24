public class Simulation {
    public static final int MAXIMUM_ROUNDS = 1000;

    public Battle currentBattle;

    Simulation() {
        currentBattle = new Duel();
    }

    public void run(){
        System.out.println("test");
    }
}