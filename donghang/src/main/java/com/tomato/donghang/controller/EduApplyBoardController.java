package com.tomato.donghang.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.View;

import com.cleopatra.protocol.data.DataRequest;
import com.cleopatra.protocol.data.ParameterGroup;
import com.cleopatra.spring.JSONDataView;
import com.cleopatra.spring.UIView;
import com.tomato.donghang.model.service.EduApplyBoardService;
import com.tomato.donghang.model.vo.MemberVO;

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
	
	
	//리스트에서 게시판등록
	@GetMapping("/ui/createBoardUI.do")
	public View createBoardUI(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		return new UIView("/ui/createBoard.clx");
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
		log.debug("param {}",param.getValue("type"));
		log.debug("nowpage {}",param.getValue("keyword"));
		List<Map<String, Object>> data = eduApplyBoardService.findBoardListPageAndSearchKeyword(param);
		dataRequest.setResponse("ds3", data);
		dataRequest.setParameter("keyword", param.getValue("keyword"));
		System.out.println(dataRequest.getParameter("keyword"));
		return new JSONDataView();
	}
	

	@PostMapping("ui/loginCheck.do")
	public View loginSession(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		HttpSession session = request.getSession(false);
		if(session==null) {
			return new JSONDataView();
		}else {
			MemberVO vo = (MemberVO) session.getAttribute("mvo");
			System.out.println("로그인 후=" + vo);
			if (vo != null) {
				dataRequest.setResponse("name", vo.getUserName());
			}
			return new JSONDataView();
		}
	}
	
	//List
	
	
	
	
	
	@PostMapping("/ui/selectBoardByBoardNo.do")
	public View selectBoardByBoardNo(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("eduApplyBoardMap");
		log.info("param {}",param);
		Map<String, Object> dataMap=eduApplyBoardService.selectBoard(param);
//		HttpSession session = request.getSession(false); 세션 들어왔을때 테스트
//		MemberVO memberVO =  (MemberVO) session.getAttribute("mvo");    유저 세션 체크
//		ParameterGroup param = dataRequest.getParameterGroup("dm5"); 데이터 맵 확인
		String userId = "c"; //memberVO.getUserId();

//		long likeCountLong.parseLong(param.getValue("eduBoardNo"));
		long eduBoardNo = 3; // eduBoardNo체크
		long likeCount = eduApplyBoardService.likeCount(userId, eduBoardNo);
		dataMap.put("IsLike", likeCount);
		dataRequest.setResponse("eduApplyBoardMap", dataMap);
		return  new JSONDataView();
//		return new UIView("/ui/updateBoard.do");
	}
//	
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
	@PostMapping("/ui/deleteBoard.do")
	public View deleteBoard(HttpServletRequest request, HttpServletResponse response,DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("eduApplyBoardMap");
		System.out.println("paramDelete : "+ param);
		eduApplyBoardService.deleteBoard(param);	
		return new UIView("/ui/eduApplyboardList.clx");
	}
	
//	@PostMapping("/ui/selectCommentBoardByBoardNo.do")
//	public View selectCommentBoardByBoardNo(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
//		System.out.println("selectCommentBoardByBoardNo Test");
//		ParameterGroup param = dataRequest.getParameterGroup("commentBoardMap");
//		System.out.println("paramSelect : "+ param);
//		Map<String, Object> dataMap=eduApplyBoardService.selectCommentBoard();
//		System.out.println("SelectCommentBoard : "+ dataMap);
//		dataRequest.setResponse("commentBoardMap", dataMap);
//		return  new JSONDataView();
////		return new UIView("/ui/updateBoard.do");
//	}
	@PostMapping("/ui/selectCommentBoardByBoardNo.do")
	public View selectCommentBoardByBoardNo(HttpServletRequest request, HttpServletResponse response, DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("commentBoardMap");
		System.out.println("param "+param);
		Map<String, Object> dataMap=eduApplyBoardService.selectCommentBoard(param);
		System.out.println("dataMap "+dataMap);
		dataRequest.setResponse("commentBoardMap", dataMap);
		return  new JSONDataView();
	}
	
	@PostMapping("/ui/createCommentBoard.do")
	public View createCommentBoard(HttpServletRequest request, HttpServletResponse response,DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("commentBoardMap");
		System.out.println("paramCreate : "+ param);
		eduApplyBoardService.createCommentBoard(param);	
		return new UIView("/ui/detailBoard.clx");
	}
	@PostMapping("/ui/updateCommentBoard.do")
	public View updateCommentBoard(HttpServletRequest request, HttpServletResponse response,DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("commentBoardMap");
		System.out.println("paramUpdate : "+ param);
		eduApplyBoardService.updateCommentBoard(param);	
		return new UIView("/ui/detailBoard.clx");
	}
	@PostMapping("/ui/deleteCommentBoard.do")
	public View deleteCommentBoard(HttpServletRequest request, HttpServletResponse response,DataRequest dataRequest) {
		ParameterGroup param = dataRequest.getParameterGroup("commentBoardMap");
		System.out.println("paramDelete : "+ param);
		eduApplyBoardService.deleteCommentBoard(param);	
		return new UIView("/ui/detailBoard.clx"); 
	}	
	


}
