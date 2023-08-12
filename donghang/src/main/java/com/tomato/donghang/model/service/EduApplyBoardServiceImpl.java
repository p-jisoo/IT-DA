package com.tomato.donghang.model.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;



import org.springframework.stereotype.Service;



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
		List<Map<String, Object>> data = new ArrayList<Map<String, Object>>();
		List<EduApplyBoardVO> list = eduApplyBoardMapper.findBoardList();
		for(EduApplyBoardVO evo : list) {
			Map<String, Object> row = new HashMap<String, Object>();
			row.put("BOARD_NO", evo.getEboardNo());
			row.put("BOARD_TITLE", evo.getEduBoardTitle());
			row.put("PERIOD", evo.getEduBoardApplyStartPeriod());
			row.put("BOARD_CATEGORY", evo.getEduApplyBoardCategory());
			row.put("APPLY_STATUS", evo.getEduApplyBoardStatus());
			data.add(row);
			log.debug("findBoardList {}" , data);
		}
		return data;
	}
	
	
	

}
