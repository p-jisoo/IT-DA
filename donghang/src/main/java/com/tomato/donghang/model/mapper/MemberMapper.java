package com.tomato.donghang.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import com.tomato.donghang.model.vo.MemberVO;
import com.tomato.donghang.model.vo.EduApplyBoardVO;
@Mapper
public interface MemberMapper {

	int registerMember(MemberVO vo);
	void updateMember(MemberVO vo);
	MemberVO loginMember(MemberVO memberVO);
	List<EduApplyBoardVO> findAllBoardList();

}
