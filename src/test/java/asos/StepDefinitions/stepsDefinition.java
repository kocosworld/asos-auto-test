package asos.StepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.apache.commons.exec.util.StringUtils;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import java.util.concurrent.TimeUnit;

/**
 * Created by Alvaro M on 25/12/2016.
 */
public class stepsDefinition {

    protected WebDriver driver;

    @Given("^I want to order a shirt$")
    public void given_I_want_to_order_a_shirt() {
        System.setProperty("webdriver.chrome.driver", "C://driver/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("http://www.asos.com");
    }

    @When("^I search for '(.*)'$")
    public void when_I_search_for(String search_for) {
        WebElement element = driver.findElement(By.id("txtSearch"));
        element.clear();
        element.sendKeys(search_for);
        element.sendKeys(Keys.RETURN);
    }

    @Then("^I should see some '(.*)'$")
    public void then_I_should_see(String result) {
        driver.findElement(By.className("product-list"));
        driver.findElement(By.cssSelector("img.product-img")).click();
        String text = driver.findElement(By.xpath("//*[@id=\"aside-content\"]/div[1]/h1")).getText();

        String split[] = StringUtils.split(result, " ");
        String colour_string = split[0];
        String clothes_string = split[1];
        Assert.assertNotEquals(text.indexOf(colour_string), -1);
        Assert.assertNotEquals(text.indexOf(clothes_string), -1);

        driver.quit();
    }

    @When("^I search for '(.*)' in the Australian store$")
    public void when_I_search_in_Australian_store(String search_for) {
        driver.get("http://www.asos.com/au/");
        when_I_search_for(search_for);
    }

    @Given("^I have searched for '(.*)' on the Australian store$")
    public void given_I_have_searched_for_on_Australian_store(String search_for) {
        given_I_want_to_order_a_shirt();
        when_I_search_in_Australian_store(search_for);
    }

    @Given("^I have some '(.*)' displayed$")
    public void I_have_some_results_displayed(String result) {
        driver.findElement(By.className("product-list"));
        driver.findElement(By.cssSelector("img.product-img")).click();
        driver.navigate().back();
    }

    @When("^I organize them in 4 columns$")
    public void when_I_organize_in_4_columns() {
        driver.findElement(By.className("regular")).click();
    }

    @Then("^I should see some '(.*)' organized in 4 columns$")
    public void then_I_should_see_in_4_columns(String result) {
        driver.findElement(By.cssSelector("#productlist-results > div > div.results.four-grid"));
        then_I_should_see(result);
    }

    @When("^I refine my search by gender:'(.*)' size:'(.*)' and colour:'(.*)'$")
    public void when_I_refine_search_by(String gender, String size, String colour) {

        if (gender.equals("MEN")) {
            driver.findElement(By.xpath("id('productlist-results')//span[text()='MEN']")).click();
        }
        if (gender.equals("WOMEN")) {
            driver.findElement(By.xpath("id('productlist-results')//span[text()='WOMEN']")).click();
        }

        try {
            Thread.sleep(3000);
        } catch (InterruptedException ie) {
        }

        if (size.equals("S")) {
            driver.findElement(By.xpath("id('productlist-results')//span[text()='S']")).click();
        }
        if (size.equals("M")) {
            driver.findElement(By.xpath("id('productlist-results')//span[text()='M']")).click();
        }
        if (size.equals("L")) {
            driver.findElement(By.xpath("id('productlist-results')//span[text()='L']")).click();
        }
        if (size.equals("AU4")) {
            driver.findElement(By.xpath("id('productlist-results')//span[text()='AU 4']")).click();
        }
        if (size.equals("AU10")) {
            driver.findElement(By.xpath("id('productlist-results')//span[text()='AU 10']")).click();
        }
        if (size.equals("AU18")) {
            driver.findElement(By.xpath("id('productlist-results')//span[text()='AU 18']")).click();
        }

        try {
            Thread.sleep(3000);
        } catch (InterruptedException ie) {
        }

        if (colour.equals("GREEN")) {
            driver.findElement(By.xpath("id('productlist-results')//span[text()='Green']")).click();
        }
        if (colour.equals("MULTI")) {
            driver.findElement(By.xpath("id('productlist-results')//span[text()='Multi']")).click();
        }
        if (colour.equals("YELLOW")) {
            driver.findElement(By.xpath("id('productlist-results')//span[text()='Yellow']")).click();
        }
        if (colour.equals("BEIGE")) {
            driver.findElement(By.xpath("id('productlist-results')//span[text()='Beige']")).click();
        }

        try {
            Thread.sleep(3000);
        } catch (InterruptedException ie) {
        }
    }

    @Then("^I should see the expected result:'(.*)'$")
    public void then_I_should_see_the_expected_result(String result) {

        String expected_URL = "";
        String URL = driver.getCurrentUrl();

        if (result.equals("MEN-S-GREEN")) {
            expected_URL = "http://www.asos.com/au/search/Yellow-T-Shirt?q=Yellow+T-Shirt&refine=floor:1001|size:1873|base_colour:2&currentpricerange=0-80&pgesize=36";
        }
        if (result.equals("MEN-M-MULTI")) {
            expected_URL = "http://www.asos.com/au/search/Yellow-T-Shirt?q=Yellow+T-Shirt&refine=floor:1001|size:1848|base_colour:17&currentpricerange=0-80&pgesize=36";
        }
        if (result.equals("MEN-L-YELLOW")) {
            expected_URL = "http://www.asos.com/au/search/Yellow-T-Shirt?q=Yellow+T-Shirt&refine=floor:1001|size:1943|base_colour:6&currentpricerange=0-80&pgesize=36";
        }
        if (result.equals("WOMEN-AU4-YELLOW")) {
            expected_URL = "http://www.asos.com/au/search/Yellow-T-Shirt?q=Yellow+T-Shirt&refine=floor:1000|size:1878|base_colour:6&currentpricerange=0-80&pgesize=36";
        }
        if (result.equals("WOMEN-AU18-YELLOW")) {
            expected_URL = "http://www.asos.com/au/search/Yellow-T-Shirt?q=Yellow+T-Shirt&refine=floor:1000|size:1946|base_colour:6&currentpricerange=0-80&pgesize=36";
        }

        Assert.assertEquals(URL, expected_URL);
        driver.quit();
    }

    @When("^I click to change the currency to NZ dollars$")
    public void when_I_change_to_nz_dollars() {
        driver.findElement(By.cssSelector("span.selected-currency")).click();
        new Select(driver.findElement(By.id("currencyList"))).selectByVisibleText("$ NZD");
    }

    @Then("^I should see the prices in NZ dollars$")
    public void then_I_see_nz_dollars_prices() {
        driver.findElement(By.className("product-list"));
        driver.findElement(By.cssSelector("img.product-img")).click();

        String text = driver.findElement(By.xpath("//*[@id=\"product-price\"]/div/span[2]")).getText();
        String nzd_string = "NZD";

        Assert.assertNotEquals(text.indexOf(nzd_string), -1);
        driver.quit();
    }

    @When("^I save an item for later$")
    public void when_I_save_item_for_later() {
        driver.findElement(By.className("product-list"));
        driver.findElement(By.cssSelector("img.product-img")).click();
        driver.findElement(By.xpath("//*[@id=\"product-save\"]/div/a/span[2]")).click();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException ie) {
        }
    }

    @Then("^the item is saved$")
    public void then_item_is_saved() {
        driver.findElement(By.xpath("//*[@id=\"BodyTag\"]/div[4]/div/header/div[5]/ul/li[3]/a")).click();
        try {
            Thread.sleep(1000);
        } catch (InterruptedException ie) {
        }
        driver.findElement(By.cssSelector("saved-items-item-message.savedItems-item-messages-holder")).click();
        driver.quit();
    }

    @When("^I add an item to the bag$")
    public void when_I_add_item_to_bag() {
        driver.findElement(By.className("product-list"));
        driver.findElement(By.cssSelector("img.product-img")).click();
        new Select(driver.findElement(By.cssSelector("div.size-section > div.colour-size-select > select"))).selectByVisibleText("M");
        driver.findElement(By.xpath("//div[@id='product-add']/div/a/span[2]")).click();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException ie) {
        }
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
    }

    @Then("^the item is added to the bag$")
    public void then_item_is_added_to_bag() {
        driver.findElement(By.xpath("//*[@id=\"miniBagApp\"]/div/div[1]/minibag-dropdown/div/div/div/p/span[1]/a")).click();
        try {
            Thread.sleep(2000);
        } catch (InterruptedException ie) {
        }
        driver.findElement(By.xpath("//*[@id=\"bagApp\"]/div/div/div[1]/div[1]/bag-item-list/ul/li/div/div/div/bag-item-product/div/bag-item-image/a/img")).click();
        driver.quit();
    }

}
