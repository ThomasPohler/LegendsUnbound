import java.util.*;

public class Stats<T extends Enum<T>> {
    Map<Creature.CreatureStats, Object>[] creatures;

    Stats(int numOfCreatures){
        creatures = new HashMap<Creature.CreatureStats, Object>[numOfCreatures];
    }
}
