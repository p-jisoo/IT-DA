package com.tomato.donghang.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.tomato.donghang.model.service.EduApplyBoardService;
import com.tomato.donghang.model.vo.EduApplyBoardVO;

import lombok.RequiredArgsConstructor;

@RestController 
@RequiredArgsConstructor
public class EduApplyBoardController {
	private final EduApplyBoardService eduApplyBoardService;
	@PostMapping("/ui/testajax.do")
	//@ResponseBody => RestController 이므로 필요없음 
	public String testAjax() { // @RequestParam 생략가능
		System.out.println("1");
		return "hello ajax"; // RestController 즉 ajax 응답 
	}
	@PostMapping("/ui/createBoard.do")
	public void createBoard(HttpServletRequest request, HttpServletResponse response,DataRequest dataRequest) { 
		
	}
}
