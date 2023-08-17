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
			vo.setEduBoardMemberCount(Integer.parseInt(eduBoardMemberCount));	
		}catch(NumberFormatException e){
			vo.setEduBoardMemberCount(Integer.parseInt("999"));
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
			vo.setEduBoardMemberCount(Integer.parseInt(eduBoardMemberCount));	
		}catch(NumberFormatException e){
			vo.setEduBoardMemberCount(Integer.parseInt("999"));
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
			row.put("APPLY_STATUS", evo.getEduBoardStatus());
			row.put("TOTAL_BOARD_COUNT", totalBoardCount);
			data.add(row);
		}
		return data;
	}

	@Override
	public List<Map<String, Object>> findBoardListWithStatusByPage(ParameterGroup param) {
		long nowPage = 0;
		Pagination pagination;
		List<Map<String, Object>> data = new ArrayList<Map<String, Object>>();
		String PrevPage = "0";
		String NextPage = "0";
		String applyStatus =  param.getValue("status");
		List<EduApplyBoardVO> list = null;
		if(param.getValue("status")==null || param.getValue("status")=="" || param.getValue("status").length()<3) {
			applyStatus= "";
		}
		
		long totalBoardCount = eduApplyBoardMapper.findBoardCountByStatus(applyStatus);
		
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
	    list = eduApplyBoardMapper.findBoardListWithStatusByPage(map);
		for(EduApplyBoardVO evo : list) {
			Map<String, Object> row = new HashMap<String, Object>();
			row.put("BOARD_NO", evo.getEduBoardNo());
			row.put("BOARD_TITLE", evo.getEduBoardTitle());
			row.put("PERIOD", evo.getEduBoardStartPeriod());
			row.put("BOARD_CATEGORY", evo.getEduBoardCategory());
			row.put("APPLY_STATUS", evo.getEduBoardStatus());
			row.put("NOW_PAGE", nowPage);
			row.put("TOTAL_BOARD_COUNT", totalBoardCount);
			row.put("PREVPAGE", PrevPage);
			row.put("NEXTPAGE", NextPage);
			data.add(row);
		}
		return data;
	}
}
