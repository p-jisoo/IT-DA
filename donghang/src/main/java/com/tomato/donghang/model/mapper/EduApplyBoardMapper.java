package com.tomato.donghang.model.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.tomato.donghang.model.vo.EduApplyBoradVO;

@Mapper
public interface EduApplyBoardMapper {

	EduApplyBoradVO createBoard();

}
