package com.tomato.donghang.model.service;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.cleopatra.protocol.data.ParameterGroup;
import com.tomato.donghang.model.Pagination;
import com.tomato.donghang.model.mapper.EduApplyBoardMapper;
import com.tomato.donghang.model.vo.EduApplyBoardVO;
import com.tomato.donghang.model.vo.EduApplyCommentBoardVO;
import com.tomato.donghang.model.vo.MemberVO;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class EduApplyBoardServiceImpl implements EduApplyBoardService {
	private final EduApplyBoardMapper eduApplyBoardMapper;

	@Override
	public List<Map<String, Object>> findBaordList() {
		long totalBoardCount = eduApplyBoardMapper.findAllBoardCount();
		
		List<Map<String, Object>> data = new ArrayList<Map<String, Object>>();
		List<EduApplyBoardVO> list = eduApplyBoardMapper.findBoardList();
		for(EduApplyBoardVO evo : list) {
			Map<String, Object> row = new HashMap<String, Object>();
			row.put("BOARD_NO", evo.getEduBoardNo());
			row.put("BOARD_TITLE", evo.getEduBoardTitle());
			row.put("PERIOD", evo.getEduBoardApplyStartPeriod());
			row.put("BOARD_CATEGORY", evo.getEduBoardCategory());
			//STATUS
			row.put("TOTAL_BOARD_COUNT", totalBoardCount);
			data.add(row);
		}
		return data;
	}

	@Override
	public List<Map<String, Object>> findBoardListWithStatusByPage(ParameterGroup param) {
		long nowPage = 0;
		Pagination pagination;
		String PrevPage = "0";
		String NextPage = "0";
		String applyStatus =  param.getValue("status");
		long totalBoardCount = 0;	
		if(param.getValue("status")==null || param.getValue("status")=="" || param.getValue("status").length()<3) {
			applyStatus= "";
			 totalBoardCount = eduApplyBoardMapper.findAllBoardCount();
		}else {
			log.info("status{}", param.getValue("status"));
			 totalBoardCount = eduApplyBoardMapper.findBoardCountByStatus(applyStatus);
		}
		
		
		
		if(param.getValue("nowpage")==null || param.getValue("nowpage")=="") {
			 pagination = new Pagination(totalBoardCount);
		}else {
			nowPage = Long.parseLong(param.getValue("nowpage"));
			 pagination = new Pagination(totalBoardCount,nowPage);
		}
		//파리미터로 넘어온  nowpage의 값 null체크
		
		if(pagination.isPreviousPageGroup()) {
			 PrevPage = "1";
		}else{
			 PrevPage = "0";
		}
		if(pagination.isNextPageGroup()) {
			NextPage = "1";
		}else{
			NextPage = "0";
		}
		//NextPage 와 PrePage의 값 설정
		
		Map<String, Object> map = new HashMap<>();
		map.put("pagination", pagination);
	    map.put("status", applyStatus);
	    List<Map<String, Object>> data  = eduApplyBoardMapper.findBoardListPageAndSearchThing(map);
	    List<Map<String, Object>> newData = new ArrayList<>();
	    log.info("첫data {}", data.get(0));
		for(Map<String, Object> evo : data) {
			evo.put("NOW_PAGE", nowPage);
			evo.put("TOTAL_BOARD_COUNT", totalBoardCount);
			evo.put("PREVPAGE", PrevPage);
			evo.put("NEXTPAGE", NextPage);
			newData.add(evo);
		}
		data = newData;
		log.warn("data {}", data);
		return data;
	}
	
	@Override
	public List<Map<String, Object>> findBoardListPageAndSearchKeyword(ParameterGroup param) {
		long nowPage = 0;
		Pagination pagination;
		String PrevPage = "0";
		String NextPage = "0";
		String type = param.getValue("type");
		String keyword = param.getValue("keyword");
		String applyStatus =  param.getValue("status");
		Map<String, String> map = new HashMap<>();
		if(param.getValue("status")==null || param.getValue("status")=="" || param.getValue("status").length()<3) {
			applyStatus=null;
		}
		map.put("status", applyStatus);
		map.put("keyword", keyword);
		map.put("type", type);
		long totalBoardCount = 0;	
		   log.warn("mapkeyword {}", map);
		totalBoardCount = eduApplyBoardMapper.findBoardCountByStatusWithSearch(map);
		if(param.getValue("nowpage")==null || param.getValue("nowpage")=="") {
			 pagination = new Pagination(totalBoardCount);
		}else {
			nowPage = Long.parseLong(param.getValue("nowpage"));
			 pagination = new Pagination(totalBoardCount,nowPage);
		}
		//파리미터로 넘어온  nowpage의 값 null체크
		
		if(pagination.isPreviousPageGroup()) {
			 PrevPage = "1";
		}else{
			 PrevPage = "0";
		}
		if(pagination.isNextPageGroup()) {
			NextPage = "1";
		}else{
			NextPage = "0";
		}
		//NextPage 와 PrePage의 값 설정
		
		Map<String, Object> po = new HashMap<>();
		po.put("pagination", pagination);
	    po.put("status", applyStatus);
	    po.put("type", type);
	    po.put("keyword", keyword);
	    log.info("map {}", map);
	    List<Map<String, Object>> data  = eduApplyBoardMapper.findBoardListPageAndSearchKeyword(po);
	    log.info("data {}", data);
	    if(data.size()==0) {
	    	return data;
	    }
	    log.info("총 게시물 수 {}", data);
	    List<Map<String, Object>> newData = new ArrayList<>();
		for(Map<String, Object> evo : data) {
			evo.put("NOW_PAGE", nowPage);
			evo.put("TOTAL_BOARD_COUNT", totalBoardCount);
			evo.put("PREVPAGE", PrevPage);
			evo.put("NEXTPAGE", NextPage);
			newData.add(evo);
		}
		data = newData;
		return data;
	}
	@Override
	public Map<String, Object> selectBoard() {
//		public Board selectBoard(SqlSession session, int no) {
//			return session.selectOne("member.selectBoard",no);
//		}
		EduApplyBoardVO evo = eduApplyBoardMapper.selectBoard();
		System.out.println("serviceImpl evo : " + evo);
		Map<String, Object> dataMap = new HashMap<>();
		dataMap.put("EDU_BOARD_TITLE", evo.getEduBoardTitle());
		dataMap.put("EDU_BOARD_START_PERIOD", evo.getEduBoardStartPeriod());
		dataMap.put("EDU_BOARD_END_PERIOD", evo.getEduBoardEndPeriod());
		dataMap.put("EDU_BOARD_APPLY_START_PERIOD", evo.getEduBoardApplyStartPeriod());
		dataMap.put("EDU_BOARD_APPLY_END_PERIOD", evo.getEduBoardApplyEndPeriod());
		dataMap.put("EDU_BOARD_MAX_MEMBER_COUNT", evo.getEduBoardMaxMemberCount());
		dataMap.put("EDU_BOARD_ADDRESS", evo.getEduBoardAddress());
		dataMap.put("EDU_BOARD_CATEGORY", evo.getEduBoardCategory());
		dataMap.put("EDU_BOARD_CONTENT", evo.getEduBoardContent());
		dataMap.put("USER_ID,", evo.getMemberVO().getUserId());
		System.out.println("serviceImpl MAP" + dataMap);
		
		return dataMap;
	}

	@Override
	public void createBoard(ParameterGroup param) {
		// String eduBoardNo = param.getValue("EDU_BOARD_NO");
		String eduBoardTitle = param.getValue("EDU_BOARD_TITLE");
		String eduBoardStartPeriod = param.getValue("EDU_BOARD_START_PERIOD");
		String eduBoardEndPeriod = param.getValue("EDU_BOARD_END_PERIOD");
		String eduBoardApplyStartPeriod = param.getValue("EDU_BOARD_APPLY_START_PERIOD");
		String eduBoardApplyEndPeriod = param.getValue("EDU_BOARD_APPLY_END_PERIOD");
		String eduBoardMaxMemberCount = param.getValue("EDU_BOARD_MAX_MEMBER_COUNT");
		String eduBoardAddress = param.getValue("EDU_BOARD_ADDRESS");
		String eduBoardCategory = param.getValue("EDU_BOARD_CATEGORY");
		String eduBoardContent = param.getValue("EDU_BOARD_CONTENT");
		String USER_ID = param.getValue("USER_ID");

		EduApplyBoardVO vo = new EduApplyBoardVO();
		MemberVO mvo = new MemberVO();
		mvo.setUserId(USER_ID);
		vo.setMemberVO(mvo);
		vo.setEduBoardTitle(eduBoardTitle);
		vo.setEduBoardStartPeriod(eduBoardStartPeriod);
		vo.setEduBoardEndPeriod(eduBoardEndPeriod);
		vo.setEduBoardApplyStartPeriod(eduBoardApplyStartPeriod);
		vo.setEduBoardApplyEndPeriod(eduBoardApplyEndPeriod);

		try {
			vo.setEduBoardMaxMemberCount(Integer.parseInt(eduBoardMaxMemberCount));
		} catch (NumberFormatException e) {
			vo.setEduBoardMaxMemberCount(Integer.parseInt("999"));
		}
		vo.setEduBoardCategory(eduBoardCategory);
		vo.setEduBoardAddress(eduBoardAddress);
		vo.setEduBoardContent(eduBoardContent);

		System.out.println("serviceImpl : " + vo);
		eduApplyBoardMapper.createBoard(vo);
	}

	@Override
	public void updateBoard(ParameterGroup param) {
		// String eduBoardNo = param.getValue("EDU_BOARD_NO");
		String eduBoardTitle = param.getValue("EDU_BOARD_TITLE");
		String eduBoardStartPeriod = param.getValue("EDU_BOARD_START_PERIOD");
		String eduBoardEndPeriod = param.getValue("EDU_BOARD_END_PERIOD");
		String eduBoardApplyStartPeriod = param.getValue("EDU_BOARD_APPLY_START_PERIOD");
		String eduBoardApplyEndPeriod = param.getValue("EDU_BOARD_APPLY_END_PERIOD");
		String eduBoardMaxMemberCount = param.getValue("EDU_BOARD_MAX_MEMBER_COUNT");
		String eduBoardAddress = param.getValue("EDU_BOARD_ADDRESS");
		String eduBoardCategory = param.getValue("EDU_BOARD_CATEGORY");
		String eduBoardContent = param.getValue("EDU_BOARD_CONTENT");
		String USER_ID = param.getValue("USER_ID");

		EduApplyBoardVO vo = new EduApplyBoardVO();
		MemberVO mvo = new MemberVO();
		mvo.setUserId(USER_ID);
		vo.setMemberVO(mvo);
		vo.setEduBoardTitle(eduBoardTitle);
		vo.setEduBoardStartPeriod(eduBoardStartPeriod);
		vo.setEduBoardEndPeriod(eduBoardEndPeriod);
		vo.setEduBoardApplyStartPeriod(eduBoardApplyStartPeriod);
		vo.setEduBoardApplyEndPeriod(eduBoardApplyEndPeriod);

		try {
			vo.setEduBoardMaxMemberCount(Integer.parseInt(eduBoardMaxMemberCount));
		} catch (NumberFormatException e) {
			vo.setEduBoardMaxMemberCount(Integer.parseInt("999"));
		}
		vo.setEduBoardCategory(eduBoardCategory);
		vo.setEduBoardAddress(eduBoardAddress);
		vo.setEduBoardContent(eduBoardContent);

		System.out.println("serviceImpl : " + vo);
		eduApplyBoardMapper.updateBoard(vo);
	}

	@Override
	public void deleteBoard(ParameterGroup param) {
		// String eduBoardNo = param.getValue("EDU_BOARD_NO");
		String eduBoardTitle = param.getValue("EDU_BOARD_TITLE");
		String eduBoardStartPeriod = param.getValue("EDU_BOARD_START_PERIOD");
		String eduBoardEndPeriod = param.getValue("EDU_BOARD_END_PERIOD");
		String eduBoardApplyStartPeriod = param.getValue("EDU_BOARD_APPLY_START_PERIOD");
		String eduBoardApplyEndPeriod = param.getValue("EDU_BOARD_APPLY_END_PERIOD");
		String eduBoardMaxMemberCount = param.getValue("EDU_BOARD_MAX_MEMBER_COUNT");
		String eduBoardAddress = param.getValue("EDU_BOARD_ADDRESS");
		String eduBoardCategory = param.getValue("EDU_BOARD_CATEGORY");
		String eduBoardContent = param.getValue("EDU_BOARD_CONTENT");
		String USER_ID = param.getValue("USER_ID");

		EduApplyBoardVO vo = new EduApplyBoardVO();
		MemberVO mvo = new MemberVO();
		mvo.setUserId(USER_ID);
		vo.setMemberVO(mvo);
		vo.setEduBoardTitle(eduBoardTitle);
		vo.setEduBoardStartPeriod(eduBoardStartPeriod);
		vo.setEduBoardEndPeriod(eduBoardEndPeriod);
		vo.setEduBoardApplyStartPeriod(eduBoardApplyStartPeriod);
		vo.setEduBoardApplyEndPeriod(eduBoardApplyEndPeriod);

		try {
			vo.setEduBoardMaxMemberCount(Integer.parseInt(eduBoardMaxMemberCount));
		} catch (NumberFormatException e) {
			vo.setEduBoardMaxMemberCount(Integer.parseInt("999"));
		}
		vo.setEduBoardCategory(eduBoardCategory);
		vo.setEduBoardAddress(eduBoardAddress);
		vo.setEduBoardContent(eduBoardContent);

		System.out.println("serviceImpl : " + vo);
		eduApplyBoardMapper.deleteBoard(vo);
	}

	@Override
	public Map<String, Object> selectCommentBoard() {
		EduApplyCommentBoardVO ecvo = new EduApplyCommentBoardVO();
				eduApplyBoardMapper.selectCommentBoard();
		System.out.println("serviceImpl evo : " + ecvo);
		Map<String, Object> dataMap = new HashMap<>();
		dataMap.put("EDU_APPLY_COMMENT_CONTENT", ecvo.getEduApplyCommentContent());
		dataMap.put("EDU_BOARD_NO", ecvo.getEduApplyBoardVO().getEduBoardNo());
		dataMap.put("USER_ID", ecvo.getMemberVO().getUserId());

		System.out.println("serviceImpl MAP : " + dataMap);
		return dataMap;
	}

	@Override
	public void createCommentBoard(ParameterGroup param) {

		//String eduApplyCommentBoardNo = param.getValue("EDU_APPLY_COMMENT_BOARD_NO");
		String eduApplyCommentContent = param.getValue("EDU_APPLY_COMMENT_CONTENT");
		String eduBoardNo = param.getValue("EDU_BOARD_NO");
		String USER_ID = param.getValue("USER_ID");

		EduApplyCommentBoardVO ecvo = new EduApplyCommentBoardVO();
		
		EduApplyBoardVO evo = new EduApplyBoardVO();
		evo.setEduBoardNo(Long.parseLong(eduBoardNo));
		ecvo.setEduApplyBoardVO(evo);
		
		MemberVO mvo = new MemberVO();
		mvo.setUserId(USER_ID);
		ecvo.setMemberVO(mvo);

		ecvo.setEduApplyCommentContent(eduApplyCommentContent);

		System.out.println("serviceImpl : " + ecvo);
		eduApplyBoardMapper.createCommentBoard(ecvo);
	}

	@Override
	public void updateCommentBoard(ParameterGroup param) {
		for(Map<String, String> list :  param.getAllRowList()) {
			log.info("rowList {}", list );
		}
	
		
		//String eduApplyCommentBoardNo = param.getValue("EDU_APPLY_COMMENT_BOARD_NO");
		String eduApplyCommentContent = param.getValue("EDU_APPLY_COMMENT_CONTENT");
		//String eduBoardNo = param.getValue("EDU_BOARD_NO");
		//String USER_ID = param.getValue("USER_ID");
		//System.out.println("eduBoardNo " + eduBoardNo);
		//System.out.println("USER_ID "+USER_ID);
		
		EduApplyCommentBoardVO ecvo = new EduApplyCommentBoardVO();
//		ecvo.setEduApplyCommentBoardNo(Long.parseLong(eduApplyCommentBoardNo));
		
//		EduApplyBoardVO evo = new EduApplyBoardVO();
//		evo.setEduBoardNo(Long.parseLong(eduBoardNo));
//		ecvo.setEduApplyBoardVO(evo);
//		
//		MemberVO mvo = new MemberVO();
//		mvo.setUserId(USER_ID);
//		ecvo.setMemberVO(mvo);

		ecvo.setEduApplyCommentContent(eduApplyCommentContent);

		System.out.println("serviceImpl : " + ecvo);
		eduApplyBoardMapper.updateCommentBoard(ecvo);
	}

	@Override
	public void deleteCommentBoard(ParameterGroup param) {

		//String eduApplyCommentBoardNo = param.getValue("EDU_APPLY_COMMENT_BOARD_NO");
		String eduApplyCommentContent = param.getValue("EDU_APPLY_COMMENT_CONTENT");
		String eduBoardNo = param.getValue("EDU_BOARD_NO");
		String USER_ID = param.getValue("USER_ID");

		EduApplyCommentBoardVO ecvo = new EduApplyCommentBoardVO();
		
		EduApplyBoardVO evo = new EduApplyBoardVO();
		evo.setEduBoardNo(Long.parseLong(eduBoardNo));
		ecvo.setEduApplyBoardVO(evo);
		
		MemberVO mvo = new MemberVO();
		mvo.setUserId(USER_ID);
		ecvo.setMemberVO(mvo);

		ecvo.setEduApplyCommentContent(eduApplyCommentContent);

		System.out.println("serviceImpl : " + ecvo);
		eduApplyBoardMapper.deleteCommentBoard(ecvo);
	}
}
