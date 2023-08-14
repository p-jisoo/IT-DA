package com.tomato.donghang.model.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.cleopatra.protocol.data.ParameterGroup;
import com.tomato.donghang.model.vo.MemberVO;

@Mapper
public interface MemberMapper {

	int registerMember(MemberVO vo);
	
	void updateMember(MemberVO vo);

	MemberVO loginMember(MemberVO memberVO);






	
	
	

}
