package com.tomato.donghang.model.service;

import java.io.Console;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.cleopatra.protocol.data.ParameterGroup;
import com.tomato.donghang.model.Pagination;
import com.tomato.donghang.model.mapper.EduApplyBoardMapper;
import com.tomato.donghang.model.vo.EduApplyBoardVO;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class EduApplyBoardServiceImpl implements EduApplyBoardService {
	private final EduApplyBoardMapper eduApplyBoardMapper;

	
	@Override
	public void createBoard(ParameterGroup param) {

		//String eduBoardNo = param.getValue("EDU_BOARD_NO");
		String eduBoardTitle = param.getValue("EDU_BOARD_TITLE");
		String eduBoardStartPeriod = param.getValue("EDU_BOARD_START_PERIOD");
		String eduBoardEndPeriod = param.getValue("EDU_BOARD_END_PERIOD");
		String eduBoardApplyStartPeriod = param.getValue("EDU_BOARD_APPLY_START_PERIOD");
		String eduBoardApplyEndPeriod = param.getValue("EDU_BOARD_APPLY_END_PERIOD");
		String eduBoardMemberCount = param.getValue("EDU_BOARD_MEMBER_COUNT");
		String eduBoardAddress = param.getValue("EDU_BOARD_ADDRESS");
		String eduBoardCategory = param.getValue("EDU_BOARD_CATEGORY");
		String eduBoardContent = param.getValue("EDU_BOARD_CONTENT");

		EduApplyBoardVO vo= new EduApplyBoardVO();
		//vo.setEduBoardNo(800);
		//vo.setEduBoardStatus("모집중");
		vo.setEduBoardTitle(eduBoardTitle);
		vo.setEduBoardStartPeriod(eduBoardStartPeriod);
		vo.setEduBoardEndPeriod(eduBoardEndPeriod);
		vo.setEduBoardApplyStartPeriod(eduBoardApplyStartPeriod);
		vo.setEduBoardApplyEndPeriod(eduBoardApplyEndPeriod);
		try {
			vo.setEduBoardMaxMemberCount(Integer.parseInt(eduBoardMemberCount));	
		}catch(NumberFormatException e){
			vo.setEduBoardMaxMemberCount(Integer.parseInt("999"));
			}
		vo.setEduBoardAddress(eduBoardAddress);
		vo.setEduBoardCategory(eduBoardCategory);
		vo.setEduBoardContent(eduBoardContent);
		System.out.println("serviceImpl : "+vo);
			eduApplyBoardMapper.createBoard(vo);
	}
	@Override
	public void updateBoard(ParameterGroup param) {
		//String eduBoardNo = param.getValue("EDU_BOARD_NO");
		String eduBoardTitle = param.getValue("EDU_BOARD_TITLE");
		String eduBoardStartPeriod = param.getValue("EDU_BOARD_START_PERIOD");
		String eduBoardEndPeriod = param.getValue("EDU_BOARD_END_PERIOD");
		String eduBoardApplyStartPeriod = param.getValue("EDU_BOARD_APPLY_START_PERIOD");
		String eduBoardApplyEndPeriod = param.getValue("EDU_BOARD_APPLY_END_PERIOD");
		String eduBoardMemberCount = param.getValue("EDU_BOARD_MEMBER_COUNT");
		String eduBoardAddress = param.getValue("EDU_BOARD_ADDRESS");
		String eduBoardCategory = param.getValue("EDU_BOARD_CATEGORY");
		String eduBoardContent = param.getValue("EDU_BOARD_CONTENT");

		EduApplyBoardVO vo= new EduApplyBoardVO();
		
		vo.setEduBoardTitle(eduBoardTitle);
		vo.setEduBoardStartPeriod(eduBoardStartPeriod);
		vo.setEduBoardEndPeriod(eduBoardEndPeriod);
		vo.setEduBoardApplyStartPeriod(eduBoardApplyStartPeriod);
		vo.setEduBoardApplyEndPeriod(eduBoardApplyEndPeriod);
		try {
			vo.setEduBoardMaxMemberCount(Integer.parseInt(eduBoardMemberCount));	
		}catch(NumberFormatException e){
			vo.setEduBoardMaxMemberCount(Integer.parseInt("999"));
			}
		vo.setEduBoardAddress(eduBoardAddress);
		vo.setEduBoardCategory(eduBoardCategory);
		vo.setEduBoardContent(eduBoardContent);
		eduApplyBoardMapper.updateBoard(vo);
	}

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
		log.info("data {}", data);
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
		long totalBoardCount = 0;	
		if(param.getValue("status")==null || param.getValue("status")=="" || param.getValue("status").length()<3) {
			applyStatus= "";
			 totalBoardCount = eduApplyBoardMapper.findAllBoardCount();
		}else {
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
	    map.put("type", type);
	    map.put("keyword", keyword);
	    log.info("map {}", map);
	    List<Map<String, Object>> data  = eduApplyBoardMapper.findBoardListPageAndSearchKeyword(map);
	    if(data.size()==0) {
	    	return data;
	    }
	    log.info("총 게시물 수 {}", data);
	    List<Map<String, Object>> newData = new ArrayList<>();
	    log.info("실행data {}", data.get(0));
		for(Map<String, Object> evo : data) {
			evo.put("NOW_PAGE", nowPage);
			evo.put("TOTAL_BOARD_COUNT", totalBoardCount);
			evo.put("PREVPAGE", PrevPage);
			evo.put("NEXTPAGE", NextPage);
			newData.add(evo);
		}
		data = newData;
		log.info("data {}", data);
		return data;
	}
}
