package com.tomato.donghang.model.service;

import org.springframework.stereotype.Service;

import com.tomato.donghang.model.mapper.EduApplyBoardMapper;
import com.tomato.donghang.model.vo.EduApplyBoardVO;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EduApplyBoardServiceImpl implements EduApplyBoardService {
	private final EduApplyBoardMapper eduApplyBoardMapper;

	@Override
	public void createBoard(EduApplyBoardVO vo) {
			
		eduApplyBoardMapper.createBoard(vo);
	}
	
	
	

}
