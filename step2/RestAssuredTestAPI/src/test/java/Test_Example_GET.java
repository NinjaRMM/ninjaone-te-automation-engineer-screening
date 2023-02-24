import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;
import static io.restassured.RestAssured.*;

import io.restassured.builder.RequestSpecBuilder;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.specification.RequestSpecification;
import io.restassured.specification.ResponseSpecification;
import static org.hamcrest.Matchers.*;
import static io.restassured.module.jsv.JsonSchemaValidator.*;

public class Test_Example_GET {
	
	RequestSpecification requestSpec;
	ResponseSpecBuilder builder;
	ResponseSpecification responseSpec;

	@BeforeClass
	public void setSpecs () {
		requestSpec = new RequestSpecBuilder().addParam("ISBN", "9781449325862").build();
		builder = new ResponseSpecBuilder();
		builder.expectStatusCode(200);
		responseSpec = builder.build();
	}

	@Test
	void testGetBook() {
		
		given().
			spec(requestSpec).
		when().
			get("https://demoqa.com/BookStore/v1/Book").
		then().
			spec(responseSpec).
			assertThat().body(matchesJsonSchemaInClasspath("book-schema.json")).
			body("title", equalTo("Git Pocket Guide"));
			
	}
	
}
