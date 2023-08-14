package com.tomato.donghang.model.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.tomato.donghang.model.vo.EduApplyBoardVO;

@Mapper
public interface EduApplyBoardMapper {

	void createBoard(EduApplyBoardVO vo);

}
