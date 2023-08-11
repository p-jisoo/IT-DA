package com.tomato.donghang.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.tomato.donghang.model.vo.EduApplyBoardVO;

@Mapper
public interface MemberMapper {

	List<EduApplyBoardVO> findAllBoardList();

}
