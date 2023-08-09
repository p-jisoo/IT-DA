package com.tomato.donghang;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportResource;

@SpringBootApplication
@ImportResource("classpath:context.xml")
public class DonghangApplication {

	public static void main(String[] args) {
		SpringApplication.run(DonghangApplication.class, args);
	}

}
