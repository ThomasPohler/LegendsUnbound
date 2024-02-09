import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

public class Log {

    public static final Stats stats = new Stats();

    private static void write(String fileName, String input, boolean dumpStats){
        String filePath = fileName + "_" + LocalDate.now().format(DateTimeFormatter.ofPattern("yyMMMdd")) + ".txt";

        try {
            BufferedWriter writer = new BufferedWriter(new FileWriter(filePath, true));
            writer.write(input);
            if(dumpStats){
                writer.write(stats.toString());
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
        write("error", input, true);
        throw new IllegalStateException(input);
    }
}