import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Log {

    /* VARIABLES */

    public static Simulation currentSimulation;
    private static boolean isProgramCrashing;


    /* GETTERS / SETTERS */

    public static Simulation getcurrentSimulation(){
        return currentSimulation;
    }
    public static void setCurrentSimulation(Simulation newSimulation){
        currentSimulation = newSimulation;
    }

    public static boolean isCrashing(){
        return isProgramCrashing;
    }
    public static void setIsCrashing(boolean newIsCrashing){
        isProgramCrashing = newIsCrashing;
    }


    /* METHODS */

    private static void write(String fileName, String input, boolean dumpSimulationInfo){
        String filePath = fileName + "_" + LocalDate.now().format(DateTimeFormatter.ofPattern("yyMMMdd")) + ".txt";

        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(filePath, true));
            writer.write(input);
            if(dumpSimulationInfo && currentSimulation != null){
                writer.write("\n\n-- STATS --\n");
                writer.write(currentSimulation.toString());
            } else if(currentSimulation == null){
                writer.write("\n\nCannot dump simulation info, simulation info is null");
            }
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /* Use this to send a message to the debug file */
    public static void debug(String input) {
        write("debug", input, false);
    }   

    /* Use this to instigate a fatal crash and generate an error message */
    public static void error(String input) {
        setIsCrashing(true);
        write("error", input, true);
        throw new IllegalStateException(input);
    }
}