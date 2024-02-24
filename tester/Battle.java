public interface Battle {    
    public Stats runBattle();
    public Creature getClosestCreature(Creature source);
    public Creature getHighestHPCreature(Creature source);
}





class Duel implements Battle {
    private int roundNumber;

    private Creature creature1;
    private Creature creature2;

    Duel() {
        roundNumber = 1;

        //TODO definitely don't hardcode this
        creature1 = new Creature(1, Creature.CreatureType.PLAYER);
        creature2 = new Creature(1, Creature.CreatureType.PLAYER);
    }
    

    public Stats runBattle(){
        while(roundNumber < Simulation.MAXIMUM_ROUNDS && creature1.getHealthState() != Creature.HealthState.DEAD && creature2.getHealthState() != Creature.HealthState.DEAD){
            //TODO write actual battle code
            roundNumber++;
        }

        return null; //TODO
    }


    private Creature getOtherCreature(Creature source){
        if(creature1.getID() == source.getID()){
            return creature2;
        } else {
            return creature1;
        }
    }

    public Creature getClosestCreature(Creature source){
        return getOtherCreature(source);
    }

    public Creature getHighestHPCreature(Creature source){
        return getOtherCreature(source);
    }
}