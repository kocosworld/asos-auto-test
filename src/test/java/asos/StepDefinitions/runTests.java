package asos.StepDefinitions;

/**
 * Created by Alvaro M on 25/12/2016.
 */

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/java/asos/features",
        glue = "asos.StepDefinitions",
        plugin = {
                "pretty",
                "html:target/cucumber",
        }
)
public class runTests {
}
