package com.tomato.donghang;

import java.lang.ProcessHandle.Info;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.tomato.donghang.model.mapper.EduApplyBoardMapper;
import com.tomato.donghang.model.service.EduApplyBoardService;
import com.tomato.donghang.model.vo.EduApplyBoardVO;

import lombok.extern.slf4j.Slf4j;

@SpringBootTest
@Slf4j
class DonghangApplicationTests {
	@Autowired
	EduApplyBoardMapper eduApplyBoardMapper;
	@Test
	public void eduApplyBoardServiceDI() {
		EduApplyBoardVO vo= new EduApplyBoardVO();
		String title = "asdf";
		String content = "asdf";
		String category = "asdf";
		vo.setBoardTitle(title);
		vo.setBoardContent(content);
		vo.setCategory(category);
		//int count = eduApplyBoardMapper.createBoard(vo);
	}
	
	@Test
	void contextLoads() {
	}

}
