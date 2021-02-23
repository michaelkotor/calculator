import org.example.Calculator;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class CalculatorTest {
    private Calculator calculator;

    @Before
    public void setup() {
        calculator = new Calculator();
    }

    @Test
    public void testAdd() {
        int first = 9;
        int second = 10;
        Assert.assertEquals(first + second, calculator.add(first, second));
    }

    @Test
    public void testAddBigNumbers() {
        int first = 2000000000;
        int second = 2000000000;
        Assert.assertEquals((long)first + (long)second, calculator.add(first, second));
    }

    @Test
    public void testMinus() {
        int first = 9;
        int second = 10;
        Assert.assertEquals(first - second, calculator.minus(first, second));
    }

    @Test
    public void testMultiply() {
        int first = 9;
        int second = 10;
        Assert.assertEquals(first * second, calculator.multiply(first, second));
    }

    @Test
    public void testDivide() {
        int first = 9;
        int second = 10;
        Assert.assertEquals((double) first / second, calculator.divide(first, second), 0.0001);
    }

    @Test
    public void testDivideRational() {
        int first = 9;
        int second = 11;
        System.out.println(first / second);
        Assert.assertEquals((double) first / second, calculator.divide(first, second), 0.0001);
    }

}
