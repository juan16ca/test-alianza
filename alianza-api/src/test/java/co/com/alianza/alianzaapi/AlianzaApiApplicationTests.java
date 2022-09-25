package co.com.alianza.alianzaapi;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.nio.charset.Charset;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletRequest;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.databind.SerializationFeature;

import co.com.alianza.alianzaapi.controller.UserAlianzaController;
import co.com.alianza.alianzaapi.dto.User;

@AutoConfigureMockMvc
@SpringBootTest
class AlianzaApiApplicationTests {

	public static final MediaType APPLICATION_JSON_UTF8 = new MediaType(MediaType.APPLICATION_JSON.getType(),
			MediaType.APPLICATION_JSON.getSubtype(), Charset.forName("utf8"));

	@Autowired
	private MockMvc mockMvc;

	@InjectMocks
	private UserAlianzaController apiController;

	@Autowired
	MockHttpServletRequest request;

	@Test
	void validate() throws Exception {
		assertThat(apiController).isNotNull();
	}

	@Test
	void validateCode200Get() throws Exception {

		mockMvc.perform(get("/api/user"))
				.andExpect(status().isOk()).andReturn();

	}

	@Test
	void validateCode200Post() throws Exception {

		User user = new User(null, "juan", "3114589", "teest@gmail.com", "24/09/2022");

		ObjectMapper mapper = new ObjectMapper();
		mapper.configure(SerializationFeature.WRAP_ROOT_VALUE, false);
		ObjectWriter ow = mapper.writer().withDefaultPrettyPrinter();
		String requestJson = ow.writeValueAsString(user);

		mockMvc.perform(post("/api/user").contentType(APPLICATION_JSON_UTF8)
				.content(requestJson))
				.andExpect(status().isOk());
	}

	@Test
	void validateCode400Post() throws Exception {
		mockMvc.perform(post("/api/user")).andExpect(status().isBadRequest());
	}

}
