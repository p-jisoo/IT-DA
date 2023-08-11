package com.tomato.donghang.model.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.cleopatra.protocol.data.ParameterGroup;



@Mapper
public interface MemberMapper {

	void registerMember(ParameterGroup data);
	
	

}
