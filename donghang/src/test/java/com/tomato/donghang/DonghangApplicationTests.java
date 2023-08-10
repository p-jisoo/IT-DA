package com.tomato.donghang;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import com.tomato.donghang.model.service.EduApplyBoardService;

@SpringBootTest
class DonghangApplicationTests {
	@Autowired
	EduApplyBoardService eduApplyBoardService;
	@Test
	public void eduApplyBoardServiceDI() {
		Assertions.assertNotNull(eduApplyBoardService);
	}
	
	@Test
	void contextLoads() {
	}

}
