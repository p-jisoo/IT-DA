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
	public void createBoard(EduApplyBoardVO vo) {
		eduApplyBoardMapper.createBoard(vo);
	}

	@Override
	public List<Map<String, Object>> findBaordList() {
		long totalBoardCount = eduApplyBoardMapper.findAllBoardCount();
		List<Map<String, Object>> data = new ArrayList<Map<String, Object>>();
		List<EduApplyBoardVO> list = eduApplyBoardMapper.findBoardList();
		for(EduApplyBoardVO evo : list) {
			Map<String, Object> row = new HashMap<String, Object>();
			row.put("BOARD_NO", evo.getEboardNo());
			row.put("BOARD_TITLE", evo.getEduBoardTitle());
			row.put("PERIOD", evo.getEduBoardApplyStartPeriod());
			row.put("BOARD_CATEGORY", evo.getEduApplyBoardCategory());
			row.put("APPLY_STATUS", evo.getEduApplyBoardStatus());
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
		String PrevPage = null;
		String NextPage = null;
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
			row.put("BOARD_NO", evo.getEboardNo());
			row.put("BOARD_TITLE", evo.getEduBoardTitle());
			row.put("PERIOD", evo.getEduBoardStartPeriod());
			row.put("BOARD_CATEGORY", evo.getEduApplyBoardCategory());
			row.put("APPLY_STATUS", evo.getEduApplyBoardStatus());
			row.put("NOW_PAGE", nowPage);
			row.put("TOTAL_BOARD_COUNT", totalBoardCount);
			row.put("PREVPAGE", PrevPage);
			row.put("NEXTPAGE", NextPage);
			data.add(row);
		}
		return data;
	}

}
