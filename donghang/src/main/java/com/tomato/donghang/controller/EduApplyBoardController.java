package com.tomato.donghang.controller;

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
	public String testAjax() { 
		return "hello ajax";  
	}
	
	@GetMapping("/ui/toBoardList.do")
	public View BoardList(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		return new UIView("/ui/eduApplyboardList.clx");
	}
	
	@PostMapping("/ui/createBoard.do")
	public View createBoard(HttpServletRequest request, HttpServletResponse response,DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("eduApplyBoardMap");
		System.out.println("paramCreate : "+ param);
		eduApplyBoardService.createBoard(param);	
		return new UIView("/ui/eduApplyboardList.clx");
	}
	@PostMapping("/ui/updateBoard.do")
	public View updateBoard(HttpServletRequest request, HttpServletResponse response,DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("eduApplyBoardMap");
		System.out.println("paramUpdate : "+ param);
		eduApplyBoardService.updateBoard(param);	
		return new UIView("/ui/eduApplyboardList.clx");
	}

	@GetMapping("/ui/eduApplyboardList")
	public View eduApplyboardList() {
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
		List<Map<String, Object>> data = eduApplyBoardService.findBoardListWithStatusByPage(param);
		dataRequest.setResponse("ds1", data);
		return new JSONDataView();
	}
	@PostMapping("/ui/findBoardListWithStatusByPage.do")
	public View findBoardListWithStatusByPage(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("dm2");
		log.debug("param {}",param.getValue("status"));
		log.debug("nowpage {}",param.getValue("nowpage"));
		List<Map<String, Object>> data = eduApplyBoardService.findBoardListWithStatusByPage(param);
		dataRequest.setResponse("ds3", data);
		return new JSONDataView();
	}
	@PostMapping("/ui/findBoardListPageAndSearchKeyword.do")
	public View findBoardListPageAndSearchKeyword(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("dm3");
		log.info("param {}",param.getValue("type"));
		log.info("nowpage {}",param.getValue("keyword"));
		return new JSONDataView();
	}
}
