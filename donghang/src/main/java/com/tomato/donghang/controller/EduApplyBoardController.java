package com.tomato.donghang.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;
import com.cleopatra.spring.UIView;
import com.tomato.donghang.model.service.EduApplyBoardService;
import com.tomato.donghang.model.vo.EduApplyBoardVO;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController 
@RequiredArgsConstructor
@Slf4j
public class EduApplyBoardController {
	private final EduApplyBoardService eduApplyBoardService;
	@PostMapping("/ui/testajax.do")
	//@ResponseBody => RestController 이므로 필요없음 
	public String testAjax() { // @RequestParam 생략가능
		System.out.println("1");
		return "hello ajax"; // RestController 즉 ajax 응답 
	}
	
	@GetMapping("/ui/toBaordList.do")
	public View BoardList(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		return new UIView("/ui/eduApplyboardList.clx");
	}
	
	
	@PostMapping("/ui/createBoard.do")
	public void createBoard(HttpServletRequest request, HttpServletResponse response,DataRequest dataRequest) { 
	}
	@GetMapping("/ui/eduApplyboardList")
	public View eduApplyboardList() {
		log.info("a");
		return new UIView("/ui/eduApplyboardList.clx");
	}
	
	
	
	
	@PostMapping("/ui/findBaordList.do")
	public View findBoardList(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		List<Map<String, Object>> data = eduApplyBoardService.findBaordList();
		dataRequest.setResponse("ds1", data);
		return new JSONDataView();
	}
	
	@PostMapping("/ui/findBoardListByPage.do")
	public View findBoardListByPage(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("dm1");
		List<Map<String, Object>> data = eduApplyBoardService.findBaordListBy(param.getValue("nowpage"));
		dataRequest.setResponse("ds2", data);
		return new JSONDataView();
	}
	
	
}
