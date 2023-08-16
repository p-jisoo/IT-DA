package com.tomato.donghang;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.tomato.donghang.model.mapper.EduApplyBoardMapper;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
class DonghangApplicationTests {
	@Autowired
	EduApplyBoardMapper eduApplyBoardMapper;
	
	@Test
	void contextLoads() {
	}

}
